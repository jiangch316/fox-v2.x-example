<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 08:02:08
-->
<template>
    <div>
        <div>About</div>
        <div><input type="text" ref="input" :value="val" @change="onChange" @input="onInput"></div>
    </div>
    
</template>
<script>


export default {
    data(){
        return {
            val:''
        }
    },
    methods:{
        onChange(){
            this.val = this.$refs.input.value
        },
        onInput(){
            this.val = this.$refs.input.value
        }
    },
    mounted(){
        console.info('>>>> on mounted(about)')
    },
    beforeDestroy(){
        console.info('---- on unmounted(about)')
    }
}
</script>

    