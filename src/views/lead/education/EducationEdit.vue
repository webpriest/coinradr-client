<template>
    <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg mt-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h2 id="applicant-information-title" class="text-2xl leading-6 font-bold text-gray-600 dark:text-gray-100">{{ education.title }}</h2>
                <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Articles and Tutorials</p>
            </div>
            <router-link :to="{ name: 'education.index' }" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <PlusIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Back to Courses
            </router-link>
        </div>
        <div class="px-4 py-5 sm:px-6">
            <div class="shadow overflow-hidden sm:rounded-lg">
                <form class="space-y-8" @submit.prevent="editEducation">
                    <div class="space-y-8">
                    <div class="pt-8">
                        <div class="flex justify-between">
                            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">Edit Course</h3>

                            <div class="flex">
                                <span class="text-gray-800 dark:text-gray-200 font-medium mr-2">Available</span>
                                <Switch v-model="education.visible" :class="[education.visible ? 'bg-red-600 dark:bg-red-300' : 'bg-gray-200 dark:bg-gray-500', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none']">
                                    <span class="sr-only">Use setting</span>
                                    <span :class="[education.visible ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200']">
                                    <span :class="[education.visible ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity']" aria-hidden="true">
                                        <svg class="h-3 w-3 text-gray-400 dark:text-gray-200" fill="none" viewBox="0 0 12 12">
                                        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span :class="[education.visible ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity']" aria-hidden="true">
                                        <svg class="h-3 w-3 text-red-600 dark:text-red-300" fill="currentColor" viewBox="0 0 12 12">
                                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                        </svg>
                                    </span>
                                    </span>
                                </Switch>
                            </div>
                        </div>
                        
                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-6">
                                <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Title </label>
                                <div class="mt-1">
                                <input id="title" type="text" autocomplete="off" class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-200" v-model="education.title">
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label for="author" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Author </label>
                                <div class="mt-1">
                                <input id="author" type="text" autocomplete="off" class="shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-500 rounded-md dark:bg-gray-800 dark:text-gray-200" v-model="education.author">
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label for="category_id" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Category </label>
                                <div class="mt-1">
                                <select id="category_id" v-model="education.category_id" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" placeholder="Choose category" required>
                                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                                </select>
                                </div>
                            </div>

                            <div class="sm:col-span-6">
                                <label for="street-address" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Content </label>
                                <div class="mt-1">
                                    <Editor v-model="education.content" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div class="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <template v-if="imageUrl">
                                    <img :src="imageUrl" alt="">
                                </template>
                                <template v-else>
                                    <img :src="education.photo" alt="">
                                </template>
                            </div>
                        <div class="sm:col-span-3">
                            <label for="photo" class="block text-sm font-medium text-gray-700 dark:text-gray-200"> Upload photo </label>
                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-500 border-dashed rounded-md">
                                <div class="space-y-1 text-center cursor-pointer">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="flex text-sm text-gray-600">
                                    <label for="photo" class="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                                        <span>Upload a file</span>
                                        <input id="photo" name="photo" type="file" class="sr-only" @change="imageUpload" accept="image/*">
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
import { PlusIcon, SaveIcon } from '@heroicons/vue/outline'
import useAdminEducation from '../../../api/admin/useAdminEducation'
import useImageUpload from '../../../api/admin/useImageUpload'
import Editor from '../../../components/Back/Editor'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Switch } from '@headlessui/vue'

export default {
    components: {
        PlusIcon,
        Switch,
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
        const { education, categories, fetchEducation, updateEducation, fetchCategories } = useAdminEducation()
        const { imageFile, imageUrl, imageUpload } = useImageUpload()

        onMounted(() => {
            fetchEducation(props.slug)
            fetchCategories()
        })

        const editEducation = async () => {
            if(imageFile.value.length !== 0) {
                let educationData = new FormData()

                educationData.append('photo', imageFile.value)
                educationData.append('title', education.value.title)
                educationData.append('content', education.value.content)
                educationData.append('category_id', education.value.category_id)
                educationData.append('author', education.value.author)
                educationData.append('visible', (education.value.visible === true) ? 1 : 0)
                educationData.append('_method', 'PATCH')

                await updateEducation(props.slug, educationData)

                router.push({ name: 'education.index', params: { slug: props.slug } })
            }
            else {
                let educationData = new FormData()

                educationData.append('title', education.value.title)
                educationData.append('content', education.value.content)
                educationData.append('category_id', education.value.category_id)
                educationData.append('author', education.value.author)
                educationData.append('visible', (education.value.visible === true) ? 1 : 0)
                educationData.append('_method', 'PATCH')

                await updateEducation(props.slug, educationData)

                router.push({ name: 'education.index', params: { slug: props.slug } })
            }
        }

        return {
            imageUpload,
            imageUrl,
            editEducation,
            education,
            categories
        }
    },
}
</script>