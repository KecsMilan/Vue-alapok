<script setup>
import { onMounted } from 'vue'
import { useGuitarStore } from './store/guitars'

const { guitars, fetchGuitars } = useGuitarStore()

onMounted(async () => {
  await fetchGuitars()
  console.log(guitars.value)
})
</script>

<template>
  
</template>

<style scoped></style>
