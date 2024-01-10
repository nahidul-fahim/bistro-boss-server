const express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const UserCollection = require('../../models/UserCollection');
const router = express.Router();

router.get("/users/admin/:email", async (req, res) => {
    const email = req.params.email;
    console.log("getting admin verifying email from params:" + " " + email)

    // verifyToken middleware
    verifyToken(req, res, async () => {
        try {
            console.log("getting decoded email:" + " " + req.decoded.email)
            if (email !== req.decoded.email) {
                res.status(403).send({ message: "Forbidden access" })
            };
            const query = { email: email };

            const user = await UserCollection.findOne(query).exec();
            let admin = false;
            if (user) {
                admin = user?.role === 'admin';
                console.log("welcome an admin")
            }
            console.log(admin + " " + "admin checking");
            res.send({ admin });
        } catch (error) {
            res.status(500).send({ message: 'Internal Server Error' });
        }
    })
})


module.exports = router;