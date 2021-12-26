<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:22:17
-->
<template>
    <div>
        <div>
            <button class="my-button" @click="toHome">go home</button>
            <button class="my-button" @click="toAbout">go about</button>
            <button class="my-button" @click="toOther">go other</button>
            <button class="my-button" @click="closeHome">close home</button>
            <button class="my-button" @click="closeAbout">close about</button>
            <button class="my-button" @click="closeOther">close other</button>
        </div>
        <div class="router-view-div router-view-div">
            <fox-router-view
                class="fox-card-views"
                view-class="fox-card-view"
                view-active-class="fox-card-view-active"
                view-deactive-class="fox-card-view-deactive"
                transition="true"
                transition-name="fox-card-view-trans"
                :multi="true"
            ></fox-router-view>
        </div>
    </div>
</template>
<script>
import { FoxApp } from './index.ts'

export default {
    created() {
        // 安装fox app
        FoxApp.install(this.$fox)
    },
    methods: {
        toHome() {
            this.$router.open({
                path: '/home',
                params: { name: 'home' },
                success: () => {
                    console.info('open home success')
                }
            })
        },
        toAbout() {
            this.$router.open('/about', { name: 'about' })
        },
        toOther() {
            this.$router.open('/other', { name: 'other' })
        },
        closeHome() {
            this.$router.close('/home')
        },
        closeAbout() {
            this.$router.close('/about')
        },
        closeOther() {
            this.$router.close('/other')
        }
    }
}
</script>

<style>
.router-view-div {
    width: 500px;
    height: 500px;
}

.fox-card-view-trans-enter,
.fox-card-view-trans-show {
    opacity: 0;
}

.fox-card-view-trans-enter-active,
.fox-card-view-trans-show-active {
    display: block !important;
    position: absolute;
    top: 0px;
    z-index: 10;
}

.fox-card-view-trans-enter-to,
.fox-card-view-trans-show-to {
    animation: fox-card-view-in-slide-right 3330ms;
    -webkit-animation: fox-card-view-in-slide-right 3330ms;
    z-index: 120;
}

.fox-card-view-trans-leave,
.fox-card-view-trans-hide {
    /* 占位 */
}

.fox-card-view-trans-leave-active,
.fox-card-view-trans-hide-active {
}

.fox-card-view-trans-leave-to,
.fox-card-view-trans-hide-to {
    animation: fox-card-view-out 330ms;
    -webkit-animation: fox-card-view-out 330ms;
    z-index: 100;
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

/* 进场动画 */
@-webkit-keyframes fox-card-view-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes fox-card-view-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
