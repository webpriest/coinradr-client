import axios from 'axios'
import { ref } from 'vue'

export default function useNews() {
    const news = ref({})

    const getNews = async () => {
        axios.defaults.withCredentials = false
        await axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=63cc51be0d3a463ac3385997c27494edfd0b16efd51a33f1c91b3674787fe05b').then((response) => {
            news.value = response.data.Data.slice(0,6)
        })
    }
    
    const getAllNews = async () => {
        axios.defaults.withCredentials = false
        await axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=63cc51be0d3a463ac3385997c27494edfd0b16efd51a33f1c91b3674787fe05b').then((response) => {
            news.value = response.data.Data
        })
    }

    return {
        news,
        getNews,
        getAllNews
    }
}