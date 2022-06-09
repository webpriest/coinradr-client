<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script>
import OpenLayout from './OpenLayout'
import LeadLayout from './LeadLayout'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  components: {
    OpenLayout,
    LeadLayout
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const layout = computed(() => {
      if(store.getters.authenticated === true) {
        if(store.getters.stint === 'proper') {
          return 'open-layout'
        }
        else {
          // router.push({ name: 'lead.index' })
          return 'lead-layout'
        }
      }
      else {
        return 'open-layout'
      }
    })

    return {
      layout
    }
  },
}
</script>

<style src="./assets/styles/app.css" />