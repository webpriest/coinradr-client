<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 flex z-40">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-shrink-0 flex items-center px-4">
                <Logo />
              </div>
              <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <nav class="px-2 space-y-1">
                  <router-link :to="{ name: 'lead.index' }" v-slot="{ isActive }">
                    <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <HomeIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                      Dashboard
                    </span>
                  </router-link>

                  <router-link :to="{ name: 'category.index' }" v-slot="{ isActive }">
                    <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <ArchiveIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                      Categories
                    </span>
                  </router-link>

                  <router-link :to="{ name: 'education.index' }" v-slot="{ isActive }">
                    <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <BookOpenIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                      Crypto Education
                    </span>
                  </router-link>
                  
                  <router-link :to="{ name: 'insight.index' }" v-slot="{ isActive }">
                    <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <ChartPieIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                      Crypto Insight
                    </span>
                  </router-link>
                  
                  <router-link :to="{ name: 'news.index' }" v-slot="{ isActive }">
                    <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-base font-medium rounded-md">
                      <NewspaperIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                      Crypto News
                    </span>
                  </router-link>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div class="flex items-center h-16 flex-shrink-0 px-4 bg-white dark:bg-gray-900">
          <Logo />
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto">
          <nav class="flex-1 px-2 py-4 space-y-1">
            <router-link :to="{ name: 'lead.index' }" v-slot="{ isActive }">
              <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <HomeIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                Dashboard
              </span>
            </router-link>

            <router-link :to="{ name: 'category.index' }" v-slot="{ isActive }">
              <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <ArchiveIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                Categories
              </span>
            </router-link>
            
            <router-link :to="{ name: 'education.index' }" v-slot="{ isActive }">
              <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <BookOpenIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                Crypto Education
              </span>
            </router-link>
            
            <router-link :to="{ name: 'insight.index' }" v-slot="{ isActive }">
              <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <ChartPieIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                Crypto Insight
              </span>
            </router-link>
            
            <router-link :to="{ name: 'news.index' }" v-slot="{ isActive }">
              <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <NewspaperIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                Crypto News
              </span>
            </router-link>
            
            <router-link :to="{ name: 'signal.index' }" v-slot="{ isActive }">
              <span :class="{'bg-gray-900 text-white': isActive, 'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive }" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <WifiIcon class="mr-3 flex-shrink-0 h-6 w-6" :class="{'bg-gray-900 text-white': isActive }" />
                Trading Signals
              </span>
            </router-link>
            
          </nav>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white dark:bg-gray-900 shadow">
        <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none md:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6 dark:text-gray-300" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5 dark:text-gray-300" aria-hidden="true" />
                </div>
                <input id="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 dark:text-gray-300 dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search" />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <DarkMode />

            <button type="button" class="bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="max-w-xs bg-white dark:bg-gray-800 flex items-center text-sm rounded-full focus:outline-none">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 object-cover" src="@/assets/img/shield.png" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" :class="[active ? 'bg-gray-100 dark:bg-gray-900' : '', 'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200']">{{ item.name }}</a>
                  </MenuItem>
                  <a href="javascript:void(0)" @click="logout" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Sign Out</a>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="flex-1 dark:bg-gray-900 min-h-screen">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <router-view />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  BookOpenIcon,
  ChartPieIcon,
  NewspaperIcon,
  ArchiveIcon,
  WifiIcon
} from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'

import useAuth from './api/useAuth'
import Logo from '@/components/Logo'
import DarkMode from '@/components/Front/DarkMode'

  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
  ]

export default {
  components: {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    WifiIcon,
    InboxIcon,
    ArchiveIcon,
    MenuAlt2Icon,
    UsersIcon,
    SearchIcon,
    XIcon,
    BookOpenIcon,
    ChartPieIcon,
    NewspaperIcon,
    Logo,
    DarkMode
  },
  setup() {
    const sidebarOpen = ref(false)
    const { logout } = useAuth()

    return {
      navigation,
      userNavigation,
      sidebarOpen,
      logout
    }
  }
}
</script>