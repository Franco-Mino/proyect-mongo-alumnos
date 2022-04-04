import mongoose from "mongoose";
import DB from "./config/config";

import {config} from "dotenv";
config()
console.log(DB.DB.URI)

mongoose.connect(DB.DB.URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongo connection')
});

connection.on('error', (err) => {
    console.log(err);
    process.exit(0);
})