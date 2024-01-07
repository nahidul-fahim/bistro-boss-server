const express = require('express');
const Menu = require('../../models/Menu');
const findAllMenus = require('../../api/findAllMenus/findAllMenus');
const router = express.Router();


router.get("/menu", findAllMenus)


module.exports = router;