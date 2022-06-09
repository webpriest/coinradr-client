<template>
    <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg mt-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">{{ insight.title }}</h2>
                <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Coin Insight</p>
            </div>
            <router-link :to="{ name: 'insight.index' }" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <RewindIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Back to Insights
            </router-link>
        </div>
        <div class="px-4 py-1 sm:px-6">
            <div class="shadow overflow-hidden border-b sm:rounded-lg">
                <div class="mt-2 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                    <div class="space-y-6 lg:col-start-1 lg:col-span-2">
                    
                    <section aria-labelledby="applicant-information-title">
                        <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <div>
                                <img v-if="insight.photo" :src="insight.photo" :alt="insight.title">
                            </div>
                        <div class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
                            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div class="sm:col-span-1">
                                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-200">Date posted</dt>
                                    <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100">{{ insight.created_at }}</dd>
                                </div>

                                <div v-html="insight.description" class="sm:col-span-2 dark:text-gray-100"></div>
                            </dl>

                            <div class="mt-8">
                                <router-link :to="{ name: 'insight.edit', params: { token: props.token } }" class="green-color-button inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <PencilAltIcon class="mr-2 h-5 w-5 text-gray-200" />
                                    Edit Insight
                                </router-link>
                                
                                <a href="javascript:void(0)" @click="deleteInsight(insight.token)" class="color-button ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <TrashIcon class="mr-2 h-5 w-5 text-gray-200" />
                                    Delete Insight
                                </a>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>
                    <MoreInsight :coin="insight.coin_id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { EyeIcon, PencilAltIcon, TrashIcon, RewindIcon } from '@heroicons/vue/outline'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import MoreInsight from '../../../components/Back/MoreInsight.vue'
import useAdminInsight from '../../../api/admin/useAdminInsight'

export default {
    components: {
        EyeIcon,
        PencilAltIcon,
        TrashIcon,
        RewindIcon,
        MoreInsight
    },
    props: {
        token: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const router = useRouter()
        const { insight, fetchInsight, destroyInsight } = useAdminInsight()

        onMounted(fetchInsight(props.token))

        const deleteInsight = async (token) => {
            await destroyInsight(token)
            router.push({ name: 'insight.index' })
        }

        return {
            props,
            insight,
            deleteInsight
        }
    },
}
</script>