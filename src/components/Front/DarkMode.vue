<template>
     <button type="button" class="flex-shrink-0 bg-white dark:bg-gray-900 p-1 mr-2 text-gray-600 dark:text-gray-200 rounded-full hover:text-gray-500 dark:hover:text-gray-400">
        <span class="sr-only">Switch light and dark mode</span>
        <SunIcon class="h-5 w-5" aria-hidden="true" v-if="darkMode" @click="switchMode" />
        <MoonIcon class="h-5 w-5" aria-hidden="true" v-else @click="switchMode" />
    </button>
</template>

<script>
import { SunIcon, MoonIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'
import { useStore } from 'vuex'
import _ from 'lodash'

export default {
    components: {
        MoonIcon,
        SunIcon
    },
    // emits: ['switched'],
    setup() {
        const store = useStore()
        const darkMode = ref(store.getters.dark)

        const switchMode = () => {
            darkMode.value = !darkMode.value
            store.dispatch('setmode', darkMode.value)
            // emit('switched', darkMode.value)
        }

        return {
            darkMode,
            switchMode
        }
    },
}
</script>