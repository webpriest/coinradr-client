<template>
    <div>
        <span v-for="(item, index) in data" :key="index">{{ item }}</span>
    </div>
</template>

<script>
export default {
    props: ['data'],
    setup() {
        
    },
}
</script>