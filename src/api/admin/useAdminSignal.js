import axios from 'axios'
import { ref } from 'vue'

export default function useAdminSignal() {
    const signals = ref({})
    const signal = ref({})

    const currencyUSD = (value) => {
        if(!value) return 0;
        return '$' + parseFloat(value).toLocaleString()
    }

    const ucase = (value) => {
        return value.toUpperCase()
    }

    const fetchSignals = async () => {
        axios.defaults.withCredentials = true
        let response = await axios.get('/api/admin/signals')
        signals.value = response.data.data
    }

    const fetchSignal = async (id) => {
        axios.defaults.withCredentials = true
        let response = await axios.get(`/api/admin/signals/${id}`)
        signal.value = response.data.data
    }

    const storeSignal = async (data) => {
        axios.defaults.withCredentials = true
        let response = await axios.post('/api/admin/signals', data)
        signal.value = response.data.data
    }

    const updateSignal = async (id, data) => {
        axios.defaults.withCredentials = true
        let response = await axios.post(`/api/admin/signals/${id}`, data)
        signal.value = response.data.data
    }

    const destroySignal = async (id) => {
        axios.defaults.withCredentials = true
        if(!window.confirm('Are you sure?')) {
            return
        }
        await axios.delete(`/api/admin/signals/${id}`)

        signals.value = signals.value.filter(c => c.id !== id)
    }

    return {
        ucase,
        signal,
        signals,
        fetchSignal,
        fetchSignals,
        storeSignal,
        updateSignal,
        destroySignal,
        currencyUSD
    }
}