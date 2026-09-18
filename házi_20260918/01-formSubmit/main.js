const app = Vue.createApp({
    setup() {
        
        const formData = Vue.reactive({
            name: ''
        })

        const userForm = Vue.ref()

        const handleSubmit = () => {
            console.log(`Name | ${formData.name} |`)
            userForm.value.reset()
        }

        return { 
            handleSubmit,
            formData,
            userForm
        };
    }
});

app.mount('#appdiv');