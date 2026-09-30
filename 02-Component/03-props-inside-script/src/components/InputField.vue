<script setup>
import {ref} from 'vue';
    
    defineEmits([
        'on-change'
    ])

    const name = ref('')

</script>

<template> 
    <input
    v-model="name"
    @input="$emit('on-change', name)"
    type="text" 
    placeholder="Enter your name">
</template>

<style scoped>

</style>