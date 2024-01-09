const CartItem = require("../../models/NewCartItem");


const deleteCartItemApi = async (req, res) => {
    const item = req.params.id;
    const result = await CartItem.deleteOne({_id: item});
    res.send(result);
}

module.exports = deleteCartItemApi;