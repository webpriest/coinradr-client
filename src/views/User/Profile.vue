<template>
    <div>
        My Profile
        <button @click="loadForm">Click to login</button>
        <div class="w-1/3 mx-auto border border-gray-500 p-4">
            <SignIn></SignIn>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import SignIn from '@/components/Front/Auth/SignIn'

export default {
    components: {
        SignIn
    },
    setup() {
        const loginFormStatus = ref(false)

        const loadForm = () => {
            loginFormStatus.value = !loginFormStatus.value
        }

        return {
            loginFormStatus,
            loadForm
        }
    },
}
</script>