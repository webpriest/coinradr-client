import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default function useRegister() {
    const registerFormStatus = ref(false)
    const store = useStore()
    const router = useRouter()

    const registerFormLoad = () => {
        registerFormStatus.value = !registerFormStatus.value
    }

    const errors = ref({})
    const registration = reactive({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const attemptRegister = () => {
        store.dispatch('register', registration).then(() => {
            registerFormLoad()
            router.replace({ name: 'home' })
        }).catch((e) => {
            if (e.response.status === 422 || e.response.status === 401) {
                errors.value = e.response.data.errors
            }
        })
    }
    return {
        registerFormStatus,
        store,
        router,
        registerFormLoad,
        errors,
        registration,
        attemptRegister
    }
}