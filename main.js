var app = new Vue({
    el: '#app',
    data: {
        prova: []
    },
    methods: {
        printEmail() {
            this.prova = []
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    let em = response.data.response;
                    console.log(em);
                    this.prova.push(em);
                })
            }


        },
    },
});