<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="">
        <!-- Description list-->
        <section aria-labelledby="applicant-information-title">
        <div class="bg-white shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 flex justify-between">
                <div class="">
                    <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-green-600">$<span class="font-bold text-5xl text-green-600">249.56</span></h2>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Portfolio value</p>
                </div>
                <div>
                    <button type="button" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" @click="portfolioAction">
                        <PlusIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                        Add to Portfolio
                    </button>
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
                            <th scope="col" class="relative px-6 py-3">
                            <span class="sr-only"></span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 inline-flex">
                                <img src="@/assets/img/icons/bnb.svg" class="mr-3" /> 
                                BNB
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    $409
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    0.299
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    -1.10%
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs font-semibold rounded bg-green-100 text-green-800">$122</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <Chart />
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-red-600 hover:text-red-900">
                                    <TrashIcon class="h-5 w-5" aria-hidden="true" />
                                </a>
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
                                    0.00012
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    0.34%
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs font-semibold rounded bg-green-100 text-green-800">$5.20</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <Chart />
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-red-600 hover:text-red-900">
                                    <TrashIcon class="h-5 w-5" aria-hidden="true" />
                                </a>
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
                                    0.038
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    0.75%
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs font-semibold rounded bg-green-100 text-green-800">$122.36</span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <Chart />
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-red-600 hover:text-red-900">
                                    <TrashIcon class="h-5 w-5" aria-hidden="true" />
                                </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>


    <AddPortfolio :portfolioStatus="portfolioStatus">
        <div>
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <CurrencyDollarIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div class="mt-3 sm:mt-5 text-center">
            <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">Add Coin/Token</DialogTitle>
            <div class="mt-2">
              <!-- <SelectBox class="w-1/3" /> -->
              <div class="block">
                <InputWithSelect />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <button type="button" class="color-button inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm" @click="portfolioStatus = false">
              <PlusIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add Coin/Token
          </button>
        </div>
    </AddPortfolio>
</div>
</template>

<script>
import { TrashIcon, PlusIcon, CurrencyDollarIcon } from '@heroicons/vue/outline'

import { ref } from 'vue'
import Chart from '@/components/Front/Chart.vue'
import AddPortfolio from '@/components/Front/Portfolio/AddPortfolio.vue'
import InputWithSelect from '@/components/Front/Forms/InputWithSelect'

export default {
    components: {
        Chart,
        PlusIcon,
        TrashIcon,
        CurrencyDollarIcon,
        AddPortfolio,
        InputWithSelect
    },
    setup() {
        const portfolioStatus = ref(false)

        const portfolioAction = () => {
          portfolioStatus.value = !portfolioStatus.value
        }

        return {
            portfolioStatus,
            portfolioAction
        }
    },
}
</script>