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
            val: '',
            list: []
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
            console.info(this.$route)
        }
    },
    activated() {
        console.info('>>>> on activated(home)')
        console.info(this.$route)
    },
    deactivated() {
        console.info('>>>> on dactivated(home)')
    },
    mounted() {
        console.info('>>>> on mounted(home 1000000)')
        // for (let i = 0; i < 1000000; i++) {
        //     this.list.push(`jiangcheng index:${i}`)
        // }
    },
    beforeDestroy() {
        console.info('---- on unmounted(home)')
    }
}
</script>
