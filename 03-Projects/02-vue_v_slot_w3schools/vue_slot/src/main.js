import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CardComp from './CardComp.vue'

const app = createApp(App)

app.component('card-slot', CardComp)
app.mount('#app')
