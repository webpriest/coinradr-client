import axios from 'axios'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

export default function usePortfolio() {
    const assets = ref({})
    const portfolios = ref([])
    const store = useStore()
    
    let portfolioDB = {}

    const portfolioStatus = ref(false)
    const loginFormStatus = ref(false)
    const errors = ref([])

    const portfolioAction = () => {
        if(store.state.authenticated === true) {
            portfolioStatus.value = !portfolioStatus.value
        }
        else {
            loginFormStatus.value = true;
        }
    }

    const forms = reactive({
        coin_id: '',
        value_of_asset: ''
    })

    const currencyUSD = (value) => {
        if(!value) return 0;
        return '$' + parseFloat(value).toLocaleString()
    }
    
    const currencyUSDNoSymbol = (value) => {
        if(!value) return 0;
        return parseFloat(value).toLocaleString()
    }

    const percent = (value) => {
        if(!value) return 0;
        return parseFloat(value).toFixed(2) + '%'
    }

    const getAssets = async () => {
        axios.defaults.withCredentials = false
        let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        assets.value = response.data
    }

    const getPortfolios = async () => {
        axios.defaults.withCredentials = true
        await axios.get('/api/portfolio').then((response) => {
            portfolioDB = response.data
        })
        portfolios.value = []
        calculatePortfolio()
        portfolios.value.sort(function (a, b) {
            var dateA = new Date(a.created_at), dateB = new Date(b.created_at)
            return dateB - dateA
        });
    }
    
    const calculatePortfolio = () => {
        portfolioDB.forEach((item) => {
            weavePortfolio(item)
        })
    }
    
    const weavePortfolio = async (coin) => {
        axios.defaults.withCredentials = false
        let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.coin_id}`)
        
        // Assign to portfolio

        let tempDock = {
            id: '',
            name: '',
            icon: '',
            price: '',
            mktcap: '',
            t24h: '',
            t7d: '',
            asset_value: '',
            created_at: ''
        }

        tempDock.id = coin.id
        tempDock.name = response.data.symbol
        tempDock.icon = response.data.image.small
        tempDock.price = response.data.market_data.current_price.usd
        tempDock.t24h = response.data.market_data.price_change_percentage_24h_in_currency.usd
        tempDock.t7d = response.data.market_data.price_change_percentage_7d_in_currency.usd
        tempDock.mktcap = response.data.market_data.market_cap.usd
        tempDock.amount = coin.value_of_asset
        tempDock.created_at = coin.created_at
        tempDock.asset_value = Number(tempDock.price) * Number(tempDock.amount)
        
        portfolios.value.unshift(tempDock)
    }

    const removePortfolio = async (portfolio) => {
        axios.defaults.withCredentials = true
        if(!window.confirm('Are you sure?')) {
            return
        }
        await axios.delete(`/api/portfolio/${portfolio.id}`)

        portfolios.value = portfolios.value.filter(p => p.id !== portfolio.id)
    }

    const showValue = (value) => {
        if(!value) return 0;
        value = parseFloat(value)
        if(value < 0) {
            return value.toFixed(3)
        }
        else {
            return value.toFixed(6)
        }
    }

    return {
        assets,
        portfolioStatus,
        loginFormStatus,
        errors,
        portfolioAction,
        getAssets,
        getPortfolios,
        forms,
        // storePortfolio,
        removePortfolio,
        weavePortfolio,
        currencyUSD,
        currencyUSDNoSymbol,
        portfolios,
        showValue,
        percent
    }
}