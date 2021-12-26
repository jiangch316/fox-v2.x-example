<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 07:03:51
-->
<template>
    <div>
        <div>Home</div>
        <div><input type="text" ref="input" /></div>
    </div>
</template>
<script>
export default {
    methods: {},
    mounted() {
        console.info('>>>> on mounted(about)')
    },
    beforeDestroy() {
        console.info('---- on unmounted(about)')
    }
}
</script>
