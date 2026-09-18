const app = Vue.createApp({
    setup() {
        
        const formData = Vue.reactive({
            name: '',
            email: ''
        })

        const handleSubmit = () => {
            console.log(formData)
            console.log(`Name: ${formData.name} $ Email: ${formData.email}`)
        }

        return { 
            handleSubmit,
            formData
        };
    }
});

app.mount('#appdiv');