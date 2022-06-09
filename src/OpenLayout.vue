<template>
    <div class="min-h-full dark:bg-gray-900">
        <TopHeader />
        
        <HeaderSection />

        <main>
        <router-view />
        </main>

        <FooterSection />
    </div>
</template>

<script>
import TopHeader from '@/components/Front/TopHeader'
import HeaderSection from '@/components/Front/HeaderSection'
import FooterSection from '@/components/Front/FooterSection'

export default {
    components: {
        TopHeader,
        HeaderSection,
        FooterSection
    },
    setup() {
        
    },
}
</script>