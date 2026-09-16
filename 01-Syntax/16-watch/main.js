const {createApp, ref, watch} = Vue;

const app = createApp({
    setup() {
        let price = ref(0);
        let myMoney = ref(5);
        const errorMessage = ref(null)

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

        // figyeli a változást egy változó alapján
        watch(price, () => {
            errorMessage.value = price.value > myMoney.value ? "You don't have enough money!" : null
        })

        return { 
            formattedPrice,
            price,
            errorMessage,
            myMoney,
            formatPrice,
            increasePrice,
            decreasePrice 
        };
    }
});

app.mount('#appdiv');