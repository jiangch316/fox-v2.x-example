<!--
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-06-06 08:02:08
-->
<template>
    <div>
        <div>About</div>
        <div>
            <input type="text" :value="id" />
            <input type="text" :value="textValue" />
        </div>
    </div>
</template>
<script>
import { defineComponent, ref, onMounted, onUnmounted, computed } from '@vue/composition-api'
import { useRoute } from '@sites/example/utils/commons/use-apis'

export default defineComponent({
    props: {
        modelValue: {
            type: [String]
        },
        id: {
            type: String
        }
    },
    setup(props, context) {
        const route = useRoute()
        onMounted(() => {
            console.info(`>>>> on mounted(about) params:${JSON.stringify(route?.params ?? {})}`)
        })
        onUnmounted(() => {
            console.info('---- on unmounted(about)')
        })

        const innerValue = ref('')
        if (route && route.params) {
            innerValue.value = route.params.target
        }

        const textValue = computed(() => innerValue.value ?? props.modelValue)

        return {
            textValue
        }
    }
})
</script>
