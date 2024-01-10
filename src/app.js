const express = require('express');
const applyMiddleware = require('./middlewares/applyMiddleware');
const connectDB = require('./db/connectDb');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const authenticationRouter = require('./router/authentication/authentication')
const menuRoutes = require('./router/menus/menuIndex')
const insertCartItemsRoute = require("./router/insertCartItem/insertCartItem")
const getCartItemsRouter = require("./router/getCartItem/getCartItem")
const deleteCartItemRoute = require("./router/deleteCartItem/deleteCartItem")
const adminCheckRoute = require("./router/adminCheck/adminCheck")


// call apply middleware
applyMiddleware(app);

// JWT related API
app.use(authenticationRouter);

// get all the menus
app.use(menuRoutes);
//get all the cart data
app.use(getCartItemsRouter)
// insert new data to cart collection
app.use(insertCartItemsRoute)
// delete a cart item from database
app.use(deleteCartItemRoute);
// checking if user is admin
app.use(adminCheckRoute)






// checking if server is running
app.get("/health", (req, res) => {
    res.send("Bistro Boss Restaurant is running fine.")
});

// handling error for all the wrong route
app.all("*", (req, res, next) => {
    const error = new Error(`The requested URL is invalid: [${req.url}]`)
    error.status = 404;
    next(error);
})

// middleware to handle error
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

const main = async () => {
    // connecting to databse using 'connectDB' function
    await connectDB();
    // listening to the port
    app.listen(port, () => {
        console.log(`Bistro boss server is running on port: ${port}`)
    });
}
main();