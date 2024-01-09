const verifyToken = require("../../middlewares/verifyToken");
const CartItem = require("../../models/NewCartItem");


// const getCartItems = async (req, res) => {
//     const email = req.query.email;
//     const query = { email: email }
//     const result = await CartItem.find(query).exec();
//     res.send(result);
// }



const getCartItems = async (req, res) => {
    const email = req.query.email;
    const query = { email: email };

    // verifytoken middleware
    verifyToken(req, res, async () => {
        try {
            const result = await CartItem.find(query).exec();
            res.send(result);
        } catch (error) {
            res.status(500).send({ message: 'Internal Server Error' });
        }
    });
};

module.exports = getCartItems;