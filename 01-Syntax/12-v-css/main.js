const app = Vue.createApp({
    setup() {
        const guitars = [
            {id: 1, name: "Fender Stratocaster", stock: 0},
            {id: 2, name: "Fender Foschater", stock: 3},
            {id: 3, name: "Bendy McRul", stock: 5},
            {id: 4, name: "Albert Istfhisch", stock: 1},
            {id: 5, name: "Eclipse McLipse", stock: 10},
        ];

        return { 
                guitars
            };
    }
});

app.mount('#appdiv');