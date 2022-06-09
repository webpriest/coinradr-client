<template>
    <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg mt-4">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h2 id="applicant-information-title" class="text-3xl leading-6 font-bold text-gray-600 dark:text-gray-100">{{ post.caption }}</h2>
                <p class="mt-2 max-w-2xl text-sm text-gray-500 dark:text-gray-400">News and Events</p>
            </div>
            <router-link :to="{ name: 'news.index' }" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <RewindIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                Back to All News
            </router-link>
        </div>
        <div class="px-4 py-5 sm:px-6">
            <div class="shadow overflow-hidden border-b sm:rounded-lg">
                <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                    <div class="space-y-6 lg:col-start-1 lg:col-span-3">
                    <!-- Description list-->
                    <section aria-labelledby="applicant-information-title">
                        <div class="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div>
                            <img v-if="post.photo" :src="post.photo" :alt="post.caption">
                        </div>
                        <div class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
                            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div class="sm:col-span-1">
                                    <dt class="text-sm font-medium text-gray-500">Author</dt>
                                    <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100">{{ post.author }}</dd>
                                </div>
                                <div class="sm:col-span-1">
                                    <dt class="text-sm font-medium text-gray-500">Posted At</dt>
                                    <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100">{{ post.created_at_readable }}</dd>
                                </div>
                                
                                <div v-html="post.content" class="sm:col-span-2 dark:text-gray-100"></div>
                            </dl>

                            <div class="mt-8">
                                <router-link :to="{ name: 'news.edit', params: { slug: props.slug } }" class="green-color-button inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <PencilAltIcon class="mr-2 h-5 w-5 text-gray-200" />
                                    Edit News
                                </router-link>
                                
                                <a href="javascript:void(0)" @click="deletePost(post.slug)" class="color-button ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <TrashIcon class="mr-2 h-5 w-5 text-gray-200" />
                                    Delete News
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
import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/vue/solid'
import { EyeIcon, PencilAltIcon, TrashIcon, RewindIcon } from '@heroicons/vue/outline'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useAdminPosts from '../../../api/admin/useAdminPosts'

export default {
    components: {
        CalendarIcon,
        LocationMarkerIcon, 
        UsersIcon,
        EyeIcon,
        PencilAltIcon,
        TrashIcon,
        RewindIcon
    },
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const router = useRouter()
        const { post, fetchPost, destroyPost } = useAdminPosts()

        onMounted(fetchPost(props.slug))

        const deletePost = async (slug) => {
            await destroyPost(slug)
            router.push({ name: 'news.index' })
        }

        return {
            post,
            props,
            deletePost
        }
    },
}
</script>