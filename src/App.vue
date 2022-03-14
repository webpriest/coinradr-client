<template>
  <div class="min-h-full">
    <TopHeader />
    
    <HeaderSection />

    <main class="">
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
    return {
      
    }
  },
}
</script>

<style src="./assets/styles/app.css" />