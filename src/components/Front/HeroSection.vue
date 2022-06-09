<template>
    <div class="bg-gray-800 pt-10 pb-10">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="px-6 md:py-2">
            <Infographix />
          </div>
          <div class="xs:w-full mx-auto px-6 text-center lg:px-0">
            <h1 class="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">CoinRadr</h1>
            <p class="mt-4 text-xl text-white">A one-stop shop for assets management, trading, dex scanner, rug checker, top voted coin, whale alerts, crypto education, coin insights and more.</p>
            <button v-if="!authenticated" type="button" class="color-button mt-8 inline-flex items-center rounded-md py-3 px-8 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2" @click="registerFormLoad">
              <ChevronDoubleRightIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Get Started
            </button>
            <button v-else type="button" class="color-button mt-8 inline-flex items-center rounded-md py-3 px-8 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
              <ChevronDoubleRightIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Welcome
            </button>
          </div>
        </div>

        <RegisterForm :registerFormStatus="registerFormStatus">
        <form @submit.prevent="attemptRegister">
              <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <UserAddIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                
                <div class="isolate -space-y-px rounded-md shadow-sm mt-4">
                  <div class="relative border border-red-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="firstname" class="block text-xs font-bold text-gray-900">First name</label>
                    <input type="text" id="firstname" class="block w-full border-0 focus:outline-none border-gray-100 p-0 text-gray-900 dark:text-gray-200 dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="First name" autocomplete="off" v-model.lazy="registration.firstname" />
                    <p v-if="errors.firstname" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.firstname[0] }}</p>
                  </div>
                  <div class="relative border border-red-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="lastname" class="block text-xs font-bold text-gray-900">Last name</label>
                    <input type="text" id="lastname" class="block w-full border-0 focus:outline-none border-gray-100 p-0 text-gray-900 dark:text-gray-200 dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="Last name" autocomplete="off" v-model.lazy="registration.lastname"  />
                    <p v-if="errors.firstname" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.firstname[0] }}</p>
                  </div>
                  <div class="relative border border-red-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="email" class="block text-xs font-bold text-gray-900">E-mail</label>
                    <input type="email" id="email" class="block w-full border-0 focus:outline-none border-gray-100 p-0 text-gray-900 dark:text-gray-200 dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="jane.doe@coinradr.com" autocomplete="off" v-model.lazy="registration.email"  />
                    <p v-if="errors.email" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.email[0] }}</p>
                  </div>
                  <div class="relative border border-red-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="password" class="block text-xs font-bold text-gray-900">Password</label>
                    <input type="password" id="password" class="block w-full border-0 focus:outline-none p-0 text-gray-900 dark:text-gray-200 dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="*********" v-model.lazy="registration.password"  />
                    <p v-if="errors.password" class="mt-2 text-sm text-red-600 dark:text-red-300">{{ errors.password[0] }}</p>
                  </div>
                  <div class="relative border border-red-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="password_confirmation" class="block text-xs font-bold text-gray-900">Confirm Password</label>
                    <input type="password" id="confirm-password" class="block w-full border-0 focus:outline-none p-0 text-gray-900 dark:text-gray-200 dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="*********" v-model.lazy="registration.password_confirmation"  />
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
                <p class="text-gray-600">Already have an account?</p>
                <a href="#" @click="loginFormLoad" class="font-bold text-red-600 ml-3">Sign in</a>
              </div>
          </form>
      </RegisterForm>

      <LoginForm :loginFormStatus="loginFormStatus">
        <form @submit.prevent="attemptLogin">
              <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <LoginIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                
                <div class="isolate -space-y-px rounded-md shadow-sm mt-4">
                  <p v-if="errors.length" class="mt-2 mb-2 text-sm text-red-600">{{ errors }}</p>
                  
                  <div class="relative border border-red-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="email" class="block text-xs font-bold text-gray-900">E-mail</label>
                    <input type="email" id="email" class="block w-full border-0 focus:outline-none border-gray-100 p-0 text-gray-900 dark:text-gray-200 dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="jane.doe@coinradr.com" autocomplete="off" v-model="logins.email"  />
                    <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email[0] }}</p>
                  </div>
                  <div class="relative border border-red-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-red-600 focus-within:border-red-600">
                    <label for="password" class="block text-xs font-bold text-gray-900">Password</label>
                    <input type="password" id="password" class="block w-full border-0 focus:outline-none p-0 text-gray-900 dark:text-gray-200 dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-0 sm:text-sm" placeholder="*********" v-model="logins.password"  />
                    <p v-if="errors.password" class="mt-2 text-sm text-red-600">{{ errors.password[0] }}</p>
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
                <p class="text-gray-600">Don't have an account?</p>
                <a href="#" @click="registerFormLoad" class="font-bold text-red-600 ml-3">Sign up</a>
              </div>
          </form>
      </LoginForm>
    </div>
</template>

<script>
import { UserAddIcon, LoginIcon, LockOpenIcon, ChevronDoubleRightIcon} from '@heroicons/vue/outline'

import Infographix from '@/components/Front/Infographix'
import RegisterForm from '@/components/Front/Auth/RegisterForm'
import LoginForm from '@/components/Front/Auth/LoginForm'
import useAuth from '../../api/useAuth'
import { computed } from 'vue'

export default {
    components: {
        Infographix,
        ChevronDoubleRightIcon,
        UserAddIcon,
        LoginIcon,
        LockOpenIcon,
        RegisterForm,
        LoginForm
    },
    setup() {
        const { store, loginFormStatus, registerFormStatus, errors, logins, registration, registerFormLoad, loginFormLoad, user, attemptLogin, attemptRegister, logout } = useAuth()

        const authenticated = computed(() => {
          return store.state.authenticated
        })

        return {
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
            registration
        }
    }
}
</script>