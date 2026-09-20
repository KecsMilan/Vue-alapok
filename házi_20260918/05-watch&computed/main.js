const app = Vue.createApp({
    setup() {
        
        const count = Vue.ref()
        const price = Vue.ref()
        const resPrice = Vue.ref()

        const PriceCalc = Vue.computed(()=>{
            return count.value * price.value
        })
        
        const formattedPrice = Vue.computed(()=> {
            return new Intl.NumberFormat("en-US", {
                style:"currency",
                currency: "USD"
            }).format(PriceCalc.value)
        })
        

        Vue.watch([count, price], () => {
            if(PriceCalc.value > 0){
                resPrice.value = formattedPrice.value
            }
            else{
                resPrice.value = null
            }
        })

        return { 
            count,
            price,
            resPrice
        };
    }
});

app.mount('#appdiv');