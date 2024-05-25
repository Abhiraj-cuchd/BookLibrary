import app from './src/app';
import config from './src/config/config';
import connectDB from './src/config/db';
import { globalErrorHandler } from './src/middlewares/globalErrorHandler';

const startServer = async () => {
    const port = config.port;

    // <-- Connect Database -->
    await connectDB();


    // <---- Global error Handler ---->
    app.use(globalErrorHandler)

    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
    });
}

startServer();