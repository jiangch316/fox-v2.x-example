<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 17:59:28
-->
<template>
    <div>
        <div>主面版</div>
        <div>
            <button class="my-button" @click="toHome">go home</button>
            <button class="my-button" @click="toAbout">go about</button>
        </div>
        <div>
            <input type="text" />
        </div>
        <div>
            <fox-router-view name="_sub_root_view" :multi="false"></fox-router-view>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toHome() {
            // 参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
            this.$router.push('/home', { target: 'home' }, '_sub_root_view')
        },

        toAbout() {
            // 参数 target: 路由path，data: 页面传递数据，root: 替换的fox-router-view的名称
            this.$router.push('/about', { target: 'about' }, '_sub_root_view')
        }
    },
    mounted() {
        console.info('>>>>> on mounted(panel)')
    },
    beforeDestroy() {
        console.info('----- on unmounted(panel)')
    }
}
</script>
