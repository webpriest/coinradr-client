<template>
    <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg mt-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">Trading Signals</h2>
                <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Signals</p>
            </div>
            <router-link :to="{ name: 'signal.create' }" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <PlusIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Add Signal
            </router-link>
        </div>
        <div class="px-4 py-5 sm:px-6">
            <div class="shadow overflow-hidden border-b sm:rounded-lg">
                <ul v-if="signals.length !== 0" role="list" class="divide-y divide-gray-200 dark:divide-gray-600">
                    <li v-for="signal in signals" :key="signal.id">
                        <router-link :to="{ name: 'signal.show', params: { id: signal.id } }" class="block hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="px-4 py-4 sm:px-6">
                            <div class="flex items-center justify-between">
                                <p class="font-bold text-gray-700 dark:text-gray-200 truncate">
                                    {{ signal.pair }}
                                </p>

                                <div class="sm:flex">
                                    <p class="flex items-center text-sm text-gray-500">
                                    <ClockIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-300" aria-hidden="true" />
                                    {{ signal.duration }}
                                    </p>
                                    <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                    <CurrencyDollarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-300" aria-hidden="true" />
                                    {{ currencyUSD(signal.tp) }}
                                    </p>
                                    <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                    <BanIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-300" aria-hidden="true" />
                                    {{ currencyUSD(signal.sl) }}
                                    </p>
                                </div>

                                <div class="ml-2 flex-shrink-0 flex">
                                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                                    <router-link :to="{ name: 'signal.show', params: { id: signal.id } }" class="">
                                        <EyeIcon class="mr-2 h-5 w-5 text-green-400" />
                                    </router-link>
                                    <router-link :to="{ name: 'signal.edit', params: { id: signal.id } }" class="">
                                        <PencilAltIcon class="mr-2 h-5 w-5 text-blue-400" />
                                    </router-link>
                                    <a href="javascript:void(0)" @click="deleteSignal(signal.id)" class="text-red-800">
                                        <TrashIcon class="mr-2 h-5 w-5 text-red-400" />
                                    </a>
                                    </p>
                                </div>
                            </div>
                            <div class="mt-2 sm:flex sm:justify-between">
                                <div class="sm:flex">
                                    <p class="flex items-center text-sm text-gray-500 dark:text-gray-200">
                                    <CashIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-200" aria-hidden="true" />
                                    {{ currencyUSD(signal.price) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { EyeIcon, PencilAltIcon, TrashIcon, PlusIcon, ClockIcon, CurrencyDollarIcon, BanIcon, CashIcon } from '@heroicons/vue/outline'
import useAdminSignal from '../../../api/admin/useAdminSignal'
import { onMounted } from 'vue'

export default {
    components: {
        EyeIcon, 
        PencilAltIcon, 
        TrashIcon,
        PlusIcon,
        ClockIcon,
        CurrencyDollarIcon,
        BanIcon,
        CashIcon
    },
    setup() {
        const { signals, fetchSignals, destroySignal, currencyUSD } = useAdminSignal()

        onMounted(fetchSignals)

        const deleteSignal = async (id) => {
            await destroySignal(id)
        }

        return {
            signals,
            deleteSignal,
            currencyUSD
        }
    },
}
</script>