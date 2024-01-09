const express = require('express');
const deleteCartItemApi = require('../../api/deleteCartItemApi/deleteCartItemApi');
const router = express.Router();

router.delete("/deletecartitem/:id", deleteCartItemApi)


module.exports = router;