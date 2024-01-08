const InsertCartItem = require("../../models/NewCartItem");

const insertNewCartItem = async (req, res) => {
    const cartItem = req.body;
    const result = await InsertCartItem.create(cartItem);
    res.send(result);
}

module.exports = insertNewCartItem;