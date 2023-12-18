import mongoose from "mongoose";

export default async function connectDb(connectionString){
    await mongoose.connect(connectionString)
}

module.exports = connectDb