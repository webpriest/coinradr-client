<template>
    <div>
    <section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
        <div class="bg-white dark:bg-gray-800 px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <h2 id="timeline-title" class="text-lg font-medium text-gray-900 dark:text-gray-100">Crypto News</h2>

        <!-- Activity Feed -->
        <div class="mt-6 flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-600">
                <li class="py-4" v-for="article in news" :key="article.id">
                    <a :href="article.url" target="_blank">
                        <div class="flex space-x-3">
                            <img class="h-10 rounded" :src="article.imageurl" alt="" />
                            <div class="flex-1 space-y-1">
                                <div class="flex items-center justify-between">
                                <h3 class="text-sm font-medium dark:text-gray-200">{{ article.title }}</h3>
                                <p class="text-sm text-gray-400">{{ formatter(article.published_on) }}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="mt-6 flex flex-col justify-stretch">
            <router-link :to="{ name: 'news' }" class="color-button inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <NewspaperIcon class="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />
                More news
            </router-link>
        </div>
        </div>
    </section>

    <CoinInsight />
    </div>
</template>

<script>
import { NewspaperIcon } from '@heroicons/vue/outline'
import useNews from '../../api/useNews'
import CoinInsight from './CoinInsight'
import { onMounted } from 'vue'
import dayjs from 'dayjs'

export default {
    components: {
        NewspaperIcon,
        CoinInsight
    },
    setup() {
        const { news, getNews } = useNews()

        onMounted(getNews)
        
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