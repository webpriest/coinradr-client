import axios from 'axios'
import { ref } from 'vue'

export default function useInsight() {
    const insight = ref({})

    const fetchInsight = async () => {
        let response = await axios.get('/api/insight')
        insight.value = response.data.data
    }

    return {
        insight,
        fetchInsight
    }
}