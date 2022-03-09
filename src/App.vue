<template>
  <div class="min-h-full">
    <TopHeader />
    
    <HeaderSection />

    <main class="">
      <HeroSection />

      <MainSection />
    </main>

    <FooterSection />
  </div>
</template>

<script>
import TopHeader from '@/components/Front/TopHeader'
import MainSection from '@/components/Front/MainSection'
import HeroSection from '@/components/Front/HeroSection'
import HeaderSection from '@/components/Front/HeaderSection'
import FooterSection from '@/components/Front/FooterSection'


const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}

export default {
  components: {
    TopHeader,
    MainSection,
    HeroSection,
    HeaderSection,
    FooterSection
  },
  setup() {
    return {
      user
    }
  },
}
</script>

<style src="./assets/styles/app.css" />