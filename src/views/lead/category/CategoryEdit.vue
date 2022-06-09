<template>
    <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg mt-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h2 id="applicant-information-title" class="text-2xl leading-6 font-bold text-gray-600 dark:text-gray-100">{{ category.name }}</h2>
                <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Category for Crypto Education</p>
            </div>
            <router-link :to="{ name: 'category.index' }" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <RewindIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Back to Categories
            </router-link>
        </div>
        <div class="px-4 py-5 sm:px-6">
            <div class="shadow overflow-hidden sm:rounded-lg">
                <form class="space-y-8" @submit.prevent="editCategory">
                    <div class="space-y-8">
                    <div class="pt-8">
                        <div class="flex">
                            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">Edit Category</h3>
                        </div>
                        
                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-6">
                                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Category name </label>
                                <div class="mt-1">
                                <input id="name" type="text" autocomplete="off" class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-200" v-model="category.name">
                                </div>
                            </div>

                            <div class="sm:col-span-6">
                                <label for="street-address" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Description <em>(markdown)</em></label>
                                <div class="mt-1">
                                    <Editor v-model="category.description" />
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
import useAdminCategory from '../../../api/admin/useAdminCategory'
import Editor from '../../../components/Back/Editor'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: {
        RewindIcon,
        SaveIcon,
        Editor
    },
    props: {
        slug: {
            required: true
        }
    },
    setup(props) {
        const router = useRouter()
        const { category, fetchCategory, updateCategory } = useAdminCategory()

        onMounted(fetchCategory(props.slug))

        const editCategory = async () => {
            let categoryData = new FormData()

            categoryData.append('name', category.value.name)
            categoryData.append('description', category.value.description)
            categoryData.append('_method', 'PATCH')

            await updateCategory(props.slug, categoryData)

            router.push({ name: 'category.show', params: { slug: props.slug } })
        }

        return {
            editCategory,
            category
        }
    },
}
</script>