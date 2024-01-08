const CartItem = require("../../models/NewCartItem");

const insertNewCartItem = async (req, res) => {
    const cartItem = req.body;
    const result = await CartItem.create(cartItem);
    res.send(result);
}

module.exports = insertNewCartItem;