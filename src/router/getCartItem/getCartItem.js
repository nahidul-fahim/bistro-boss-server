const express = require('express');
const getCartItems = require('../../api/getCartItemApi/getCartItemApi');
const router = express.Router();

router.get("/cart", getCartItems)

module.exports = router;