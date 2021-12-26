<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-13 20:16:03
-->
<template>
    <div class="fox-m-dialog" :style="mStyle">
        <div class="fox-m-dialog-content">
            <slot></slot>
        </div>

        <div class="fox-m-dialog-footer">
            <button class="fox-m-button" @click="back">返回</button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'fox-m-dialog',
    //属性
    props: {
        top: {
            type: String,
            required: false,
            default: '0px'
        }
    },
    //计算
    computed: {
        mStyle() {
            return {
                top: this.top
            }
        }
    },
    //方法
    methods: {
        back() {
            this.$router.remove()
        }
    }
}
</script>

<style>
.fox-m-dialog {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    transition: 0.3s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 3000;
}

.fox-m-dialog .fox-m-dialog-footer {
    width: 100%;
    height: 80px;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

.fox-m-dialog .fox-m-dialog-footer .fox-m-btton {
    width: 80px;
    height: 36px;
}
</style>
