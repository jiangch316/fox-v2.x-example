<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-26 10:37:50
-->
<template>
    <div>
        <div>this is a dog</div>
        <input :value="val" />
    </div>
</template>
<script>
import { defineComponent, onMounted } from '@vue/composition-api'
import { useRoute } from '@sites/example/utils/commons/use-apis.js'

export default defineComponent({
    props: {
        val: {
            type: String
        }
    },
    setup() {
        let route = useRoute()
        onMounted(() => {
            console.info(`on mounted params:${JSON.stringify(route?.params ?? {})}`)
        })
    }
})
</script>
