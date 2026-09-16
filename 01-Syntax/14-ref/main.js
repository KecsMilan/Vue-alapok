const {createApp, ref} = Vue;

const app = createApp({
    setup() {
        let counter = ref(0);

        const increase = () => {
            counter.value++;
        }

        const decrease = () => {
            counter.value--;
        }

        return { 
            counter,
            increase,
            decrease 
        };
    }
});

app.mount('#appdiv');