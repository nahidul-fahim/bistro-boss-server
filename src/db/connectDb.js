const mongoose = require('mongoose');
require('dotenv').config();

const getConnectionString = () => {
    let connectionURI;

    // checking if the project is in development or in production to get the database uri
    if (process.env.NODE_ENV === "development") {
        connectionURI = process.env.DB_LOCAL;
        connectionURI = connectionURI.replace('<username>', process.env.DB_USER);
        connectionURI = connectionURI.replace('<password>', process.env.DB_PASS);
    }
    else {
        connectionURI = process.env.DB_PRODUCTION
    }

    return connectionURI;
};

const connectDB = async () => {
    const uri = getConnectionString()
    console.log(uri)
    await mongoose.connect(uri, { dbName: process.env.DB_NAME })
    console.log("Connection to database successful!")
}


module.exports = connectDB;