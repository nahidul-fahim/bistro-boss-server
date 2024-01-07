const { Schema, model } = require('mongoose');


const AllMenusSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { collection: 'menuCollection' })

const Menu = model('Menu', AllMenusSchema)

module.exports = Menu;