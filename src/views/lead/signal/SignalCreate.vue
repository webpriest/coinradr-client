<template>
    <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg mt-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">New Signal</h2>
                <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Signal</p>
            </div>
            <router-link :to="{ name: 'signal.index' }" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <RewindIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Back to Signals
            </router-link>
        </div>
        <div class="px-4 py-5 sm:px-6">
            <div class="shadow overflow-hidden sm:rounded-lg">
                <form class="space-y-8" @submit.prevent="newSignal">
                    <div class="space-y-8">
                    <div class="pt-8">
                        <div>
                            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">Create New Signal</h3>
                        </div>
                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="pair" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Trading Pair </label>
                                <div class="mt-1">
                                <input id="pair" name="pair" type="text" autocomplete="off" class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200" v-model="forms.pair">
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label for="price" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Price </label>
                                <div class="mt-1">
                                <input id="price" name="price" type="text" autocomplete="off" class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200" v-model="forms.price">
                                </div>
                            </div>
                            
                            <div class="sm:col-span-3">
                                <label for="duration" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Duration </label>
                                <div class="mt-1">
                                <input id="duration" name="duration" type="text" autocomplete="off" class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200" v-model="forms.duration">
                                </div>
                            </div>
                            <div class="sm:col-span-1">
                                <label for="move" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Move/Action </label>
                                <div class="mt-1">
                                <select id="move" name="move" v-model="forms.move" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" placeholder="Choose action" required>
                                    <option value="buy">Buy</option>
                                    <option value="sell">Sell</option>
                                </select>
                                </div>
                            </div>
                            <div class="sm:col-span-1">
                                <label for="tp" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> TP </label>
                                <div class="mt-1">
                                <input id="tp" name="tp" type="text" autocomplete="off" class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200" v-model="forms.tp">
                                </div>
                            </div>
                            <div class="sm:col-span-1">
                                <label for="sl" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> SL </label>
                                <div class="mt-1">
                                <input id="sl" name="sl" type="text" autocomplete="off" class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200" v-model="forms.sl">
                                </div>
                            </div>

                            <div class="sm:col-span-6">
                                <label for="street-address" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Description <em>(optional)</em> </label>
                                <div class="mt-1">
                                    <Editor v-model="forms.description" />
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>

                    <div class="pt-5">
                        <div class="flex justify-end">
                            <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none">
                                <SaveIcon class="mr-3 flex-shrink-0 h-6 w-6 text-white" />
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { RewindIcon, SaveIcon } from '@heroicons/vue/outline'
import Editor from '../../../components/Back/Editor'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import useAdminSignal from '../../../api/admin/useAdminSignal'

export default {
    components: {
        RewindIcon,
        SaveIcon,
        Editor
    },
    setup() {
        const router = useRouter()
        const { storeSignal } = useAdminSignal()
        
        const forms = reactive({
            pair: null,
            price: null,
            duration: null,
            tp: null,
            sl: null,
            move: null,
            description: null,
        })

        const newSignal = async () => {
            await storeSignal(forms)

            router.push({ name: 'signal.index' })
        }

        return {
            newSignal,
            forms
        }
    },
}
</script>