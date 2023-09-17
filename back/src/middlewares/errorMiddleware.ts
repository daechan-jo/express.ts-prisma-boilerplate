import logger from "../config/logger";
import { Request, Response, NextFunction } from "express";
import HttpException from "../utils/errorUtils";

function errorMiddleware(
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (error.status) res.status(error.status).send(error.message);
    else res.status(500).json(error.stack);

    const stackLines = error.stack?.split("\n") ?? [];
    const truncatedStack = stackLines.slice(0, 5).join("\n");
    const reqBodyString = JSON.stringify(req.body);
    logger.error(
        `[${req.method}] ${req.path} | ${error.status} | [REQUEST] ${reqBodyString} | ${truncatedStack}`,
    );
    next();
}

export default errorMiddleware;
