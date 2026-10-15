<script setup>
  
/* 

Logikát magam állítottam össze, css-el besegített az AI.

*/
  
  const menu = [
        {
        text: 'Vue.js',
        url: 'https://vuejs.org/',
        },
        {
        text: 'React',
        url: 'https://reactjs.org/',
        },
        {
        text: 'Angular',
        url: 'https://angular.io/',
        },
        {
        text: 'Svelte',
        url: 'https://svelte.dev/',
        },
    ]
</script>

<template>
  <nav>
    <ul>
      <li v-for="m in menu" :key="m.url">
        <a :href="m.url" target="_blank" rel="noopener noreferrer">{{ m.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
    box-shadow: 0 4px 14px rgba(30, 80, 140, 0.25);
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
}

ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    border-radius: 999px;
    background: linear-gradient(135deg, #4a90e2, #357abd);
    box-shadow: 0 2px 6px rgba(53, 122, 189, 0.35);
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
}

li:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(53, 122, 189, 0.45);
    background: linear-gradient(135deg, #5aa2f0, #4a90e2);
}

a {
    display: block;
    padding: 8px 20px;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s;
}

a:hover {
    color: #e3f2ff;
}

a:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 2px;
    border-radius: 999px;
}
</style>