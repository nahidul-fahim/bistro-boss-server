const CartItem = require("../../models/NewCartItem");


const getCartItems = async (req, res) => {
    const email = req.query.email;
    const query = { email: email }
    const result = await CartItem.find(query).exec();
    console.log(result)
    res.send(result);
}

module.exports = getCartItems;