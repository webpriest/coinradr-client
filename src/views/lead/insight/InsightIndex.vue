<template>
    <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg mt-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">Insights</h2>
                <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">List of Insights</p>
            </div>
            <router-link :to="{ name: 'insight.create' }" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <PlusIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Add Insights
            </router-link>
        </div>
        <div class="px-4 py-5 sm:px-6">
            <div class="shadow overflow-hidden border-b sm:rounded-lg">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-600">
                    <li v-for="insight in insights" :key="insight.id">
                        <router-link :to="{ name: 'insight.show', params: { token: insight.token } }" class="block hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="px-4 py-4 sm:px-6">
                            <div class="flex items-center justify-between">
                                <p class="font-bold text-gray-700 dark:text-gray-200 truncate">
                                    {{ insight.title }}
                                </p>
                                <div class="ml-2 flex-shrink-0 flex">
                                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                                    <router-link :to="{ name: 'insight.show', params: { token: insight.token } }" class="">
                                        <EyeIcon class="mr-2 h-5 w-5 text-green-400" />
                                    </router-link>
                                    <router-link :to="{ name: 'insight.edit', params: { token: insight.token } }" class="">
                                        <PencilAltIcon class="mr-2 h-5 w-5 text-blue-400" />
                                    </router-link>
                                    <a href="javascript:void(0)" @click="deleteInsight(insight.token)" class="text-red-800">
                                        <TrashIcon class="mr-2 h-5 w-5 text-red-400" />
                                    </a>
                                    </p>
                                </div>
                            </div>
                            <div class="mt-2 sm:flex sm:justify-between">
                                <div class="sm:flex">
                                    <p class="flex items-center text-sm text-gray-500 dark:text-gray-200">
                                        <CurrencyDollarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-200" aria-hidden="true" />
                                        {{ insight.coin_id }}
                                    </p>
                                </div>
                                <div class="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-200 sm:mt-0">
                                    <CalendarIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-200" aria-hidden="true" />
                                    <p>
                                    <small><time :datetime="insight.created_at">{{ insight.created_at }}</time></small>
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
import { CurrencyDollarIcon, CalendarIcon, EyeIcon, PencilAltIcon, TrashIcon, PlusIcon } from '@heroicons/vue/outline'
import useAdminInsight from '../../../api/admin/useAdminInsight'
import { onMounted } from 'vue'

export default {
    components: {
        EyeIcon, 
        PencilAltIcon, 
        TrashIcon,
        PlusIcon,
        CalendarIcon,
        CurrencyDollarIcon
    },
    setup() {
        const { insights, fetchInsights, destroyInsight } = useAdminInsight()

        onMounted(fetchInsights)

        const deleteInsight = async (token) => {
            await destroyInsight(token)
            insights.value = insights.value.filter(i => i.token !== token)
        }

        return {
            insights,
            deleteInsight
        }
    },
}
</script>