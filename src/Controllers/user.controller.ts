import { addUserService, userLoginService } from "../services/user.services";
import { RequestHandler } from "express";

export const postAddUser: RequestHandler = async (req, res, next) => {
  const { name, email, password, phoneNO } = req.body;

  const { status, data } = await addUserService(name, email, password, phoneNO);

  return res.status(status).json({ data });
};

export const loginUser: RequestHandler = async(req, res, next) =>{
  const {email,password} =req.body;
  const {status, data} = await userLoginService(email,password);
  return res.status(status).json({ data });



}
