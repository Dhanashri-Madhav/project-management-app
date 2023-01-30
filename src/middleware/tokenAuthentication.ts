import {Request, Response, NextFunction, RequestHandler } from "express"
import * as jwt from "jsonwebtoken";
import {userModel} from "../models/userModel"
import { jwtSecret } from "../config";

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
   console.log("authcheck")
    const token = req.header("x-auth-token");
    
    
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
  
    
    try {
      const decoded = jwt.verify(token, jwtSecret);
      if (typeof decoded === "string") {
        return res.status(400).json({ msg: "Token is not valid" });
      }
      userModel.findById(decoded.user._id).then((user) => {
        if (!user) {
          res.status(401).json({ msg: "Token is not valid" });
        } else {
          req.body.user = decoded.user;
          next();
        }
      });
    } catch (err) {
      res.status(401).json({ msg: "Token invalid" });
    }
  };
  