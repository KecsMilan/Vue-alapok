const {createApp, ref} = Vue;

const app = createApp({
    setup() {
        let price = ref(0);

        const increasePrice = () => {
            price.value++;
        }

        const decreasePrice = () => {
            price.value--;
        }

        const formatPrice = () => {
            return price.value.toLocaleString('ru-RU',
                {
                    style: 'currency',
                    currency: 'RUB'
                }
            )
        }

        const formattedPrice = Vue.computed(() => {
            return price.value.toLocaleString('ru-RU',
                {
                    style: 'currency',
                    currency: 'RUB'
                }
            )
        })

        return { 
            formattedPrice,
            price,
            formatPrice,
            increasePrice,
            decreasePrice 
        };
    }
});

app.mount('#appdiv');