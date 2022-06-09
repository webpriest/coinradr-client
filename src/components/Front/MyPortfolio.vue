<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="">
        <!-- Description list-->
        <section aria-labelledby="applicant-information-title">
        <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 flex justify-between">
                <div class="">
                    <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-green-600 dark:text-green-400" v-if="portfolios.length > 0">$<span class="font-bold text-5xl text-green-600 dark:text-green-400">{{ currencyUSDNoSymbol(parseFloat(sumTotal()).toFixed(2)) }}</span></h2>
                    <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-red-600 dark:text-red-300" v-else>$<span class="font-bold text-5xl text-red-600 dark:text-red-300">0</span></h2>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Portfolio value</p>
                </div>
                <div>
                    <button type="button" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" @click="portfolioAction">
                        <PlusIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                        Add to Portfolio
                    </button>
                </div>
            </div>
            <div class="px-4 py-5 sm:px-6">
                <div class="shadow overflow-hidden sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600" v-if="portfolios.length">
                        <thead class="font-bold">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Asset</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">24h</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">7d</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Value</th>
                            <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chart</th> -->
                            <th scope="col" class="relative px-6 py-3">
                            <span class="sr-only"></span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-600">
                            <tr class="border-b border-gray-200 dark:border-gray-600" v-for="portfolio in portfolios" :key="portfolio.id">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100 inline-flex items-center">
                                <img :src="portfolio.icon" class="w-6 mr-3" /> 
                                <router-link :to="{ name: 'portfolio.show', params: { id: portfolio.id }}">{{ portfolio.name.toUpperCase() }}</router-link>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-100">
                                    {{ currencyUSD(portfolio.price) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-100">
                                    {{ showValue(portfolio.amount) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm" :class="[portfolio.t24h > 0 ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300']">
                                    {{ percent(portfolio.t24h) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm" :class="[portfolio.t7d > 0 ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300']">
                                    {{ percent(portfolio.t7d) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-sm font-bold rounded bg-green-100 dark:bg-green-100 text-green-800 dark:text-green-900">{{ currencyUSD(portfolio.asset_value) }}</span>
                                </td>
                                <!-- <td class="px-6 py-4 whitespace-nowrap">
                                    <Chart />
                                </td> -->
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" @click.prevent="removePortfolio(portfolio)" class="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-600">
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
        <form @submit.prevent="storePortfolio">
        <div>
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <CurrencyDollarIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div class="mt-3 sm:mt-5 text-center">
            <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">Add Coin/Token</DialogTitle>
            <div class="mt-2">
                <div v-if="errors.length !== 0" class="mb-2">
                    <p v-for="(error, index) in errors" :key="index" class="text-red-600 dark:text-red-300">{{ error[0] }}</p>
                </div>
              <!-- <SelectBox class="w-1/3" /> -->
              <div class="block">
                <div class="w-full">
                    <div class="mt-1 relative w-full rounded-md border border-red-400 shadow-sm">
                    <input type="text" id="price" class="focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full py-2 px-3 sm:text-sm border-gray-300 dark:border-gray-600 dark:text-gray-200 dark:bg-gray-900 dark:placeholder-gray-200 rounded-md" placeholder="0" autocomplete="off" v-model.lazy="forms.value_of_asset">
                    
                    <div class="absolute inset-y-0 right-2 flex items-center">
                        <label for="currency" class="sr-only">Exchange</label>
                        <select id="currency" name="currency" class="h-full py-2 border-transparent bg-transparent dark:bg-gray-800 border dark:border-gray-700 text-gray-500 dark:text-gray-200 sm:text-sm rounded-md focus:outline-none" v-model.lazy="forms.coin_id">
                            <option v-for="asset in assets" :key="asset.id" :value="asset.id" class="p-3 text-gray-600 dark:text-gray-200">{{ asset.symbol.toUpperCase() }}</option>
                        </select>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <button type="submit" class="color-button inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
              <PlusIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Add Coin/Token
          </button>
        </div>
        </form>
    </AddPortfolio>
</div>
</template>

<script>
import { DialogTitle } from '@headlessui/vue'
import { TrashIcon, PlusIcon, CurrencyDollarIcon } from '@heroicons/vue/outline'

import { useStore } from 'vuex'
import axios from 'axios'
import usePortfolio from '../../api/usePortfolio'

import Chart from '@/components/Front/Chart.vue'
import AddPortfolio from '@/components/Front/Portfolio/AddPortfolio.vue'
import { onMounted, onChanged, watch } from 'vue'
import _ from 'lodash'

export default {
    components: {
        Chart,
        PlusIcon,
        TrashIcon,
        DialogTitle,
        CurrencyDollarIcon,
        AddPortfolio
    },
    emits: ['refreshPortfolio'],

    setup(props, { emit }) {
        const store = useStore()
        const { assets, portfolioStatus, loginFormStatus, errors, portfolioAction, getAssets, getPortfolios, forms, portfolios, removePortfolio, weavePortfolio, currencyUSD, currencyUSDNoSymbol, showValue, percent } = usePortfolio()

        onMounted(() => {
            getAssets()
            getPortfolios()

            watch(() => _.cloneDeep(store), () => {
                getPortfolios()
            })
        })

        const storePortfolio = async () => {
            axios.defaults.withCredentials = true
            await axios.post('/api/portfolio', forms).then((response) => {
                portfolioStatus.value = false
                let index = portfolios.value.findIndex(p => p.id === response.data.id)

                if(index < 0) {
                    weavePortfolio(response.data)
                }
                else {
                    emit('refreshPortfolio')
                }
            }).catch((e) => {
                if (e.response.status === 422) {
                    errors.value = e.response.data.errors
                }
            })
        }

        const sumTotal = () => {
            let sum = 0
            portfolios.value.filter((e) => {
                sum += e.asset_value
            })
            return sum
        }

        // console.log(portfolios)

        return {
            store,
            errors,
            portfolioStatus,
            getPortfolios,
            portfolioAction,
            forms,
            assets,
            portfolios,
            storePortfolio,
            removePortfolio,
            currencyUSD,
            currencyUSDNoSymbol,
            showValue,
            percent,
            sumTotal
        }
    },
}
</script>