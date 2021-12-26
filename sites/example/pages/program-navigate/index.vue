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
            <button class="my-button" @click="closeHome">close home</button>
            <button class="my-button" @click="closeAbout">close about</button>
            <button class="my-button" @click="changeProps">change props</button>
        </div>
        <div class="my-router-view-div">
            <fox-router-view :pass-props="passProps"></fox-router-view>
        </div>
    </div>
</template>
<script>
import { FoxApp } from './index.ts'

export default {
    data() {
        return {
            passProps: {
                index: 0,
                name: 'jiangcheng'
            }
        }
    },
    created() {
        // 获取 fox
        let fox = this.$fox
        // 安装fox app
        FoxApp.install(fox)
    },
    // 方法
    methods: {
        toHome() {
            console.info('--------- navigate to home a')
            this.$router.push('/home')
        },

        toAbout() {
            console.info('--------- navigate to about b')
            this.$router.push('/about')
        },

        closeHome() {
            this.$router.close('/home')
        },

        closeAbout() {
            this.$router.close('/about')
        },

        changeProps() {
            console.info('---------', this.passProps)
            this.passProps.index++
            this.passProps.name = this.passProps.index % 2 == 0 ? 'hello' : 'jiangheng'
        }
    }
}
</script>

<style scoped>
.fox-router-link-active {
    color: red;
}
</style>
