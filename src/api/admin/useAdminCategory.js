import axios from 'axios'
import { ref } from 'vue'

export default function useAdminCategory() {
    const categories = ref([])
    const category = ref([])

    const fetchCategories = async () => {
        let response = await axios.get('/api/admin/categories')
        categories.value = response.data
    }

    const fetchCategory = async (slug) => {
        axios.defaults.withCredentials = true
        let response = await axios.get(`/api/admin/categories/${slug}`)
        category.value = response.data
    }

    const storeCategory = async (data) => {
        axios.defaults.withCredentials = true
        let response = await axios.post('/api/admin/categories', data)
        category.value = response.data
    }

    const updateCategory = async (slug, data) => {
        axios.defaults.withCredentials = true
        let response = await axios.post(`/api/admin/categories/${slug}`, data)
        category.value = response.data
    }

    const destroyCategory = async (slug) => {
        axios.defaults.withCredentials = true
        if(!window.confirm('Are you sure?')) {
            return
        }
        await axios.delete(`/api/admin/categories/${slug}`)

        categories.value = categories.value.filter(c => c.slug !== slug)
    }

    return {
        category,
        categories,
        fetchCategory,
        fetchCategories,
        storeCategory,
        updateCategory,
        destroyCategory
    }
}