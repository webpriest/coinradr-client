<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="space-y-6 lg:col-start-1 lg:col-span-2">
        <!-- Description list-->
        <section aria-labelledby="applicant-information-title">
        <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 flex justify-between">
                <div class="">
                    <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600">Top <span class="font-medium text-lg">|</span> Trending <span class="font-medium text-lg">|</span> Hot</h2>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Happening now</p>
                </div>
            </div>
            <div class="px-4 py-5 sm:px-6">
                <div class="shadow overflow-hidden border-b sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="font-medium">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chart</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 inline-flex">
                                <img src="@/assets/img/icons/bnb.svg" class="mr-3" /> 
                                BNB
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    $387.60
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    $62.09B
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <span class="px-2 inline-flex text-xs font-semibold rounded bg-red-100 text-red-800">-1.10%</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    $1.60B
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <Chart />
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 inline-flex">
                                <img src="@/assets/img/icons/btc.svg" class="mr-3" /> 
                                BTC
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    $43,293
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    $735.90B
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <span class="px-2 inline-flex text-xs font-semibold rounded bg-green-100 text-green-800">0.34%</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    $25.40B
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <Chart />
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 inline-flex">
                                <img src="@/assets/img/icons/eth.svg" class="mr-3" /> 
                                Ethereum
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    $2,957
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    $311.80B
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <span class="px-2 inline-flex text-xs font-semibold rounded bg-green-100 text-green-800">0.75%</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    $12.36B
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <Chart />
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

export default {
    components: {
        Chart,
    },
    setup() {
        return {
            
        }
    },
}
</script>