<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-21 00:00:22
-->
<template>
    <div>
        <div>Other</div>
        <div><input type="text" ref="input" :value="val" @change="onChange" @input="onInput" /></div>
        <button @click="onClick">测试</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            val: ''
        }
    },
    methods: {
        onChange() {
            this.val = this.$refs.input.value
        },
        onInput() {
            this.val = this.$refs.input.value
        },
        onClick() {
            console.info('this is a click(other)123')
            console.info(this.$route)
        }
    },
    activated() {
        console.info('>>>> on activated(other)')
        console.info(this.$route)
    },
    deactivated() {
        console.info('>>>> on dactivated(other)')
    },
    mounted() {
        console.info('>>>> on mounted(other)')
    },
    beforeDestroy() {
        console.info('---- on unmounted(other)')
    }
}
</script>
