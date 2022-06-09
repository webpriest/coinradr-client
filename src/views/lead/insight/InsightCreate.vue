<template>
    <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg mt-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">New Insight</h2>
                <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Coin Insight</p>
            </div>
            <router-link :to="{ name: 'insight.index' }" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <RewindIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Back to Insights
            </router-link>
        </div>
        <div class="px-4 py-5 sm:px-6">
            <div class="shadow overflow-hidden sm:rounded-lg">
                <form class="space-y-8" @submit.prevent="newInsight">
                    <div class="space-y-8">
                    <div class="pt-8">
                        <div>
                            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">Create New Insight</h3>
                        </div>
                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-2">
                                <label for="coin_id" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Coins </label>
                                <div class="mt-1">
                                <select id="coin_id" name="coin_id" v-model="forms.coin_id" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" placeholder="Choose a Coin" required>
                                    <option v-for="coin in coins" :key="coin.id" :value="coin.id">{{ coin.name }}</option>
                                </select>
                                <p v-if="errors.coin_id" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.coin_id[0] }}</p>
                                </div>
                            </div>
                            <div class="sm:col-span-4">
                                <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Title </label>
                                <div class="mt-1">
                                <input id="title" name="title" type="text" autocomplete="off" class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200" v-model="forms.title">
                                </div>
                            </div>

                            <div class="sm:col-span-6">
                                <label for="excerpt" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Excerpt </label>
                                <div class="mt-1">
                                <input id="excerpt" name="excerpt" type="text" autocomplete="off" class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-200" v-model="forms.excerpt">
                                </div>
                            </div>

                            <div class="sm:col-span-6">
                                <label for="street-address" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Description </label>
                                <div class="mt-1">
                                    <Editor v-model="forms.description" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <img v-show="imageUrl" :src="imageUrl" alt="">
                            </div>
                        <div class="sm:col-span-3">
                            <label for="photo" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Upload photo <em>(optional)</em> </label>
                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center cursor-pointer">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="flex text-sm text-gray-600">
                                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" class="sr-only" @change="imageUpload" accept="image/*">
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>

                    <div class="pt-5">
                        <div class="flex justify-end">
                            <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
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
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import useImageUpload from '../../../api/admin/useImageUpload'
import useAdminInsight from '../../../api/admin/useAdminInsight'
import useCoins from '../../../api/useCoins'

export default {
    components: {
        RewindIcon,
        SaveIcon,
        Editor
    },
    setup() {
        const router = useRouter()
        const { imageFile, imageUrl, imageUpload } = useImageUpload()
        const { errors, storeInsight } = useAdminInsight()
        const { coins, getCoins } = useCoins()
        
        const forms = reactive({
            coin_id: null,
            title: null,
            excerpt: null,
            description: null,
        })

        onMounted(getCoins)

        const newInsight = async () => {
            let photo = new FormData()
            if(imageFile.value !== '') {
                photo.append('photo', imageFile.value)
            }
            photo.append('coin_id', forms.coin_id)
            photo.append('title', forms.title)
            photo.append('excerpt', forms.excerpt)
            photo.append('description', forms.description)

            await storeInsight(photo)

            router.push({ name: 'insight.index' })
        }

        return {
            newInsight,
            forms,
            errors,
            coins,
            imageUpload,
            imageUrl
        }
    },
}
</script>