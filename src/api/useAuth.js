import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default function useAuth() {
    const store = useStore()
    const router = useRouter()
    
    const loginFormStatus = ref(false)
    const registerFormStatus = ref(false)

    const errors = ref({})
    const logins = reactive({
        email: '',
        password: '',
    })
    const registration = reactive({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    const registerFormLoad = () => {
        if(loginFormStatus) {
          loginFormStatus.value = false
        }
        registerFormStatus.value = !registerFormStatus.value
    }
    const loginFormLoad = () => {
        if(registerFormStatus) {
            registerFormStatus.value = false
        }
        loginFormStatus.value = !loginFormStatus.value
    }

    const attemptLogin = () => {
        store.dispatch('login', logins).then((response) => {
            console.log(response.data)
            loginFormLoad()
        }).catch((e) => {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
            if (e.response.status === 401) {
                errors.value = 'Authentication failed. Please try again'
            }
        })
    }

    const attemptRegister = () => {
        store.dispatch('register', registration).then(() => {
            registerFormLoad()
        }).catch((e) => {
            if (e.response.status === 422 || e.response.status === 401) {
            errors.value = e.response.data.errors
            }
        })
    }

    const logout = () => {
        if(store.getters.authenticated) {
            store.dispatch('logout').then(() => {
                router.replace({ name: 'home' })
            })
        }
    }

    return {
        store,
        loginFormStatus,
        registerFormStatus,
        errors,
        logins,
        registration,
        registerFormLoad,
        loginFormLoad,
        attemptLogin,
        attemptRegister,
        logout
    }
}