



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');





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
        const cartCollection = client.db("bistroBossRestaurant").collection('cartItems');
        const userCollection = client.db("bistroBossRestaurant").collection('users');




        // verify admin middleware. Verify after token verification
        // const verifyAdmin = async (req, res, next) => {
        //     const email = req.decoded.email;
        //     const query = { email: email };
        //     const user = await userCollection.findOne(query);
        //     const isAdmin = user?.role === 'admin';
        //     if(!isAdmin) {
        //         return res.status(403).send({message: "Forbidden access!"})
        //     };
        //     next();
        // }


        // Post new user info to the database
        app.post("/user", async (req, res) => {
            const user = req.body;

            // checking if the user already exists
            const query = { email: user.email };
            const existingUser = await userCollection.findOne(query);
            if (existingUser) {
                return res.send({ message: "User already exists", insertedId: null });
            }
            else {
                const result = await userCollection.insertOne(user);
                res.send(result);
            }
        });



        // Get all the reviews
        app.get("/reviews", async (req, res) => {
            const result = await reviewCollection.find().toArray();
            res.send(result);
        })


        // Get all the users in collection
        app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
            const result = await userCollection.find().toArray();
            res.send(result);
        })


        // delete user from database
        app.delete("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })


        // Update user role
        app.patch("/user/admin/:id", verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updatedDoc = {
                $set: {
                    role: "admin"
                }
            };
            const result = await userCollection.updateOne(filter, updatedDoc);
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