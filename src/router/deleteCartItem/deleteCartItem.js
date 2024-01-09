const express = require('express');
const deleteCartItem = require('../../api/deleteCartItemApi/deleteCartItemApi');
const router = express.Router();

router.delete("/cart/:id", deleteCartItem)


module.exporst = router;