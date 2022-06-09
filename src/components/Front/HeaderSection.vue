<template>
    <header class="bg-white dark:bg-gray-900 shadow">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <Popover class="flex justify-between h-16" v-slot="{ open }">
          <div class="flex px-2 lg:px-0">
            <div class="flex-shrink-0 flex items-center">
              <router-link :to="{ name: 'home' }">
                <Logo />
              </router-link>
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
                <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 shadow-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-200 focus:ring-1 focus:ring-red-600 focus:border-red-600 sm:text-sm" placeholder="Search" type="search" autocomplete="off" />
              </div>
            </div>
          </div>
          <div class="flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <PopoverButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
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
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-600">
                    <div class="pt-3 pb-2">
                      <div class="flex items-center justify-between px-4">
                        <div>
                          <Logo />
                        </div>
                        <div class="-mr-2">
                          <PopoverButton class="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-300 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                            <span class="sr-only">Close menu</span>
                            <XIcon class="h-6 w-6" aria-hidden="true" />
                          </PopoverButton>
                        </div>
                      </div>
                      
                      <NavigationMobile />

                    </div>
                    <div class="pt-4 pb-2">
                      <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                          <img class="h-10 w-10 rounded-full" :src="userData.imageUrl" alt="" />
                        </div>
                        <div class="ml-3">
                          <div class="text-base font-medium text-gray-800">{{ userData.name }}</div>
                          <div class="text-sm font-medium text-gray-500">{{ userData.email }}</div>
                        </div>
                        <button type="button" class="ml-auto flex-shrink-0 bg-white dark:bg-gray-900 p-1 text-gray-400 rounded-full hover:text-gray-500 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          <span class="sr-only">View notifications</span>
                          <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button>

                        <DarkMode @switched="darkLight" />

                        <button type="button" @click="swapAction" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          <SwitchHorizontalIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                          Swap/DAPPs
                        </button>
                      </div>
                      <div class="mt-3 px-2 space-y-1">
                        <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-100">{{ item.name }}</a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </TransitionChild>
            </div>
          </TransitionRoot>
          <div class="hidden lg:ml-4 lg:flex lg:items-center">
            <button type="button" class="flex-shrink-0 bg-white dark:bg-gray-900 p-1 text-gray-600 dark:text-gray-200 rounded-full hover:text-gray-500 dark:hover:text-gray-400">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-5 w-5" aria-hidden="true" />
            </button>
            
           <DarkMode />

            <button type="button" @click="swapAction" class="color-button inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <SwitchHorizontalIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Swap/DAPPs
            </button>

            <!-- Profile dropdown -->
            <template v-if="!authenticated">
            <Menu as="div" class="ml-4 relative flex-shrink-0">
              <div>
                <MenuButton class="flex text-sm focus:outline-none" @click="loginFormLoad">
                  <span class="sr-only">Open user menu</span>
                  <!-- <LockClosedIcon class="-ml-0.5 mr-2 h-8 w-8 text-red-600" aria-hidden="true" /> -->
                  <Avatar />
                </MenuButton>
              </div>
            </Menu>
            </template>
            <template v-else>
            <Menu as="div" class="ml-4 relative flex-shrink-0">
              <div>
                <MenuButton class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="userData.imageUrl" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <a href="javascript:void(0)" class="block px-4 py-2 bg-gray-100 text-sm text-gray-700">{{ user.firstname }} {{ user.lastname }}</a>
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                  </MenuItem>
                  <a href="javascript:void(0)" @click="logout" class="block px-4 py-2 text-sm text-gray-700">Sign Out</a>
                </MenuItems>
              </transition>
            </Menu>
            </template>
          </div>
        </Popover>
      </div>

      <ModalPop :modalStatus="modalStatus">
        <div>
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <SwitchHorizontalIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <div class="mt-3 sm:mt-5 text-center">
            <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200"> Swap Assets </DialogTitle>
            <div class="mt-2">
              <!-- <SelectBox class="w-1/3" /> -->
              <div class="block">
                <InputWithSelect />
              </div>
              <p class="py-4 font-bold text-gray-800 dark:text-gray-200">to</p>
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
      
      <LoginForm :loginFormStatus="loginFormStatus">
        <form @submit.prevent="userLogin">
              <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <LoginIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                
                <div class="isolate -space-y-px rounded-md shadow-sm mt-4">
                  <div class="relative border border-red-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="email" class="block text-xs font-bold text-gray-900 dark:text-gray-200">E-mail</label>
                    <input type="email" id="email" class="block w-full border-0 focus:outline-none border-gray-100 dark:border-gray-600 p-0 text-gray-900 dark:text-gray-300 dark:bg-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="jane.doe@coinradr.com" autocomplete="off" v-model="logins.email"  />
                    <p v-if="errors.email" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.email[0] }}</p>
                  </div>
                  <div class="relative border border-red-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="password" class="block text-xs font-bold text-gray-900 dark:text-gray-200">Password</label>
                    <input type="password" id="password" class="block w-full border-0 focus:outline-none p-0 text-gray-900 dark:text-gray-200 dark:bg-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="*********" v-model="logins.password"  />
                    <p v-if="errors.password" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.password[0] }}</p>
                  </div>
                </div>

              </div>
              <div class="mt-5 sm:mt-6">
                <button type="submit" class="color-button inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
                  <LockOpenIcon class="-ml-0.5 mr-2 h-4 w-4" />
                  Sign In
                </button>
              </div>
              <div class="flex items-center text-sm mt-2">
                <p class="text-gray-600 dark:text-gray-400">Don't have an account?</p>
                <a href="#" @click="registerFormLoad" class="font-bold text-red-600 ml-3">Sign up</a>
              </div>
          </form>
      </LoginForm>

      <RegisterForm :registerFormStatus="registerFormStatus">
        <form @submit.prevent="attemptRegister">
              <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <UserAddIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                
                <div class="isolate -space-y-px rounded-md shadow-sm mt-4">
                  <div class="relative border border-red-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="firstname" class="block text-xs font-bold text-gray-900 dark:text-gray-200">First name</label>
                    <input type="text" id="firstname" class="block w-full border-0 focus:outline-none border-gray-100 dark:border-gray-600 p-0 text-gray-900 dark:text-gray-300 dark:bg-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="First name" autocomplete="off" v-model.lazy="registration.firstname" />
                    <p v-if="errors.firstname" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.firstname[0] }}</p>
                  </div>
                  <div class="relative border border-red-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="lastname" class="block text-xs font-bold text-gray-900 dark:text-gray-200">Last name</label>
                    <input type="text" id="lastname" class="block w-full border-0 focus:outline-none border-gray-100 dark:border-gray-600 p-0 text-gray-900 dark:text-gray-300 dark:bg-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Last name" autocomplete="off" v-model.lazy="registration.lastname"  />
                    <p v-if="errors.firstname" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.firstname[0] }}</p>
                  </div>
                  <div class="relative border border-red-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="email" class="block text-xs font-bold text-gray-900 dark:text-gray-200">E-mail</label>
                    <input type="email" id="email" class="block w-full border-0 focus:outline-none border-gray-100 dark:border-gray-600 p-0 text-gray-900 dark:text-gray-300 dark:bg-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="jane.doe@coinradr.com" autocomplete="off" v-model.lazy="registration.email"  />
                    <p v-if="errors.email" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.email[0] }}</p>
                  </div>
                  <div class="relative border border-red-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="password" class="block text-xs font-bold text-gray-900 dark:text-gray-200">Password</label>
                    <input type="password" id="password" class="block w-full border-0 focus:outline-none p-0 text-gray-900 dark:text-gray-300 dark:bg-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="*********" v-model.lazy="registration.password"  />
                    <p v-if="errors.password" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.password[0] }}</p>
                  </div>
                  <div class="relative border border-red-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="password_confirmation" class="block text-xs font-bold text-gray-900 dark:text-gray-200">Confirm Password</label>
                    <input type="password" id="confirm-password" class="block w-full border-0 focus:outline-none p-0 text-gray-900 dark:text-gray-300 dark:bg-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="*********" v-model.lazy="registration.password_confirmation"  />
                  </div>
                </div>

              </div>
              <div class="mt-5 sm:mt-6">
                <button type="submit" class="color-button inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
                  <LockOpenIcon class="-ml-0.5 mr-2 h-4 w-4" />
                  Sign Up
                </button>
              </div>
              <div class="flex items-center text-sm mt-2">
                <p class="text-gray-600 dark:text-gray-400">Already have an account?</p>
                <a href="#" @click="loginFormLoad" class="font-bold text-red-600 ml-3">Sign in</a>
              </div>
          </form>
      </RegisterForm>
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
import { BellIcon, MenuIcon, XIcon, MoonIcon, SwitchHorizontalIcon, LockClosedIcon, LockOpenIcon, LoginIcon, UserAddIcon} from '@heroicons/vue/outline'

import { ref, computed } from 'vue'

import useAuth from '../../api/useAuth'

import Logo from '@/components/Logo'
import Navigation from '@/components/Front/Navigation'
import NavigationMobile from '@/components/Front/NavigationMobile'
import Avatar from '@/components/Front/Avatar'
import ModalPop from '@/components/Front/ModalPop'
import DarkMode from '@/components/Front/DarkMode'
import LoginForm from '@/components/Front/Auth/LoginForm'
import RegisterForm from '@/components/Front/Auth/RegisterForm'
import InputWithSelect from '@/components/Front/Forms/InputWithSelect'

const userData = {
  name: '',
  email: '',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'Change Password', href: '#' },
  { name: 'Staking', href: '#' },
]

const navigation = [
    { name: 'My Portfolio', href: '#' },
    { name: 'Trading', href: '#' },
    { name: 'Verify', href: '#',
        children: [
            { name: 'Rug Checker', href: '#' },
            { name: 'Dex Scanner', href: '#' },
        ]
    },
    { name: 'Whale Alerts', href: '#' },
    { name: 'Submit Coin', href: '#', 
        children: [
            { name: 'New Launches', href: '#' },
            { name: 'Top Voted Coins', href: '#' },
        ] 
    },
    { name: 'Essentials', href: '#',
        children: [
            { name: 'Market', href: '#' },
            { name: 'Staking', href: '#' },
            { name: 'Crypto Education', href: '#' },
            { name: 'News', href: '#' },
            { name: 'Airdrops', href: '#' },
        ] 
    },
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
        MoonIcon,
        MenuIcon,
        SwitchHorizontalIcon,
        SearchIcon,
        LockClosedIcon,
        LoginIcon,
        UserAddIcon,
        LockOpenIcon,
        XIcon,
        DarkMode,
        Logo,
        Navigation,
        NavigationMobile,
        ModalPop,
        InputWithSelect,
        LoginForm,
        RegisterForm,
        Avatar
    },
    setup() {
        const modalStatus = ref(false)
        const { store, loginFormStatus, registerFormStatus, errors, logins, registration, registerFormLoad, loginFormLoad, attemptLogin, attemptRegister, logout } = useAuth()

        const swapAction = () => {
          modalStatus.value = !modalStatus.value
        }

        const user = computed(() => {
          return store.state.user
        })

        const userLogin = () => {
          attemptLogin()
        }

        const authenticated = computed(() => {
          return store.state.authenticated
        })

        return {
            userData,
            userNavigation,
            navigation,
            modalStatus,
            swapAction,
            loginFormStatus,
            registerFormStatus,
            loginFormLoad,
            registerFormLoad,
            authenticated,
            user,
            attemptLogin,
            attemptRegister,
            errors,
            logins,
            logout,
            registration,
            userLogin
        }
    }
}
</script>