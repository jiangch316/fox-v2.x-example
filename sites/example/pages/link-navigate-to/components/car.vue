<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-17 21:06:15
-->
<template>
    <div @click="onClick">this is car</div>
</template>
<script>
export default {
    methods: {
        onClick() {
            console.info('this is car')
        }
    }
}
</script>
