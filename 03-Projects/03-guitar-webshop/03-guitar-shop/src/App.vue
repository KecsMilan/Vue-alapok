<script setup>
import { onMounted } from 'vue'
import { useGuitarStore } from './store/guitars'
import MainNavigation from './components/MainNavigation.vue'

const { guitars, fetchGuitars } = useGuitarStore()

onMounted(async () => {
  await fetchGuitars()
  console.log(guitars.value)
})
</script>

<template>
  <MainNavigation />
  <main>
    <router-view></router-view>
  </main>
  <div></div>
</template>

<style scoped></style>
