import axios from 'axios'
import { ref } from 'vue'

export default function useAdminEducation() {
    const categories = ref([])
    const educations = ref([])
    const education = ref([])
    const errors = ref({})
    
    const fetchCategories = async () => {
        axios.defaults.withCredentials = true
        let response = await axios.get('/api/admin/categories')
        categories.value = response.data
    }

    const fetchEducations = async () => {
        axios.defaults.withCredentials = true
        let response = await axios.get('/api/admin/education')
        educations.value = response.data.data
    }

    const fetchEducation = async (slug) => {
        axios.defaults.withCredentials = true
        let response = await axios.get(`/api/admin/education/${slug}`)
        education.value = response.data.data
    }

    const storeEducation = async (data) => {
        axios.defaults.withCredentials = true
        let response = await axios.post('/api/admin/education', data)
        education.value = response.data.data  
    }

    const updateEducation = async (slug, data) => {
        axios.defaults.withCredentials = true
        let response = await axios.post(`/api/admin/education/${slug}`, data)
        education.value = response.data.data
    }

    const destroyEducation = async (slug) => {
        axios.defaults.withCredentials = true
        if(!window.confirm('Are you sure?')) {
            return
        }
        await axios.delete(`/api/admin/education/${slug}`)

        educations.value = educations.value.filter(p => p.slug !== slug)
    }

    return {
        errors,
        education,
        educations,
        categories,
        fetchEducation,
        fetchEducations,
        fetchCategories,
        storeEducation,
        updateEducation,
        destroyEducation
    }
}