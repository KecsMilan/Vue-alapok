<script setup>
    import {ref} from 'vue';
    
    defineEmits([
        'on-change'
    ])

    defineProps({
        modelValue: {
            type: String,
            required: true,
            default: ''
        },
        id: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text',
            required: true
        },
        placeholder: {
            type: String,
            default: '',
            required: true
        },
        label: {
            type: String,
            required: true

        }
    })

    const name = ref('')

</script>

<template>
    <label for="name">{{ label }}</label>
    <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">
</template>

<style scoped>

</style>