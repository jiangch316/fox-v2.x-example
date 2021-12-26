<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:22:17
-->
<template>
    <div>
    <div>
      <button @click="toHome" class="my-button">go home</button>
      <button @click="toAbout" class="my-button">go about</button>
      <button @click="toOther" class="my-button">go other</button>
    </div>
    <div class="my-router-view-div">
      <fox-router-view></fox-router-view>
    </div>
  </div>
</template>
<script>
import { FoxApp } from './index.ts'

export default {
    created() {
    //获取 fox
    let fox = this.$fox;
    //安装fox app
    FoxApp.install(fox);
  },
  //方法
  methods: {
    toHome() {
      console.info("--------- navigate to home a");
      this.$router.push("/panel/home");
    },

    toAbout() {
      console.info("--------- navigate to about b");
      this.$router.push("/panel/about");
    },

    toOther() {
      console.info("--------- navigate to other c");
      this.$router.push("/panel/other");
    },
  },
}
</script>

<style>
    .fox-card-views{
        padding: 0px 0x 0px 0px;
    }

    .fox-card-view{
        position: relative;
        overflow: hidden;
    }

    .fox-card-view-trans-enter {}

    .fox-card-view-trans-enter-active {
       animation: fox-card-view-in-slide-right 330ms;
        -webkit-animation: fox-card-view-in-slide-right 330ms;
        z-index: 120;
    }

    .fox-card-view-trans-enter-to {}

    /* 进场动画 */
    @-webkit-keyframes fox-card-view-in-slide-right {
        0% {
            opacity: 0;
            -webkit-transform: translateX(30%);
            transform: translateX(30%)
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0%);
            transform: translateX(0%)
        }
    }
    @keyframes fox-card-view-in-slide-right {
        0% {
            opacity: 0;
            -webkit-transform: translateX(30%);
            transform: translateX(30%)
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0%);
            transform: translateX(0%)
        }
    }
</style>
