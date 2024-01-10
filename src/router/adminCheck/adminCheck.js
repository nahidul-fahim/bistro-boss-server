const express = require('express');
const adminCheck = require('../../api/adminCheckApi/adminCheckApi');
const router = express.Router();

router.get("/users/admin/:email", adminCheck)


module.exports = router;