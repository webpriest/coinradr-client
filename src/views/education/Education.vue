<template>
    <div>
        <div class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 mt-6 lg:max-w-6xl lg:px-8">
            <div class="flex items-center space-x-5">
                <div>
                    <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">{{ insight.title }}</h1>
                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ insight.coin_id }}</p>
                </div>
            </div>
            <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
            <router-link :to="{ name: 'home' }" class="inline-flex items-center justify-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500">Back to Home</router-link>
            </div>
        </div>

        <div class="mt-8 py-5 max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow sm:rounded-lg grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-4">
            <div class="space-y-6 lg:col-start-1 lg:col-span-3">
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ insight.excerpt }}</p>
            </div>
            <MoreInsight :coin="insight.coin_id" />
        </div>

    </div>
</template>

<script>
import MoreInsight from '../../components/Back/MoreInsight.vue'
import useInsight from '../../api/useInsight'
import { onMounted } from 'vue'

export default {
    components: {
        MoreInsight
    },
    setup() {
        const { insight, fetchInsight } = useInsight()

        onMounted(fetchInsight)

        return {
            insight
        }
    },
}
</script>