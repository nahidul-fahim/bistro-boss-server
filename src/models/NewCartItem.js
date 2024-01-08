const { Schema, model } = require('mongoose');

const InsertCartSchema = new Schema({
    foodId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    recipe: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, { collection: 'cartItems' })


const CartItem = model('CartItem', InsertCartSchema);

module.exports = CartItem;