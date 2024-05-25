import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import config from "../config/config";

export const globalErrorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    return res.json({
        status: statusCode,
        message: err.message,
        errorStack: config.env === 'development' ? err.stack : ''
    })
}