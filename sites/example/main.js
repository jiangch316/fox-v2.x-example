/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-10 11:24:39
 */
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import fox from '@fox-js/fox'
import App from './App.vue'

console.info(VueCompositionAPI.getCurrentInstance)
// 安装composition API
Vue.use(VueCompositionAPI)

// 注册fox
Vue.use(fox)

// 注册到fox
window.fox = fox

new Vue({
    el: '#app',
    fox,
    components: {
        App,
    },
    template: '<App/>',
})