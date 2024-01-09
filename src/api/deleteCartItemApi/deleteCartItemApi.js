const { ObjectId } = require("mongodb");
const CartItem = require("../../models/NewCartItem");

const deleteCartItem = async (req, res) => {
    const item = req.params.id;
    const id = { _id: new ObjectId(item) };
    console.log(id)
    const result = await CartItem.deleteOne(id);
    console.log(result + " " + "getting from delete");
    res.send(result);
}

module.exports = deleteCartItem;