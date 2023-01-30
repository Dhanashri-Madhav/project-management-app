import {Request, Response, NextFunction, RequestHandler } from "express"
import * as jwt from "jsonwebtoken";
import {userModel} from "../models/userModel"
import {jwtSecret} from "../config/index"


export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
   
    const token = req.header("x-auth-token");
  

    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
      const decoded = jwt.verify(token, jwtSecret);
      if (typeof decoded === "string") {
        return res.status(400).json({ msg: "Token is not valid" });
      }
      req.body.user = decoded.user;
     
      userModel.findById(req.body.user._id).then((user) => {
       
      
        if (!user || (user.isAdmin != true)) {
          res.status(401).json({ msg: "Token is not valid" });
        }
         else {
          next();
        }
      });
    } catch (err) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  };
  
  