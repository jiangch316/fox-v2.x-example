/*
 * @version: 1.0
 * @Author: 江成
 * @Date: 2021-08-27 10:09:32
 */

import {
    getCurrentInstance
} from "@vue/composition-api"

/**
 * 获取Fox
 */
export function useFox() {
    let instance = getCurrentInstance()
    if (instance && instance.proxy) {
        return instance.proxy.$fox
    }
    return null
}

/**
 * 获取router
 */
export function useRouter() {
    let instance = getCurrentInstance()
    if (instance && instance.proxy) {
        return instance.proxy.$router
    }
    return null
}

/**
 * 获取route
 */
export function useRoute() {
    let instance = getCurrentInstance()
    if (instance && instance.proxy) {
        return instance.proxy.$route
    }
    return null
}