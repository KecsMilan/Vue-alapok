<script setup>

/* 

Logikát magam állítottam össze, css-el besegített az AI.

*/

    import { computed, ref, watch } from 'vue';

    const data = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },

        { id: 3, name: 'Jim Smith' },
        { id: 4, name: 'Sarah Johnson' },
    ]

    const value = ref('')

    const search = computed(() => {
        return data.filter((d) => d.name.toLowerCase().includes(value.value.toLowerCase()))
    })

    watch(value, (newValue) => {
        console.log(newValue)
    })

</script>

<template>
    <article class="page">
        <header class="search-bar">
            <div class="search-box">
                <span class="icon">🔍</span>
                <input v-model="value" type="text" placeholder="Search bar">
            </div>
        </header>

        <main>
            <div class="result">
                <h2 v-if="search.length > 0">Results:</h2>
                <ul v-if="search.length > 0">
                    <li v-for="s in search" :key="s.id">
                        <span class="names">{{ s.name }}</span>
                    </li>
                </ul>
                <p v-else class="no-result">😕 No results</p>
            </div>
        </main>
    </article>
</template>

<style scoped>
.page {
    min-height: 100vh;
    padding: 40px 20px;
    box-sizing: border-box;
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
}

.search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
}

.search-box {
    position: relative;
    width: 100%;
    max-width: 340px;
}

.icon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    pointer-events: none;
}

input {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 18px 12px 44px;
    font-size: 1.1rem;
    color: #1e3a5f;
    background-color: #ffffff;
    border: 2px solid transparent;
    border-radius: 999px;
    box-shadow: 0 6px 16px rgba(30, 80, 140, 0.2);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
}

input::placeholder {
    color: #8aa4bf;
}

input:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.25);
}

main {
    display: flex;
    justify-content: center;
}

.result {
    width: 100%;
    max-width: 340px;
    padding: 24px 28px 28px;
    background-color: #ffffff;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(30, 80, 140, 0.25);
}

.result > h2 {
    margin: 0 0 16px;
    font-size: 1.4rem;
    color: #1e3a5f;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    padding: 12px 18px;
    background-color: #f4f9ff;
    border-left: 5px solid #4a90e2;
    border-radius: 12px;
    transition: transform 0.2s, background-color 0.2s;
}

li:hover {
    transform: translateX(6px);
    background-color: #e3f0ff;
}

.names {
    font-size: 1.15rem;
    font-weight: 600;
    color: #1e3a5f;
}

.no-result {
    margin: 0;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #c62828;
}
</style>