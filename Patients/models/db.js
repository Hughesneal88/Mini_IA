// const mongoose = require('mongoose');
import mongoose from "mongoose";
// Creating an arrow function that returns a promise
export default async (connectionString) => {
    try {
        await mongoose.connect(connectionString);
        console.log('Successfully connected to MongoDB database');
    } catch (error) {
        console.error('Failed to connect to MongoDB database:', error);
        process.exit(1); // Exit the process with a non-zero status code
    }
}
