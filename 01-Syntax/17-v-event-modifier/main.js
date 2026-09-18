const app = Vue.createApp({
    setup() {
        const name = Vue.ref('')
        const email = Vue.ref('')

        const handleSubmit = () => {
            console.log(`Name: ${name.value} | Email: ${email.value}`)
        }

        return { 
            name,
            email,
            handleSubmit
        };
    }
});

app.mount('#appdiv');