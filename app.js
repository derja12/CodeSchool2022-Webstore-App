const API_URL = "https://fakestoreapi.com";

var app = new Vue({
    el: "#app",
    data: {
        page: "welcome",

        products: [],
        Vuecart: [],
        newCartItem: {
            
        }

    },
    components: {
        'product': PRODUCT
    },
    methods: {
        getProducts: async function () {
            let response = await fetch(`${API_URL}/products`);
            let data = await response.json();

            this.products = data;
        },
        setPage: function (page) {
            this.page = page;
        }
    },
    created: function () {
        this.getProducts();
    },
    computed: {
        cartTotal: function () {
            let total = 0;
            this.Vuecart.forEach(product => {
                total += product.price;
            });
            return total;
        },
        cartTax: function () {
            return this.cartTotal * .08; 
        }
    }
});