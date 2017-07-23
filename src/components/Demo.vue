<template>
  <div class="vd-demo">
    <vd-demo-title
        :title="title"
        :anchor="anchor"
        :tag="tag"
        :has-slot="!!$slots.title"></vd-demo-title>
    <vd-demo-description
        :description="description"
        :has-slot="!!$slots.description">
    </vd-demo-description>
    <slot name="table"></slot>
    <slot name="code">
      <div class="vd-demo__code" v-if="code">
        <pre v-highlightjs="code"><code class="html language-javascript"></code></pre>
      </div>
    </slot>
    <div class="vd-demo__content" v-if="showContent">
      <div class="vd-demo__source" :style="{padding: multiple ? '0' : '24px'}" ref="source">
        <slot name="source"></slot>
      </div>
      <div class="vd-demo__meta" ref="meta">
        <div class="vd-demo__explanation" ref="explanation">
          <slot name="explanation"></slot>
        </div>
        <div class="vd-demo__highlight" ref="highlight">
          <pre v-highlightjs="highlight"><code class="html javascript"></code></pre>
        </div>
      </div>
      <div
          class="vd-demo__control"
          @click="handleControl"
          @mouseenter="showText = true"
          @mouseleave="showText = false">
        <i :class="['vd-demo__icon', (showMeta ? 'vd-demo-icon-circle-up' : 'vd-demo-icon-circle-down'), {'vd-demo--hovering': showText}]"></i>
        <transition name="vd-demo-text-slide">
          <span v-if="showText">{{ showMeta ? '隐藏代码' : '显示代码' }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueHighlightJS from 'vue-highlightjs'
  Vue.use(VueHighlightJS)

  export default {
    name: 'VueDemonstration',

    props: {
      multiple: Boolean,
      highlight: String,
      code: String,
      tag: {
        type: String,
        default: 'h3'
      },
      anchor: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      showContent: {
        type: Boolean,
        default: true
      },
      expand: Boolean
    },

    data () {
      return {
        showMeta: this.expand,
        showText: false
      }
    },

    mounted () {
      let source = this.$refs.source
      if (source) {
        let blocks = source.querySelectorAll('.vd-demo__block-1')
        if (
          blocks.length
          && blocks.length % 2 === 1
          && blocks.length - 2 > 0
        ) {
          blocks[blocks.length - 2].style.borderBottom = '1px solid #eff2f6'
        }
      }
      if (this.showMeta && this.showContent) {
        this.$refs.meta.style.height = Math.max(this.$refs.highlight.clientHeight, this.$refs.explanation.clientHeight) + 'px'
      }
    },

    methods: {
      handleControl () {
        if (this.showMeta) {
          this.$refs.meta.style.height = 0
        } else {
          this.$refs.meta.style.height = Math.max(this.$refs.highlight.clientHeight, this.$refs.explanation.clientHeight) + 'px'
        }
        this.showMeta = !this.showMeta
      }
    },
    components: {
      'vd-demo-title': {
        props: {
          title: String,
          anchor: String,
          tag: String,
          hasSlot: Boolean
        },
        render (h) {
          return h(this.tag, {
              attrs: {
                id: this.anchor
              }
            },
            [
              h('a', {
                attrs: {
                  href: '#' + this.anchor,
                  'aria-hidden': true,
                  class: 'header-anchor'
                },
                domProps: {
                  innerHTML: '¶'
                }
              }),
              this.title ? this.title : (this.hasSlot ? this.$parent.$slots.title : '' )
            ])
        }
      },
      'vd-demo-description': {
        props: {
          description: String,
          hasSlot: Boolean
        },
        render (h) {
          if (this.description) {
            return h('p', {
              attrs: {
                class: 'vd-demo__desc'
              },
              domProps: {
                innerHTML: this.description
              }
            })
          } else if (this.hasSlot) {
            return h('p', {
              attrs: {
                class: 'vd-demo__desc'
              }
            }, this.$parent.$slots.description)
          }
        }
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../styles/less/style";

  .vd-demo {
    width: 1000px;
    margin: 0 auto;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    h2 {
      font-size: 28px;
      margin: 0
    }
    h3 {
      font-size: 22px;
      margin: 45px 0 15px;
    }
    h2, h3 {
      font-weight: 400;
      color: #1f2f3d;
      &:hover {
        a {
          opacity: .4;
        }
      }
      a {
        float: left;
        margin-left: -20px;
        opacity: 0;
        cursor: pointer;
        color: #4078c0;
        text-decoration: none;
        &:hover {
          opacity: .4;
        }
      }
    }
    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }
    &__new {
      font-style: normal;
      color: #FF4949;
      code {
        background-color: #FF4949 !important;
        color: #fff !important;
      }
    }
    &__desc {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
      a {
        color: #2d8cf0;
        background: 0 0;
        text-decoration: none;
        outline: 0;
        cursor: pointer;
        transition: color .2s ease;
        &:hover {
          color: #57a3f3;
        }
      }
      code {
        background-color: #f9fafc;
        padding: 0 4px;
        border: 1px solid #eaeefb;
        border-radius: 4px;
      }
    }
    &__content {
      border: 1px solid #eaeefb;
      border-radius: 4px;
      transition: .2s;
      &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
      }
    }
    &__block {
      float: left;
      width: 50%;
      text-align: center;
      box-sizing: border-box;
      &.vd-demo__block-1 {
        width: 50%;
        padding: 30px 0;
        border-right: 1px solid #eff2f6;
        border-bottom: 1px solid #eff2f6;
        &:nth-child(2n) {
          border-right: none;
        }
        &:nth-last-child(2), &:nth-last-child(1) {
          border-bottom: none;
        }
      }
      &.vd-demo__block-2 {
        width: 100%;
        padding: 30px 24px;
        border-bottom: 1px solid #eff2f6;
        &:last-child {
          border-bottom: none;
        }
      }
    }
    &__demonstration {
      display: inline-block;
      color: #8492a6;
      font-size: 14px;
      margin-bottom: 20px;
    }
    &__horizontal {
      text-align: left;
      span.vd-demo__demonstration {
        display: inline;
      }
    }
    &__wrapper {
      float: right;
      margin-right: 20px;
    }
    &__meta {
      background-color: #f9fafc;
      border-top: 1px solid #eaeefb;
      clear: both;
      overflow: hidden;
      height: 0;
      transition: height .2s;
    }
    &__explanation {
      float: right;
      width: 40%;
      padding: 18px 24px;
      font-size: 14px;
      line-height: 1.8;
      color: #5e6d82;
      word-break: break-word;
      border-left: 1px solid #eaeefb;
      box-sizing: border-box;
      p {
        margin: 0 0 12px;
        line-height: 1.8;
        font-size: 14px;
        color: #5e6d82;
      }
      code {
        color: #5e6d82;
        background-color: #e6effb;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
      }
    }
    &__code {
      pre {
        .hljs {
          line-height: 1.8;
          font-family: Menlo, Monaco, Consolas, Courier, monospace;
          font-size: 12px;
          padding: 18px 24px;
          background-color: #f9fafc;
          border: 1px solid #eaeefb;
          margin-bottom: 25px;
          border-radius: 4px;
          -webkit-font-smoothing: auto;
        }
      }
    }
    &__highlight {
      width: 60%;
      border-right: 1px solid #eaeefb;
      pre {
        margin: 0;
        code {
          &.hljs {
            max-height: none;
            margin: 0;
            padding: 18px 24px;
            line-height: 1.8;
            font-size: 12px;
            background-color: #f9fafc;
            border: none;
            border-radius: 0;
            -webkit-font-smoothing: auto;
          }
        }
      }
    }
    &__control {
      position: relative;
      height: 36px;
      margin-top: -1px;
      text-align: center;
      color: #d3dce6;
      background-color: #fff;
      border-top: 1px solid #eaeefb;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      transition: .2s;
      &:hover {
        color: #20a0ff;
        background-color: #f9fafc;
      }
      i {
        display: inline-block;
        font-size: 12px;
        line-height: 36px;
        transition: .3s;
        &.vd-demo--hovering {
          transform: translateX(-40px);
        }
      }
      span {
        position: absolute;
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 36px;
        transition: .3s;
      }
      .vd-demo-text-slide-enter,
      .vd-demo-text-slide-leave-active {
        opacity: 0;
        transform: translateX(10px)
      }
    }
    &__table {
      width: 100%;
      border-collapse: collapse;
      background-color: #fff;
      color: #5e6d82;
      font-size: 14px;
      line-height: 1.5em;
      th {
        text-align: left;
        border-top: 1px solid #eaeefb;
        background-color: #eff2f7;
        white-space: nowrap;
      }
      th, td {
        border-bottom: 1px solid #eaeefb;
        padding: 10px;
        max-width: 250px;
      }
    }
    .hljs {
      display: block;
      overflow-x: auto;
      padding: .5em;
      background: #fff
    }
    .hljs, .hljs-subst {
      color: #000
    }
    .hljs-addition, .hljs-meta, .hljs-string, .hljs-symbol, .hljs-template-tag, .hljs-template-variable {
      color: #756bb1
    }
    .hljs-comment, .hljs-quote {
      color: #636363
    }
    .hljs-bullet, .hljs-link, .hljs-literal, .hljs-number, .hljs-regexp {
      color: #31a354
    }
    .hljs-deletion, .hljs-variable {
      color: #88f
    }
    .hljs-built_in, .hljs-doctag, .hljs-keyword, .hljs-name, .hljs-section, .hljs-selector-class, .hljs-selector-id, .hljs-selector-tag, .hljs-strong, .hljs-tag, .hljs-title, .hljs-type {
      color: #3182bd
    }
    .hljs-emphasis {
      font-style: italic
    }
    .hljs-attribute {
      color: #e6550d
    }
  }
</style>
