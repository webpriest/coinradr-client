<template>
    <div>
        <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div class="space-y-6 lg:col-start-1 lg:col-span-2">
                <MyPortfolio @refreshPortfolio="reloadPortfolio" />
                <Trending />
            </div>

            <SidebarSection />
        </div>

        <Market />

        <CryptoEducation />
    </div>
</template>

<script>

import MyPortfolio from '@/components/Front/MyPortfolio.vue'
import Trending from '@/components/Front/Trending.vue'
import SidebarSection from '@/components/Front/SidebarSection.vue'
import Market from '@/components/Front/Market.vue'
import CryptoEducation from '@/components/Front/Education/CryptoEducation.vue'
import usePortfolio from '../../api/usePortfolio'

export default {
    components: {
        MyPortfolio,
        Trending,
        SidebarSection,
        Market,
        CryptoEducation
    },
    setup() {
        const { portfolios, getPortfolio } = usePortfolio()

        const reloadPortfolio = () => {
            getPortfolio()
        }

        return {
            getPortfolio,
            reloadPortfolio
        }
    },
}
</script>