import {Request, Response, NextFunction, RequestHandler} from "express"
import { promise } from "zod"

export const asyncwrap = (fn: Function) =>{
    return function(req: Request, res: Response, next: NextFunction){
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}