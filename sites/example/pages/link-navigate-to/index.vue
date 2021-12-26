<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-25 12:59:40
-->
<template>
    <div>
        <div class="link-items">
            <fox-router-link class="my-link" active-class="fox-router-link-active" tag="a" to="/dog">go home</fox-router-link>
            <fox-router-link class="my-link" active-class="fox-router-link-active" tag="a" to="/car">go about</fox-router-link>
        </div>
        <div class="my-router-view-div">
            <fox-router-view></fox-router-view>
        </div>
    </div>
</template>
<script>
import { FoxApp } from './index.ts'

export default {
    async created() {
        let func = async () => true
        await func()
        // 获取 fox
        let fox = this.$fox
        // 安装fox app
        FoxApp.install(fox)
    }
}
</script>

<style scoped>
.link-items {
    padding: 10px;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
}

.fox-router-link-active {
    color: red;
}
</style>
