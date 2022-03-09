<template>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <Popover class="flex justify-between h-16" v-slot="{ open }">
          <div class="flex px-2 lg:px-0">
            <div class="flex-shrink-0 flex items-center">
              <a href="#">
                <Logo />
              </a>
            </div>
            <Navigation />
          </div>
          <div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:text-sm" placeholder="Search" type="search" autocomplete="off" />
              </div>
            </div>
          </div>
          <div class="flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <PopoverButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span class="sr-only">Open main menu</span>
              <MenuIcon class="block h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <TransitionRoot as="template" :show="open">
            <div class="lg:hidden">
              <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-150 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <PopoverOverlay class="z-20 fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
              </TransitionChild>

              <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-150 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                <PopoverPanel focus class="z-30 absolute top-0 right-0 max-w-none w-full p-2 transition transform origin-top">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                    <div class="pt-3 pb-2">
                      <div class="flex items-center justify-between px-4">
                        <div>
                          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg" alt="Workflow" />
                        </div>
                        <div class="-mr-2">
                          <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span class="sr-only">Close menu</span>
                            <XIcon class="h-6 w-6" aria-hidden="true" />
                          </PopoverButton>
                        </div>
                      </div>
                      <div class="mt-3 px-2 space-y-1">
                        <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">{{ item.name }}</a>
                      </div>
                    </div>
                    <div class="pt-4 pb-2">
                      <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                          <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                        </div>
                        <div class="ml-3">
                          <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
                          <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          <span class="sr-only">View notifications</span>
                          <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div class="mt-3 px-2 space-y-1">
                        <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">{{ item.name }}</a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </TransitionChild>
            </div>
          </TransitionRoot>
          <div class="hidden lg:ml-4 lg:flex lg:items-center">
            <button type="button" class="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            
            <button type="button" class="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span class="sr-only">Switch light and dark mode</span>
              <MoonIcon class="h-5 w-5" aria-hidden="true" />
            </button>

            <button type="button" @click="swapAction" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <SwitchHorizontalIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Swap/DAPPs
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-4 relative flex-shrink-0">
              <div>
                <MenuButton class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </Popover>
      </div>

      <ModalPop :modalStatus="modalStatus">
        <div>
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <SwitchHorizontalIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div class="mt-3 sm:mt-5 text-center">
            <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900"> Swap Assets </DialogTitle>
            <div class="mt-2">
              <!-- <SelectBox class="w-1/3" /> -->
              <div class="block">
                <InputWithSelect />
              </div>
              <p class="py-4 font-bold text-gray-800">to</p>
              <div class="block">
                <InputWithSelect />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <button type="button" class="color-button binline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm" @click="modalStatus = false">Start Swap</button>
        </div>
      </ModalPop>
      
    </header>
</template>

<script>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
  DialogTitle,
} from '@headlessui/vue'
import {
  HomeIcon,
  SearchIcon,
} from '@heroicons/vue/solid'
import { BellIcon, MenuIcon, XIcon, MoonIcon, SwitchHorizontalIcon} from '@heroicons/vue/outline'

import { ref } from 'vue'
import Logo from '@/components/Front/Logo'
import Navigation from '@/components/Front/Navigation'
import ModalPop from '@/components/Front/ModalPop'
import InputWithSelect from '@/components/Front/Forms/InputWithSelect'

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'My Profile', href: '#' },
  { name: 'Change Password', href: '#' },
  { name: 'Staking', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default {
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        Popover,
        PopoverButton,
        PopoverOverlay,
        PopoverPanel,
        TransitionChild,
        TransitionRoot,
        DialogTitle,
        BellIcon,
        HomeIcon,
        MenuIcon,
        MoonIcon,
        SwitchHorizontalIcon,
        SearchIcon,
        XIcon,
        Logo,
        Navigation,
        ModalPop,
        InputWithSelect
    },
    setup() {
        const modalStatus = ref(false)

        const swapAction = () => {
          modalStatus.value = !modalStatus.value
        }

        return {
            user,
            userNavigation,
            modalStatus,
            swapAction,
        }
    }
}
</script>