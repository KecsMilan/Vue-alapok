<script setup>
    defineEmits([
        'on-input'
    ])
</script>

<template> 
    <input @input="$emit('on-input')" type="text" placeholder="Enter your name" >
</template>

<style scoped>

</style>