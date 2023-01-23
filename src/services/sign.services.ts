import * as jwt from "jsonwebtoken";

export const signToken = (user: any) => {
  const payload = {
    user: {
      _id: user._id,
    },
  };
  return jwt.sign(payload, `${process.env.jwtSecret}`, {
    expiresIn: `${process.env.TOKEN_EXPIRE_TIME}`,
  });
};
