<template>
  <div class="">
    <HeroSection />

    <MainSection />
  </div>
</template>

<script>
import MainSection from '@/components/Front/MainSection'
import HeroSection from '@/components/Front/HeroSection'

export default {
  name: 'home',
  components: {
    MainSection,
    HeroSection
  }
}
</script>
