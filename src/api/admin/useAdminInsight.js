import axios from 'axios'
import { ref } from 'vue'

export default function useAdminInsight() {
    const insights = ref({})
    const insight = ref({})
    const errors = ref({})

    const fetchInsights = async () => {
        axios.defaults.withCredentials = true
        let response = await axios.get('/api/admin/insight')
        insights.value = response.data.data
    }

    const fetchInsight = async (token) => {
        axios.defaults.withCredentials = true
        let response = await axios.get(`/api/admin/insight/${token}`)
        insight.value = response.data.data
    }

    const storeInsight = async (data) => {
        axios.defaults.withCredentials = true
        try {
            let response = await axios.post('/api/admin/insight', data)
            insight.value = response.data.data
        } catch (e) {
            if(e.response.data.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateInsight = async (token, data) => {
        axios.defaults.withCredentials = true
        let response = await axios.post(`/api/admin/insight/${token}`, data)
        insight.value = response.data.data
    }

    const destroyInsight = async (token) => {
        axios.defaults.withCredentials = true
        if(!window.confirm('Are you sure?')) {
            return
        }
        await axios.delete(`/api/admin/insight/${token}`)
    }

    return {
        errors,
        insight,
        insights,
        fetchInsights,
        fetchInsight,
        storeInsight,
        updateInsight,
        destroyInsight
    }
}