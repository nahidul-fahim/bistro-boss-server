const { Schema, model } = require("mongoose");

const UserCollectionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: String
}, { collection: 'users' })


const UserCollection = model("UserCollection", UserCollectionSchema)

module.exports = UserCollection;