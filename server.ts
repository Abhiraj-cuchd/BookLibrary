import app from './src/app';
import config from './src/config/config';
import connectDB from './src/config/db';

const startServer = async () => {
    const port = config.port;

    // <-- Connect Database -->
    await connectDB();

    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
    });
}

startServer();