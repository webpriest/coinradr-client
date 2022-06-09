<template>
    <div class="mt-8 max-w-7xl mx-auto sm:px-6">
        <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 flex justify-between">
                <div class="">
                    <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">Market</h2>
                    <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">General trade</p>
                </div>
            </div>
            <div class="px-4 py-5 sm:px-6">
                <div class="shadow overflow-hidden border-b sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-400">
                        <thead class="font-bold">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-200 uppercase tracking-wider">Asset</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-200 uppercase tracking-wider">Price</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-200 uppercase tracking-wider">24h</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-200 uppercase tracking-wider">7d</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-200 uppercase tracking-wider">Vol (24h)</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-200 uppercase tracking-wider">Market Cap</th>
                            <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Chart</th> -->
                        </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200 dark:border-gray-600" v-for="coin in coins" :key="coin.id">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200 inline-flex items-center">
                                <img :src="coin.image" class="mr-3" width="25" /> 
                                {{ coin.name }} <small class="text-gray-400 dark:text-gray-400 ml-1">{{ coin.symbol.toUpperCase() }}</small>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                    {{ (coin.current_price > 1) ? currencyUSD(coin.current_price) : currencyUSD6d(coin.current_price) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                    <span class="px-2 inline-flex text-xs font-semibold rounded" :class="[(coin.price_change_percentage_24h_in_currency < 0) ? 'text-red-600 dark:text-red-300' : 'text-green-800 dark:text-green-400']">{{ percent(coin.price_change_percentage_24h_in_currency) }}</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                    <span class="px-2 inline-flex text-xs font-semibold rounded" :class="[(coin.price_change_percentage_7d_in_currency <0) ? 'text-red-600 dark:text-red-300' : 'text-green-800 dark:text-green-400']">{{ percent(coin.price_change_percentage_7d_in_currency) }}</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap dark:text-gray-200">
                                    {{ currencyUSDnoD(coin.total_volume) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap dark:text-gray-200">
                                    {{ currencyUSDnoD(coin.market_cap) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <!-- {{ coin.sparkline_in_7d }} -->
                                    <!-- <ChartSparkline :data="coin.sparkline_in_7d.price" /> -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ChartSparkline from '@/components/Front/ChartSparkline.vue'
import useCoins from '../../api/useCoins'
import { onMounted } from 'vue'

export default {
    components: {
        ChartSparkline
    },
    setup() {
        const { coins, percent, getCoins, currencyUSD, currencyUSDnoD, currencyUSD6d } = useCoins()

        onMounted(getCoins)

        return {
            coins,
            percent,
            currencyUSD,
            currencyUSDnoD,
            currencyUSD6d,
        }
    },
}
</script>