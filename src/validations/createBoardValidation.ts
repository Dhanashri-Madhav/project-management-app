import Joi, {ObjectSchema } from "joi";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";


  

export const ValidateBoardJoi = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
           

            return res.status(422).json({msg: error });
        }
    };
};

export const creatBoardSchema = {
    data: Joi.object({
        name: Joi.string()
            .required(),
        privacy: Joi.string()
       
    })
};