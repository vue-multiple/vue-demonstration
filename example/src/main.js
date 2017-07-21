import Vue from 'vue'
import App from './App.vue'

import Demo from '../../src/index.js'
Vue.component(Demo.name, Demo)

import VmRate from 'vue-multiple-rate'
import 'vue-multiple-rate/lib/rate.css'
Vue.component(VmRate.name, VmRate)

new Vue({
    el: '#app',
    render: h => h(App)
})
