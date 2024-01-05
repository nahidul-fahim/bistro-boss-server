const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const { LOCAL_CLIENT } = require('../config/default');

const applyMiddleware = (app) => {
    // Middleware
    app.use(cors({
        origin: [
            LOCAL_CLIENT
        ]
    }));
    app.use(express.json());
}


module.exports = applyMiddleware;