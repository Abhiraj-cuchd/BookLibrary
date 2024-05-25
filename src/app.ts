import express, { Request, Response, NextFunction } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import config from './config/config';

const app = express();

app.get('/', (req, res) => {
    // throw new Error('Something went wrong');
    const error = createHttpError(400, 'Something went wrong');
    throw error;
    res.send('API is running');
});


export default app
