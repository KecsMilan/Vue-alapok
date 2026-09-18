const app = Vue.createApp({
    setup() {
        
        const formData = Vue.reactive({
            name: '',
            email: ''
        })

        const userForm = Vue.ref()

        const handleSubmit = () => {
            console.log(formData)
            console.log(`Name: ${formData.name} $ Email: ${formData.email}`)
            
            // Vue megoldás
            userForm.value.reset();

            //javascript megoldás
            // document.getElementById("userForm").reset();
            //document.querySelector("#userForm").reset();
        }

        return { 
            handleSubmit,
            formData,
            userForm
        };
    }
});

app.mount('#appdiv');