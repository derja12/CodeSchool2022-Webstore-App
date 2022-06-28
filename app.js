const API_URL = "https://fakestoreapi.com";

Vue.component("product", {
    template: `
    <div>
        <div class="image-container">
            <img v-on:click="addToCart()" v-bind:src="item.image">
        </div>
        <div class="info-container">
            <h3>{{ shortenedTitle }}</h3>
            <p>{{ shortenedDescription }} <i>\${{ item.price }}</i></p>
        </div>
        <div class="button-container">
            <button v-on:click="addToCart()">
                Add to cart
            </button>
        </div>
    </div>
    `,
    props: {
        "item": Object,
        "cart": Array,
    },
    methods: {
        addToCart: function () {
            this.cart.push(this.item);
        }
    },
    computed: {
        shortenedTitle: function () {
            if (this.item.title.length > 40) {
                return this.item.title.slice(0,39).trim() + "...";
            } else {
                return this.item.title;
            }
        },
        shortenedDescription: function () {
            if (this.item.description.length > 60) {
                return this.item.description.slice(0,59).trim() + "...";
            } else {
                return this.item.description;
            }
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
        page: "welcome",

        products: [],
        Vuecart: []

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
    }
});