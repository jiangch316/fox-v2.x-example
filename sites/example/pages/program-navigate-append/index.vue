<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-07-11 15:22:17
-->
<template>
    <div>
        <div>
            <button class="my-button" @click="toHome">append home</button>
            <button class="my-button" @click="toAbout">append about</button>
            <button class="my-button" @click="remove">移除</button>
            <button class="my-button" @click="removeAll">移除所有</button>
            <button class="my-button" @click="removeUnti">移除到about</button>
        </div>
        <div class="my-router-view-div">
            <fox-router-view
                class="fox-views fox-views-window my-views"
                transition-name="fox-view-trans"
                transition="true"
                :multi="true"
                :view-tag="tagProvider"
                :view-tag-props="tagPropsProvider"
            ></fox-router-view>
        </div>
    </div>
</template>
<script>
import { FoxApp } from './index.ts'
import Dialog from './components/dialog.vue'

//top坐标
let top = 30

export default {
    components: {
        'my-dialog': Dialog
    },
    //数据
    data() {
        return {
            tagProvider: (route, index) => {
                console.info('----------- index:' + index)
                if (index == 0) {
                    return 'div'
                } else {
                    return 'my-dialog'
                }
            },
            tagPropsProvider: (route, index) => {
                let props = {
                    top: `${top + 20 * index}px`
                }
                return props
            }
        }
    },
    //创建完成出来
    created() {
        //安装fox app
        FoxApp.install(this.$fox)
    },
    //方法
    methods: {
        //append home页面
        toHome() {
            this.$router.append('/home')
        },
        //apend about页面
        toAbout() {
            this.$router.append('/about')
        },
        //移除最上层页面
        remove() {
            this.$router.remove()
        },
        //移除所有页面
        removeAll() {
            this.$router.remove({ all: true })
        },
        //移除所有页面
        removeUnti() {
            this.$router.remove({ unit: '/ahout' })
        }
    }
}
</script>

<style>
.my-views {
    position: relative;
}
</style>
