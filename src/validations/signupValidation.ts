import Joi, {ObjectSchema } from "joi";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { User } from "../interfaces/user.interface";

  

export const ValidateJoi = (schema: ObjectSchema) => {
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

export const Schemas = {
    data: Joi.object<User>({
        name: Joi.string().required().min(3),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        phoneNO: Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required()
       
       
    })
};