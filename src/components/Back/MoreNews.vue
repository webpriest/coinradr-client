<template>
    <section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
        <div class="bg-white dark:bg-gray-900 px-4 py-5 shadow sm:rounded-lg sm:px-6">
            <h2 id="timeline-title" class="text-lg font-bold text-gray-900 dark:text-gray-300">Recent News</h2>

            <!-- Activity Feed -->
            <div class="mt-6 flow-root">
            <ul role="list" class="-mb-8">
                <li v-for="article in posts" :key="article.id">
                    <div class="relative">
                        <div class="relative flex space-x-3">
                            <div class="min-w-0 flex-1 pt-4 pb-4 flex justify-between space-x-4 border-b border-gray-600">
                                <div>
                                    <p class="text-xs text-gray-500">
                                        <router-link :to="{ name: 'news.show', params: { slug: article.slug } }" class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            {{ article.caption }}
                                        </router-link>
                                    </p>
                                </div>
                                <div class="text-right text-xs whitespace-nowrap text-gray-500">
                                    <time datetime="">{{ article.created_at_readable }}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
            <div class="mt-10 flex flex-col justify-stretch">
            <button type="button" class="color-button inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">See more</button>
            </div>
        </div>
    </section>
</template>

<script>
import { CheckCircleIcon } from '@heroicons/vue/solid'
import { onMounted } from 'vue'
import useAdminPosts from '../../api/admin/useAdminPosts'
export default {
    components: {
        CheckCircleIcon
    },
    setup() {
        const { posts, fetchPosts } = useAdminPosts()

        onMounted(fetchPosts)

        return {
            posts
        }
    },
}
</script>