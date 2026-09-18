const app = Vue.createApp({
    setup() {
        
        const color = Vue.ref()

        Vue.watch(color, ()=>{
            console.log(color)
        })

        return { 
            color
        };
    }
});

app.mount('#appdiv');