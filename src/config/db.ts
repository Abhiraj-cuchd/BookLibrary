const mongoose = require('mongoose');
import { HttpError } from "http-errors";
import config from "./config";

export const connectDB = async () => {
    try {

        mongoose.connection.on('connected', () => {
            console.log(`Connected to Databse : ${mongoose.connection.name} host: ${mongoose.connection.host}`);
        });

        mongoose.connection.on('error', (err: HttpError) => {
            console.log('Unable to Connect to Databse', err);
        });

        await mongoose.connect(config.databaseURI as string);

    } catch (error) {
        console.log('Unable to Connect to Databse', error);
        process.exit(1);
    }
}

export default connectDB;