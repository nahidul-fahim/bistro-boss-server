const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());


// Database user and password
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS


// Mongodb code snippet
const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.xeklkbf.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        // Database and collections
        const menuCollection = client.db("bistroBossRestaurant").collection('menuCollection');
        const reviewCollection = client.db("bistroBossRestaurant").collection('reviews');


        // Get all the menus
        app.get("/menu", async (req, res) => {
            const result = await menuCollection.find().toArray();
            res.send(result);
        })

        // Get all the reviews
        app.get("/reviews", async(req, res) => {
            const result = await reviewCollection.find().toArray();
            res.send(result);
        })







        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Bistro Boss Restaurant is running fine.")
});

app.listen(port, () => {
    console.log(`Bistro boss server is running on port: ${port}`)
});