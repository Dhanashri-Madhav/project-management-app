import * as jwt from "jsonwebtoken";
import {jwtSecret,TokenExpirtTime } from "../config/index"

export const signToken = (user: any) => {
  const payload = {
    user: {
      _id: user._id,
    },
  };
  return jwt.sign(payload, jwtSecret , {
    expiresIn: TokenExpirtTime,
  });
};
