const app = Vue.createApp({
    setup() {
        
        const color = Vue.ref()

        const main = {
            width: "100vw",
            height: "100vh",
            margin: "0",
            padding: "0"
        }

        Vue.watch(color, ()=>{
            console.log(color)
        })

        return { 
            color,
            main
        };
    }
});

app.mount('#appdiv');