const PRODUCT = {
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
    },
    data: function () {
        return {
            value: "",
        }
    }
}

// Adding a new key to an object that exists
// this.object.newKey = newValue;

