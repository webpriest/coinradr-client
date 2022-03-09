<template>
    <div class="bg-gray-900 pt-10 pb-10">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="px-6 md:py-2">
            <Infographix />
          </div>
          <div class="xs:w-full mx-auto px-6 text-center lg:px-0">
            <h1 class="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">CoinRadr</h1>
            <p class="mt-4 text-xl text-white">A one-stop shop for assets management, trading, dex scanner, rug checker, top voted coin, whale alerts, crypto education, coin insights and more.</p>
            <button type="button" class="color-button mt-8 inline-flex items-center rounded-md py-3 px-8 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2" @click="loginFormLoad">
              <ChevronDoubleRightIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Get Started
            </button>
          </div>
        </div>

        <LoginForm :loginFormStatus="loginFormStatus">
        <div>
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <LoginIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          
          <div class="isolate -space-y-px rounded-md shadow-sm mt-4">
            <div class="relative border border-red-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
              <label for="email" class="block text-xs font-bold text-gray-900">E-mail</label>
              <input type="email" id="email" class="block w-full border-0 focus:outline-none border-gray-100 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="jane.doe@coinradr.com" autocomplete="off" />
            </div>
            <div class="relative border border-red-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
              <label for="password" class="block text-xs font-bold text-gray-900">Password</label>
              <input type="password" id="password" class="block w-full border-0 focus:outline-none p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="*********" />
            </div>
          </div>

        </div>
        <div class="mt-5 sm:mt-6">
          <button type="button" class="color-button inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm" @click="loginFormStatus = false">
            <LockOpenIcon class="-ml-0.5 mr-2 h-4 w-4" />
            Sign In
          </button>
        </div>
      </LoginForm>
    </div>
</template>

<script>
import { LoginIcon, LockOpenIcon} from '@heroicons/vue/outline'

import { ChevronDoubleRightIcon } from '@heroicons/vue/outline'
import Infographix from '@/components/Front/Infographix'
import LoginForm from '@/components/Front/Auth/LoginForm'
import { ref } from 'vue'

export default {
    components: {
        Infographix,
        ChevronDoubleRightIcon,
        LoginIcon,
        LockOpenIcon,
        LoginForm
    },
    setup() {
        const loginFormStatus = ref(false)

        const loginFormLoad = () => {
          loginFormStatus.value = !loginFormStatus.value
        }
        return {
            loginFormLoad,
            loginFormStatus
        }
    }
}
</script>