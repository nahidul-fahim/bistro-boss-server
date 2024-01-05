const express = require('express');
const applyMiddleware = require('./middlewares/applyMiddleware');
const connectDB = require('./db/connectDb');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;


// call apply middleware
applyMiddleware(app);


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
    await connectDB();
    // listening to the port
    app.listen(port, () => {
        console.log(`Bistro boss server is running on port: ${port}`)
    });
}

main();