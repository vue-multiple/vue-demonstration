# vue-demonstration

> Vue-based element docs's demo code style component, easily add examples to your Vue project to show your code.

## Install 

```bash
npm install vue-demonstration -S
```

## Quick Start
 
```bash
 import Vue from 'vue'
 import VueDemo from 'vue-demonstration'
 
 Vue.component('vue-demonstration', VueDemo)
 ```
 
For more information, please refer to [vue-demonstration](http://savoygu.github.io/vue-demonstration) in our documentation.
 
## Usage
 
```
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

If you want to add some javascript code to `sourcecode`，you need to put the `sourcecode` into a js file.

## Build Setup

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