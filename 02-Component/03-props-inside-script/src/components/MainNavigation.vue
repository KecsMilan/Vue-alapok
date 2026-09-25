<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: "paparapara"
        }
    })

    const alertTitle = () => {
        alert(`This is the title: ${props.title}`)
    }

</script>
<template> 
    <nav>
        <li><a href="/" @click="alertTitle">{{ title }}</a></li>
        <li><a href="https://vuejs.org/">Vue JS</a></li>
    </nav>
</template>

<style scoped>
    nav {
        display:flex;
        background-color: #d6d6d6;
        padding: 1rem;
    }
    ul{
        list-style: none;
        padding:0;
        margin:0;
    }

    li {
        list-style: none;
        padding: 0.25rem 1.25rem;
        margin: 0px 5px; 
        border: 0.2px solid darkgray;
        border-radius: 25px;
    }

    a {
        text-decoration: none;
        color: darkgrey;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
    }
    
    a:hover {
        color:gray;
        transition: 0.3s;
    }

</style>