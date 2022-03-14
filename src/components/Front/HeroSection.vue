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

        <LoginForm :loginFormStatus="loginFormStatus"></LoginForm>
    </div>
</template>

<script>
import { LockOpenIcon, ChevronDoubleRightIcon } from '@heroicons/vue/outline'

import Infographix from '@/components/Front/Infographix'
import LoginForm from '@/components/Front/Auth/LoginForm'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    components: {
        Infographix,
        ChevronDoubleRightIcon,
        LockOpenIcon,
        LoginForm
    },
    setup() {
        const loginFormStatus = ref(false)
        const store = useStore()
        const router = useRouter()

        const loginFormLoad = () => {
          loginFormStatus.value = !loginFormStatus.value
        }

        return {
            loginFormLoad,
            loginFormStatus,
        }
    }
}
</script>