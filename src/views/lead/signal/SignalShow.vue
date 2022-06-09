<template>
    <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg mt-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">{{ signal.pair }}</h2>
                <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Signal</p>
            </div>
            <router-link :to="{ name: 'signal.index' }" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <RewindIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Back to Signals
            </router-link>
        </div>
        <div class="px-4 py-2 sm:px-6">
            <div class="shadow overflow-hidden border-b sm:rounded-lg">
                <div class="mt-3 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                    <div class="space-y-6 lg:col-start-1 lg:col-span-3">
                    <!-- Description list-->
                    <section aria-labelledby="applicant-information-title">
                        <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
                            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
                                <div class="sm:col-span-1">
                                    <dt class="text-sm font-medium text-gray-500">Take Profit</dt>
                                    <dd class="mt-1 text-2xl text-gray-900 dark:text-gray-100">{{ signal.tp }}</dd>
                                </div>
                                <div class="sm:col-span-1">
                                    <dt class="text-sm font-medium text-gray-500">Stop Loss</dt>
                                    <dd class="mt-1 text-2xl text-gray-900 dark:text-gray-100">{{ signal.sl }}</dd>
                                </div>                         
                                <div class="sm:col-span-1">
                                    <dt class="text-sm font-medium text-gray-500">Duration</dt>
                                    <dd class="mt-1 text-2xl text-gray-900 dark:text-gray-100">{{ signal.duration }}</dd>
                                </div>         
                                <div class="sm:col-span-1">
                                    <dt class="text-sm font-medium text-gray-500">Move/Action</dt>
                                    <dd class="mt-1 text-2xl text-gray-900 dark:text-gray-100">{{ ucase(signal.move) }}</dd>
                                </div>         
                                <div v-html="signal.description" class="sm:col-span-4 dark:text-gray-100"></div>

                                <div class="mt-2">
                                    <span class="text-sm font-medium text-gray-500 block">Date:</span>
                                    <span class="text-gray-900 dark:text-gray-100 font-bold text-xl">{{ signal.created_at }}</span>
                                </div>
                            </dl>

                            <div class="mt-8">
                                <router-link :to="{ name: 'signal.edit', params: { id: props.id } }" class="green-color-button inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <PencilAltIcon class="mr-2 h-5 w-5 text-gray-200" />
                                    Edit Signal
                                </router-link>
                                
                                <a href="javascript:void(0)" @click="deleteSignal(props.id)" class="color-button ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <TrashIcon class="mr-2 h-5 w-5 text-gray-200" />
                                    Delete Signal
                                </a>
                            </div>
                        </div>
                        </div>
                    </section>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { EyeIcon, PencilAltIcon, TrashIcon, RewindIcon } from '@heroicons/vue/outline'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useAdminSignal from '../../../api/admin/useAdminSignal'

export default {
    components: {
        EyeIcon,
        PencilAltIcon,
        TrashIcon,
        RewindIcon,
    },
    props: {
        id: {
            required: true
        }
    },
    setup(props) {
        const router = useRouter()
        const { ucase, signal, fetchSignal, destroySignal } = useAdminSignal()

        onMounted(fetchSignal(props.id))

        const deleteSignal = async (id) => {
            await destroySignal(id)
            router.push({ name: 'signal.index' })
        }

        return {
            ucase,
            props,
            signal,
            deleteSignal
        }
    },
}
</script>