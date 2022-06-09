import axios from 'axios'
import { ref } from 'vue'

export default function useCoins() {
    const coins = ref({})
    const hottest = ref({})
    const coin = ref({})

    const currencyUSD = (value) => {
        if(!value) return 0;
        return '$' + parseFloat(value).toLocaleString()
    }
    
    const currencyUSD6d = (value) => {
        if(!value) return 0;
        return '$' + value.toFixed(6)
    }
    
    const currencyUSDnoD = (value) => {
        if(!value) return 0;
        return '$' + value.toLocaleString()
    }
    
    const percent = (value) => {
        if(!value) return 0;
        return value.toFixed(1) + '%'
    }

    const getCoin = async (coin_id) => {
        axios.defaults.withCredentials = false
        let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin_id}`)

        let coinData = {
            name: response.data.name,
            logo: response.data.image.small,
            market_price: response.data.market_data.current_price.usd,
            market_cap: response.data.market_data.market_cap.usd,
            percent_24: response.data.market_data.price_change_percentage_24h,
            percent_7d: response.data.market_data.price_change_percentage_7d,
            percent_14d: response.data.market_data.price_change_percentage_14d,
            percent_30d: response.data.market_data.price_change_percentage_30d,
            percent_60d: response.data.market_data.price_change_percentage_60d,
            percent_1y: response.data.market_data.price_change_percentage_1y,
            high_24: response.data.market_data.high_24h.usd,
            low_24: response.data.market_data.low_24h.usd,
            total_volume: response.data.market_data.total_volume.usd,
        }

        coin.value = coinData

        // console.log(coin.value)
    }

    const getCoins = async () => {
        axios.defaults.withCredentials = false
        let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d')

        coins.value = response.data
    }

    const topCoins = async () => {
        axios.defaults.withCredentials = false
        let response = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=63cc51be0d3a463ac3385997c27494edfd0b16efd51a33f1c91b3674787fe05b')

        hottest.value = response.data.Data
    }

    return {
        coin,
        coins,
        percent,
        hottest,
        getCoins,
        topCoins,
        getCoin,
        currencyUSD,
        currencyUSDnoD,
        currencyUSD6d,
    }
}