<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-28 11:39:04
-->
<template>
    <div>
        <div>
        <button class="my-button" @click="to('/dog')">go dog</button>
        <button class="my-button" @click="to('/cat')">go cat</button>
        <button class="my-button" @click="to('/snake')">go snake</button>
    </div>
     <div>
         <fox-router-view></fox-router-view>
    </div>
    </div>
</template>
<script>
import { FoxApp } from './index.ts'

export default {
    //create
    created(){
        FoxApp.install(this.$fox)
    },
    //方法
    methods:{
        to(path){
            //参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
             this.$router.push(path, {})
        }
    }
}
</script>