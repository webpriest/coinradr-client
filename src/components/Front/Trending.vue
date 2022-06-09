<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="space-y-6 lg:col-start-1 lg:col-span-2">
        <!-- Description list-->
        <section aria-labelledby="applicant-information-title">
        <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 flex justify-between">
                <div class="">
                    <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">Top <span class="font-medium text-lg">|</span> Trending <span class="font-medium text-lg">|</span> Hot</h2>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Happening now</p>
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
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-200 uppercase tracking-wider">Market Cap</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200 dark:border-gray-600" v-for="hot in hottest" :key="hot.id">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200 inline-flex">
                                <img :src="`https://www.cryptocompare.com${hot.CoinInfo.ImageUrl}`" class="w-6 mr-3" /> 
                                {{ hot.CoinInfo.Name }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                    {{ hot.DISPLAY.USD.PRICE }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800dark:text-gray-200">
                                    <span class="px-2 inline-flex text-xs font-semibold rounded" :class="[(hot.DISPLAY.USD.CHANGEPCT24HOUR <0) ? 'bg-red-100 dark:bg-transparent text-red-800 dark:text-red-300' : 'bg-green-100 dark:bg-transparent text-green-800 dark:text-green-400']">{{ hot.DISPLAY.USD.CHANGEPCT24HOUR }}</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap dark:text-gray-200">
                                    {{ hot.DISPLAY.USD.MKTCAP }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>

import Chart from '@/components/Front/Chart.vue'
import useCoins from '../../api/useCoins'
import { onMounted } from 'vue'

export default {
    components: {
        Chart,
    },
    setup() {
        const { hottest, percent, topCoins, currencyUSD, currencyUSDnoD, currencyUSD6d } = useCoins()

        onMounted(topCoins)

        return {
            hottest,
            percent,
            currencyUSD,
            currencyUSDnoD,
            currencyUSD6d,
        }
    },
}
</script>