<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:22:17
-->
<template>
  <div>
    <div>
        <button class="my-button" @click="toPanel">go panel</button>
     </div>
     <div class="my-router-view-div">
        <fox-router-view></fox-router-view>
      </div>
  </div>
</template>
<script>


import { FoxApp } from './index.ts'

export default {
  created(){
    //安装fox app
    FoxApp.install(this.$fox)
  },
  methods:{
    toPanel(){
      this.$router.push('/panel')
    }
  }
}
</script>

<style>
.fox-card-views {
  padding: 0px 0x 0px 0px;
}

.fox-card-view {
  position: relative;
  overflow: hidden;
}

.fox-card-view-trans-enter {
}

.fox-card-view-trans-enter-active {
  animation: fox-card-view-in-slide-right 330ms;
  -webkit-animation: fox-card-view-in-slide-right 330ms;
  z-index: 120;
}

.fox-card-view-trans-enter-to {
}

/* 进场动画 */
@-webkit-keyframes fox-card-view-in-slide-right {
  0% {
    opacity: 0;
    -webkit-transform: translateX(30%);
    transform: translateX(30%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@keyframes fox-card-view-in-slide-right {
  0% {
    opacity: 0;
    -webkit-transform: translateX(30%);
    transform: translateX(30%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
</style>
