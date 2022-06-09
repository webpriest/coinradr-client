import axios from 'axios'
import { ref } from 'vue'

export default function useEducation() {
    const educations = ref({})
    const education = ref({})

    const fetchEducations = async () => {
        let response = await axios.get('/api/education')
        educations.value = response.data.data
    }

    const fetchEducation = async (slug) => {
        let response = await axios.get(`/api/education/${slug}`)
        education.value = response.data.data
    }

    return {
        education,
        educations,
        fetchEducation,
        fetchEducations
    }
}