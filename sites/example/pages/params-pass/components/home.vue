<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 07:03:51
-->
<template>
    <div>
        <div>Home</div>
        <div><input ref="input" type="text" :value="textValue" @change="onChange" @input="onInput" /></div>
    </div>
</template>
<script>
import { defineComponent, computed, ref, onMounted, onUnmounted } from '@vue/composition-api'
import { useRoute } from '@sites/example/utils/commons/use-apis.js'

export default defineComponent({
    // 属性
    props: {
        modelValue: {
            type: [String]
        }
    },
    // setup函数
    setup(props, context) {
        onMounted(() => {
            console.info('>>>> on mounted(home)')
        })
        onUnmounted(() => {
            console.info('---- on unmounted(home)')
        })

        let innerValue = ref('')
        let route = useRoute()
        if (route && route.params) {
            innerValue.value = route.params.target
        }

        let textValue = computed(() => innerValue.value ?? props.modelValue)

        let input = ref(null)
        let onChange = () => {
            let val = ''
            let inputNode = input.value
            if (inputNode) {
                val = inputNode.value ?? ''
            }
            innerValue.value = val
            context.emit('update:modelValue', val)
        }
        let onInput = () => {
            let val = ''
            let inputNode = input.value
            if (inputNode) {
                val = inputNode.value ?? ''
            }
            innerValue.value = val
            context.emit('update:modelValue', val)
        }
        return {
            onChange,
            onInput,
            input,
            textValue
        }
    }
})
</script>
