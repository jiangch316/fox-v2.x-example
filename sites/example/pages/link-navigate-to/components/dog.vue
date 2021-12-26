<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-17 21:05:54
-->
<template>
    <div @click="onClick">this is dog</div>
</template>
<script>
export default {
    methods: {
        onClick() {
            console.info('this is dog')
        }
    }
}
</script>
