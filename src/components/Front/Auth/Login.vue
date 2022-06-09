<template>
    <TransitionRoot as="template" :show="loginFormStatus">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="loginFormStatus = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-white dark:bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">


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
    
            </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { LoginIcon, LockOpenIcon } from '@heroicons/vue/outline'

import useAuth from '../../../api/useAuth'

export default {
  props: {
      loginFormStatus: {
          required: true
      }
  },
  components: {
    LoginIcon,
    LockOpenIcon,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot
  },
  setup(props) {
    const { store, loginFormStatus, registerFormStatus, errors, logins, registration, registerFormLoad, loginFormLoad, attemptLogin, attemptRegister, logout } = useAuth()

    console.log(props)
      
    return {
        errors,
        logins,
      loginFormStatus
    }
  },
}
</script>