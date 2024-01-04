const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;




app.get("/health", (req, res) => {
    res.send("Bistro Boss Restaurant is running fine.")
});

app.listen(port, () => {
    console.log(`Bistro boss server is running on port: ${port}`)
});