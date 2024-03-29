<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="mt-8 max-w-7xl mx-auto sm:px-6 relative rounded bg-gray-50 dark:bg-gray-800 pt-6 pb-20 lg:pt-8 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white dark:bg-gray-800 h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto px-4">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">Crypto Education</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">Learn useful tips about blockchain, cryptocurrency, exchange, swaps, trading, signals and more.</p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="@/assets/img/edu/blockchain.webp" alt="" />
          </div>
          <div class="flex-1 bg-white dark:bg-gray-700 p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600 dark:text-green-400">
                <a href="#" class="hover:underline">
                  Blockchain
                </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Introduction to Blockchain
                </p>
                <p class="mt-3 text-base text-gray-500 dark:text-gray-200">
                  A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only">Harry Gibson</span>
                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900 dark:text-gray-200">
                  <a href="#" class="hover:underline">
                    Harry Gibson
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                  <time datetime="#">
                    March 8, 2022
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 15 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-for="education in educations" :key="education.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="education.photo" alt="" />
          </div>
          <div class="flex-1 bg-white dark:bg-gray-700 p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600 dark:text-green-400">
                <a href="#" class="hover:underline">
                  {{ education.category }}
                </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {{ education.title }}
                </p>
                <p class="mt-3 text-base text-gray-500 dark:text-gray-200">
                  {{ education.content }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only">{{ education.author }}</span>
                  <Avatar />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900 dark:text-gray-200">
                  <a href="#" class="hover:underline">
                    {{ education.author }}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                  <time datetime="#">
                    {{ education.created_at }}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 15 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="@/assets/img/edu/swap.webp" alt="" />
          </div>
          <div class="flex-1 bg-white dark:bg-gray-700 p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600 dark:text-green-400">
                <a href="#" class="hover:underline">
                  Blockchain
                </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Making Profitable SWAPs
                </p>
                <p class="mt-3 text-base text-gray-500 dark:text-gray-200">
                  Swap refers to exchanging one cryptocurrency you hold for the equivalent value of another cryptocurrency.
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only">Mitchelle James</span>
                  <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900 dark:text-gray-200">
                  <a href="#" class="hover:underline">
                    Mitchelle James
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                  <time datetime="#">
                    March 3, 2022
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 15 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- <div v-for="post in posts" :key="post.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a :href="post.category.href" class="hover:underline">
                  {{ post.category.name }}
                </a>
              </p>
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a :href="post.author.href">
                  <span class="sr-only">{{ post.author.name }}</span>
                  <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a :href="post.author.href" class="hover:underline">
                    {{ post.author.name }}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.datetime">
                    {{ post.date }}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> {{ post.readingTime }} read </span>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import Avatar from '../Avatar'

const posts = [
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

import useEducation from '../../../api/useEducation'

export default {
  components: {
    Avatar
  },
  setup() {
    const { educations, fetchEducations } = useEducation()

    onMounted(fetchEducations)

    return {
      educations,
    }
  },
}
</script>