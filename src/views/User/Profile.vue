<template>
    <div>
        My Profile
        <button @click="loadForm">Click to login</button>
        <LoginForm :loginFormStatus="loginFormStatus"></LoginForm>
    </div>
</template>

<script>
import { ref } from 'vue'
import LoginForm from '@/components/Front/Auth/LoginForm'

export default {
    components: {
        LoginForm
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