const app = Vue.createApp({
    setup() {
        
        const name = Vue.ref('')

        // setTimeout(()=> {
        //     name.value = "Kala Pál"
        // }, 2000)

        const updateName = (event) => {
            name.value = event.target.value
        }

        return { 
            name,
            updateName
        };
    }
});

app.mount('#appdiv');