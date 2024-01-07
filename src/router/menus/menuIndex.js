const express = require('express');
const Menu = require('../../models/Menu');
const router = express.Router();


router.get("/menu", async (req, res) => {
    const result = await Menu.find();
    res.send(result);
})


module.exports = router;