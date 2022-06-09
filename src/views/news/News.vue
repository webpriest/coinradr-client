<template>
    <div>
        <div class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 mt-6 lg:max-w-6xl lg:px-8">
            <div class="flex items-center space-x-5">
                <div>
                    <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Crypto News</h1>
                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">News posts are from external sources, and so do not represent the ideas or thoughts of CoinRadr</p>
                </div>
            </div>
            <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
            <router-link :to="{ name: 'home' }" class="inline-flex items-center justify-center px-2 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500">Back to Home</router-link>
            </div>
        </div>

        <div class="mt-8 max-w-2xl mx-auto gap-6 sm:px-6 lg:max-w-6xl bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-600">
                <li v-for="article in news" :key="article.id" class="py-4">
                    <a :href="article.url" target="_blank">
                        <div class="flex space-x-3">
                            <img class="w-20 h-auto" :src="article.imageurl" alt="" />
                            <div class="flex-1 space-y-1">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-lg font-medium dark:text-gray-200">{{ article.title }}</h3>
                                    <p class="text-sm text-gray-500 dark:text-gray-200">{{ formatter(article.published_on) }}</p>
                                </div>
                                <p class="text-sm text-gray-500 dark:text-gray-200" v-html="article.body"></p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import useNews from '../../api/useNews'
import { onMounted } from 'vue'
import dayjs from 'dayjs'

export default {
    setup() {
        const { news, getAllNews } = useNews()

        onMounted(getAllNews)
        
        const formatter = (stamp) => {
            const date = dayjs()
            return date.format('MMMM D, YYYY')
        }

        return {
            news,
            formatter
        }
    },
}
</script>