<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 17:59:28
-->
<template>
    <div>
        <div>主面版</div>
        <div>
            <input type="text" />
        </div>
        <div><fox-router-view :multi="false"></fox-router-view></div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.info(`>>>>> on mounted(panel)`)
    },
    beforeDestroy() {
        console.info(`----- on unmounted(panel)`)
    }
}
</script>