<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 17:59:28
-->
<template>
    <div>
        <div>主面版2</div>
        <div>
            <input type="text" />
        </div>
        <div>
            <fox-router-view :multi="false"></fox-router-view>
        </div>
    </div>
</template>
<script>
export default {
    activated() {
        console.info('>>>> on activated(panel2)')
        console.info(this.$route)
    },
    deactivated() {
        console.info('>>>> on dactivated(panel2)')
    },
    mounted() {
        console.info('>>>>> on mounted(panel2)')
        console.info(this.$route)
    },
    beforeDestroy() {
        console.info('----- on unmounted(panel2)')
    }
}
</script>
