const express = require('express');
const insertNewCartItem = require('../../api/insertCartApi/insertCartApi');
const router = express.Router();

router.post("/cart", insertNewCartItem)

module.exports = router;