<template>
  <div id="app">
    <vue-demonstration
        tag="h2"
        anchor="demo-shi-li"
        title="Demo 示例展示"
        description="So easy!"
        :show-content="false">
    </vue-demonstration>
    <vue-demonstration
        :multiple="false"
        :highlight="sourcecodeA"
        anchor="dan-ge-shi-li"
        title="单个示例"
        description="只展示一个示例。">
      <template slot="source">
        <vm-rate
            v-model="valueA"
            show-text></vm-rate>
      </template>
      <template slot="explanation">
        左侧代表的是这个块（标题：“单个示例”，描述：“只展示一个示例”，积极代码区域）的代码。其中 <code>multiple</code> 表示是否展示多个示例，<code>anchor</code> 表示为标题增加锚点，
        <code>title</code> 表示为标题 “单个示例”， <code>description</code> 表示为描述：“只展示一个示例”，<code>slot="source"</code> 表示的就是左侧的代码
        <code>slot="explanation"</code> 表示的是这段解释。
      </template>
    </vue-demonstration>
    <vue-demonstration
        :multiple="true"
        :highlight="sourcecodeB">
      <template slot="description">
        当 <code>multiple=true</code> 时，也是可以展示单个示例的。
        只需增加 <code>class="vd-demo__block vd-demo__block-1"</code>。
      </template>
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-1">
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
      </template>
      <template slot="explanation">
      </template>
    </vue-demonstration>
    <vue-demonstration
        :multiple="true"
        :highlight="sourcecodeC"
        description="同时可以带一些简单的描述。">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-1">
          <span class="vd-demo__demonstration">简单的描述一下吧</span>
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
      </template>
      <template slot="explanation">
      </template>
    </vue-demonstration>
    <vue-demonstration
        :multiple="true"
        :highlight="sourcecodeD"
        description="还可以这样，只需把 <code>class=vd-demo__block-1</code> 换成 <code>class=vd-demo__block-2</code>">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
      </template>
      <template slot="explanation">
      </template>
    </vue-demonstration>
    <vue-demonstration
        :multiple="true"
        :highlight="sourcecodeE"
        description="同样地，可以带一些简单的描述。">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2">
          <span class="vd-demo__demonstration">简单的描述一下吧</span>
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
      </template>
      <template slot="explanation">
      </template>
    </vue-demonstration>
    <vue-demonstration
        :multiple="true"
        :highlight="sourcecodeF"
        description="这样也是可以的。通过指定 <code>class=vd-demo__horizontal</code> 配合 <code>class=vd-demo__wrapper</code> 改变展现方式。">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2 vd-demo__horizontal">
          <span class="vd-demo__demonstration">简单的描述一下吧</span>
          <div class="vd-demo__wrapper">
            <vm-rate
                v-model="valueA"
                show-text></vm-rate>
          </div>
        </div>
      </template>
      <template slot="explanation">
      </template>
    </vue-demonstration>
    <vue-demonstration
        :multiple="true"
        :highlight="sourcecodeG"
        anchor="duo-ge-shi-li"
        title="多个示例"
        description="可以同时展示多个示例。可以很好的进行对比。">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-1">
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
        <div class="vd-demo__block vd-demo__block-1">
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
        <div class="vd-demo__block vd-demo__block-1">
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
        <div class="vd-demo__block vd-demo__block-1">
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
      </template>
      <template slot="explanation">
      </template>
    </vue-demonstration>
    <vue-demonstration
        :multiple="true"
        :highlight="sourcecodeH"
        anchor="dan-ge-shi-li"
        description="奇数个，也可以很好的展示。">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-1">
          <span class="vd-demo__demonstration">简单的描述一下吧</span>
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
        <div class="vd-demo__block vd-demo__block-1">
          <span class="vd-demo__demonstration">简单的描述一下吧</span>
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
        <div class="vd-demo__block vd-demo__block-1">
          <span class="vd-demo__demonstration">简单的描述一下吧</span>
          <vm-rate
              v-model="valueA"
              show-text></vm-rate>
        </div>
      </template>
      <template slot="explanation">
      </template>
    </vue-demonstration>
    <vue-demonstration
        :multiple="true"
        :highlight="sourcecodeI"
        anchor="dan-ge-shi-li"
        description="还可以这样进行展示多个。">
      <template slot="source">
        <div class="vd-demo__block vd-demo__block-2 vd-demo__horizontal">
          <span class="vd-demo__demonstration">简单的描述一下吧</span>
          <div class="vd-demo__wrapper">
            <vm-rate
                v-model="valueA"
                show-text></vm-rate>
          </div>
        </div>
        <div class="vd-demo__block vd-demo__block-2 vd-demo__horizontal">
          <span class="vd-demo__demonstration">简单的描述一下吧</span>
          <div class="vd-demo__wrapper">
            <vm-rate
                style="display: inline-block; margin-left: 20px;"
                v-model="valueA"
                show-text></vm-rate>
            <vm-rate
                style="display: inline-block; margin-left: 20px;"
                v-model="valueA"
                show-text></vm-rate>
          </div>
        </div>
        <div class="vd-demo__block vd-demo__block-2 vd-demo__horizontal">
          <span class="vd-demo__demonstration">简单的描述一下吧</span>
          <div class="vd-demo__wrapper">
            <vm-rate
                style="display: inline-block; margin-left: 20px;"
                v-model="valueA"
                show-text></vm-rate>
            <vm-rate
                style="display: inline-block; margin-left: 20px;"
                v-model="valueA"
                show-text></vm-rate>
            <vm-rate
                style="display: inline-block; margin-left: 20px;"
                v-model="valueA"
                show-text></vm-rate>
          </div>
        </div>
      </template>
      <template slot="explanation">
      </template>
    </vue-demonstration>
    <vue-demonstration
        :multiple="true"
        anchor="zhan-shi-biao-ge"
        title="展示表格"
        description="方便你进行项目参数展示。"
        :highlight="sourcecodeJ">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
          </thead>
          <tbody>
          <tr>
            <td>multiple <i class="vd-demo__new">（特殊标识）</i></td>
            <td>是否同时展示多个示例</td>
            <td>boolean</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>highlight</td>
            <td>要展示的代码</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          </tbody>
        </table>
      </template>
      <template slot="explanation">
        通过 <code>slot="table"</code> 添加表格， 通过 <code>class="vd-demo__table"</code> 设置表格样式，还可以通过 <code>class="vd-demo__new"</code> 增加特殊标识。
      </template>
    </vue-demonstration>
    <vue-demonstration
        anchor="attributes"
        title="Attributes"
        :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
          </thead>
          <tbody>
          <tr>
            <td>multiple <i class="vd-demo__new">（特殊标识）</i></td>
            <td>是否同时展示多个示例</td>
            <td>boolean</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>highlight</td>
            <td>要展示的代码</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr><tr>
            <td>tag</td>
            <td>标题标签</td>
            <td>string</td>
            <td>h2 / h3 / *</td>
            <td>h3</td>
          </tr>
          <tr>
            <td>anchor</td>
            <td>标题锚点</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>title</td>
            <td>标题文字</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>description</td>
            <td>标题描述</td>
            <td>string</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>show-content</td>
            <td>是否显示内容</td>
            <td>boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>expand</td>
            <td>是否展开代码</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
      </template>
    </vue-demonstration>
    <vue-demonstration
        anchor="slots"
        title="Slots"
        :show-content="false">
      <template slot="table">
        <table class="vd-demo__table">
          <thead>
          <th>参数</th>
          <th>说明</th>
          </thead>
          <tbody>
          <tr>
            <td>description</td>
            <td>标题描述</td>
          </tr>
          <tr>
            <td>source</td>
            <td>展示示例</td>
          </tr>
          <tr>
            <td>explanation</td>
            <td>解释代码</td>
          </tr>
          <tr>
            <td>table</td>
            <td>展示表格</td>
          </tr>
          </tbody>
        </table>
      </template>
    </vue-demonstration>
  </div>
</template>

<script type="es6">

  import {
      sourcecodeA,
      sourcecodeB,
      sourcecodeC,
      sourcecodeD,
      sourcecodeE,
      sourcecodeF,
      sourcecodeG,
      sourcecodeH,
      sourcecodeI,
      sourcecodeJ
  } from './template'

  export default {
    data () {
      return {
        valueA: 3,
        sourcecodeA,
        sourcecodeB,
        sourcecodeC,
        sourcecodeD,
        sourcecodeE,
        sourcecodeF,
        sourcecodeG,
        sourcecodeH,
        sourcecodeI,
        sourcecodeJ
      }
    }
  }
</script>

<style>
  #app {
    margin: 60px auto;
  }
</style>
