<template>
    <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg mt-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">Education Categories</h2>
                <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">List of categories for Crypto Education</p>
            </div>
            <router-link :to="{ name: 'category.create' }" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <PlusIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Add Category
            </router-link>
        </div>
        <div class="px-4 py-5 sm:px-6">
            <div class="shadow overflow-hidden border-b sm:rounded-lg">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-600">
                    <li v-for="category in categories" :key="category.id">
                        <router-link :to="{ name: 'category.show', params: { slug: category.slug } }" class="block hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div class="px-4 py-4 sm:px-6">
                            <div class="flex items-center justify-between">
                                <p class="font-bold text-gray-700 dark:text-gray-200 truncate">
                                    {{ category.name }}
                                </p>
                                <div class="ml-2 flex-shrink-0 flex">
                                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                                    <router-link :to="{ name: 'category.show', params: { slug: category.slug } }" class="">
                                        <EyeIcon class="mr-2 h-5 w-5 text-green-400" />
                                    </router-link>
                                    <router-link :to="{ name: 'category.edit', params: { slug: category.slug } }" class="">
                                        <PencilAltIcon class="mr-2 h-5 w-5 text-blue-400" />
                                    </router-link>
                                    <a href="javascript:void(0)" @click="deleteCategory(category.slug)" class="text-red-800">
                                        <TrashIcon class="mr-2 h-5 w-5 text-red-400" />
                                    </a>
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
import { EyeIcon, PencilAltIcon, TrashIcon, PlusIcon } from '@heroicons/vue/outline'
import useAdminCategory from '../../../api/admin/useAdminCategory'
import { onMounted } from 'vue'

export default {
    components: {
        EyeIcon, 
        PencilAltIcon, 
        TrashIcon,
        PlusIcon
    },
    setup() {
        const { categories, fetchCategories, destroyCategory } = useAdminCategory()

        onMounted(fetchCategories)

        const deleteCategory = async (slug) => {
            await destroyCategory(slug)
        }

        return {
            categories,
            deleteCategory
        }
    },
}
</script>