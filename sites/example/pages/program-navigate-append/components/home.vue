<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 07:03:51
-->
<template>
    <div>
        <div>Home</div>
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
            console.info('this is a click(home)')
        }
    },
    mounted() {
        console.info('>>>> on mounted(home)')
    },
    beforeDestroy() {
        console.info('---- on unmounted(home)')
    }
}
</script>