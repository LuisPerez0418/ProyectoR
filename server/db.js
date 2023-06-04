import mongoose from "mongoose";
import {MONGO_URI} from "./confi.js";

export  async function mongoDb(){
    try {
        const db =  await mongoose.connect(MONGO_URI);
        console.log("Conectado", db.connection.name);
    } catch (error) {
        console.log(error);
    }
}