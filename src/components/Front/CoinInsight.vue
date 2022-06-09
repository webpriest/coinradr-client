<template>
    <section aria-labelledby="timeline-title" class="mt-6 lg:col-start-3 lg:col-span-1">
        <div class="bg-white dark:bg-gray-800 px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <h2 id="timeline-title" class="text-lg font-medium text-gray-900 dark:text-gray-200">{{ insight.title }}</h2>
        <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Coin Insight (NFA)</span>
        
        <div class="mt-6 flow-root">
            <ul role="list" class="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0">
                <li>
                    <router-link :to="{ name: 'insight.featured' }" class="group block">
                    <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                        <div class="min-w-0 flex-1 flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-12 w-12 rounded-full group-hover:opacity-75" :src="insight.photo" alt="" />
                        </div>
                        <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                            <p class="text-sm font-medium text-gray-600 dark:text-gray-300 truncate">{{ insight.excerpt }}</p>
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                                <CurrencyDollarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                <span class="truncate">{{ insight.coin_id }}</span>
                            </p>
                            </div>
                            <div class="hidden md:block">
                            <div>
                                <p class="text-sm text-gray-900 dark:text-gray-400">
                                <time :datetime="insight.created_at">{{ insight.created_at }}</time>
                                </p>
                                <p class="mt-2 flex items-center text-sm text-gray-500">
                                <CheckCircleIcon v-if="insight.featured" class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                {{ insight.featured ? 'Featured' : '' }}
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <ChevronRightIcon class="h-5 w-5 text-gray-400 group-hover:text-gray-700" aria-hidden="true" />
                        </div>
                    </div>
                    </router-link>
                </li>
                </ul>
        </div>
        <div class="mt-6 flex flex-col justify-stretch">
            <button type="button" class="color-button inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <EyeIcon class="-ml-0.5 mr-2 h-6 w-6" aria-hidden="true" />
                More
            </button>
        </div>
        </div>
    </section>
</template>

<script>
import { EyeIcon, CurrencyDollarIcon, ChevronRightIcon, CheckCircleIcon } from '@heroicons/vue/outline'
import useInsight from '../../api/useInsight'
import { onMounted } from '@vue/runtime-core'

export default {
    components: {
        EyeIcon,
        CurrencyDollarIcon,
        ChevronRightIcon,
        CheckCircleIcon
    },
    setup() {
        const { insight, fetchInsight } = useInsight()

        onMounted(fetchInsight)

        console.log(insight.value)

        return {
            insight
        }
    },
}
</script>