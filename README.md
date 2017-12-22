# vue-demonstration

> Element 1.x 代码示例展示风格。帮助你展示你的 Vuejs 组件示例。

## 安装

```bash
npm install vue-demonstration --save
```

## 快速开始

```bash
 import Vue from 'vue'
 import VueDemo from 'vue-demonstration'

 Vue.component('vue-demonstration', VueDemo)
 ```

更多使用方式，参考文档：[vue-demonstration](https://demonstration.savoygu.com/vue-demonstration)

## 使用方式

```html

<template>
  <vue-demonstration
    title="标题"
    description="标题描述"
    anchor="锚点"
    tag="标题标签" <!-- h2 / h3-->
    :highlight="sourcecode">
    <template slot="source">
      <div>your code</div> <!-- 源代码-->
    </template>
    <template slot="explanation">
      代码描述
    </template>
  </vue-demonstration>
</template>

<script>
  const sourcecode = `<div>your code</div>`
  export default {
     data () {
        return {
          sourcecode
        }
     }
  }
</script>

```

如果要展示的代码较多的话，可以单独放一个文件中。

## 运行方式和构建

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run demo:dev

# build for demo with minification
npm run demo:build

# build for gh-pages with minification
npm run demo:prepublish

# build for production with minification
npm run build

# generate gh-pages
npm run deploy

```

## LICENSE

[MIT](http://opensource.org/licenses/MIT)