const mongoose = require('mongoose');

export const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Databse : ${mongoose.connection.name} host: ${mongoose.connection.host}`);
    } catch (error) {
        console.log('Unable to Connect to Databse', error);
    }

}

export default dbConn;