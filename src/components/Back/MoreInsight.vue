<template>
    <section aria-labelledby="timeline-title" class="lg:col-start-4 lg:col-span-1">
        <div class="bg-white dark:bg-gray-900 px-4 py-5 shadow sm:rounded-lg sm:px-6">
            <h2 id="timeline-title" class="text-lg font-bold text-gray-900 dark:text-gray-300">More about {{ coin.name }}</h2>

            <!-- Activity Feed -->
            <div class="mt-6 mb-6 flow-root">
            <ul role="list" class="-mb-8">
                <li v-if="coin">
                    <div class="relative">
                        <div class="relative flex space-x-3">
                            <div class="min-w-0 flex-1 pt-4 pb-4 flex justify-between space-x-4 border-b border-gray-600">
                                <div>
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            Market price: 
                                        </span>
                                        <span class="ml-3">{{ currencyUSD(coin.market_price) }}</span>
                                    </p>
                                    
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            Market Cap: 
                                        </span>
                                        <span class="ml-3">{{ currencyUSD(coin.market_cap) }}</span>
                                    </p>
                                    
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            Total Volume: 
                                        </span>
                                        <span class="ml-3">{{ currencyUSD(coin.total_volume) }}</span>
                                    </p>
                                    
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            24hr High: 
                                        </span>
                                        <span class="ml-3">{{ currencyUSD(coin.high_24) }}</span>
                                    </p>
                                    
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            24hr Low: 
                                        </span>
                                        <span class="ml-3">{{ currencyUSD(coin.low_24) }}</span>
                                    </p>
                                    
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            Percentage 24hr: 
                                        </span>
                                        <span class="ml-3">{{ percent(coin.percent_24) }}</span>
                                    </p>
                                    
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            Percentage 7d: 
                                        </span>
                                        <span class="ml-3">{{ percent(coin.percent_7d) }}</span>
                                    </p>
                                    
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            Percentage 14d: 
                                        </span>
                                        <span class="ml-3">{{ percent(coin.percent_14d) }}</span>
                                    </p>
                                    
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            Percentage 30d: 
                                        </span>
                                        <span class="ml-3">{{ percent(coin.percent_30d) }}</span>
                                    </p>
                                    
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            Percentage 60d: 
                                        </span>
                                        <span class="ml-3">{{ percent(coin.percent_60d) }}</span>
                                    </p>
                                    
                                    <p class="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <span class="flex items-center font-medium text-gray-900 dark:text-gray-200">
                                            <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                            Percentage 1y: 
                                        </span>
                                        <span class="ml-3">{{ percent(coin.percent_1y) }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    </section>
</template>

<script>
import { CheckCircleIcon } from '@heroicons/vue/solid'
import { onMounted } from 'vue'
import useCoins from '../../api/useCoins'

export default {
    components: {
        CheckCircleIcon
    },
    props: {
        coin: {
            required: true
        }
    },
    setup(props) {
        const { coin, getCoin, currencyUSD, percent } = useCoins()

        onMounted(getCoin(props.coin))

        return {
            coin,
            percent,
            currencyUSD
        }
    },
}
</script>