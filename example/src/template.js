export const sourcecodeA = `<vue-demonstration
  :multiple="false"
  anchor="dan-ge-shi-li"
  title="单个示例"
  description="只展示一个示例">
  <template slot="source">
    <vm-rate
        v-model="valueA"
        show-text></vm-rate>
  </template>
  <template slot="explanation">
    左侧代表的是这个块（标题：“单个示例”，描述：“只展示一个示例”，积极代码区域）的代码。
    其中：
    <code>multiple</code> 表示是否展示多个示例，
    <code>anchor</code> 表示为标题增加锚点，
    <code>title</code> 表示为标题 “单个示例”，
    <code>description</code> 表示为描述：“只展示一个示例”，
    <code>slot="source"</code> 表示的就是左侧的代码,
    <code>slot="explanation"</code> 表示的是这段解释。
  </template>
</vue-demonstration>

<script>
  export default {
    data () {
      return {
        valueA: 3,
        sourcecodeA
      }
    }
  }
</script>`

export const sourcecodeB = `<vue-demonstration
    :multiple="true"
    :highlight="sourcecodeA">
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
</vue-demonstration>`

export const sourcecodeC = `<vue-demonstration
    :multiple="true"
    :highlight="sourcecodeA"
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
</vue-demonstration>`

export const sourcecodeD = `<vue-demonstration
    :multiple="true"
    :highlight="sourcecodeA"
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
</vue-demonstration>`

export const sourcecodeE = `<vue-demonstration
    :multiple="true"
    :highlight="sourcecodeA"
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
</vue-demonstration>`

export const sourcecodeF = `<vue-demonstration
    :multiple="true"
    :highlight="sourcecodeA"
    description="这样也是可以的。通过指定 <code>class=vd-demo__horizontal</code> 
    配合 <code>class=vd-demo__wrapper</code> 改变展现方式。">
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
</vue-demonstration>`

export const sourcecodeG = `<vue-demonstration
    :multiple="true"
    :highlight="sourcecodeA"
    anchor="dan-ge-shi-li"
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
</vue-demonstration>`

export const sourcecodeH = `<vue-demonstration
    :multiple="true"
    :highlight="sourcecodeA"
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
</vue-demonstration>`

export const sourcecodeI = `<vue-demonstration
    :multiple="true"
    :highlight="sourcecodeA"
    anchor="dan-ge-shi-li"
    description="还可以这样展示多个进行对比。">
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
</vue-demonstration>`

export const sourcecodeJ = `<vue-demonstration
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
</vue-demonstration>`

export const sourcecodeK = `import VueDemonstration from 'vue-demonstration'`