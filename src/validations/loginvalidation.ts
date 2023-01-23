import Joi, {ObjectSchema } from "joi";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";


  

export const ValidateloginJoi = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            console.error(error);

            return res.status(422).json({msg: error });
        }
    };
};

export const loginSchemas = {
    data: Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
       
    
       
    })
};