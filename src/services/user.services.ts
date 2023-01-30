
import { ClientError } from "../lib/error"
import { signToken } from "./sign.services";
import { checkIfUserExists, addUser, checkUserCreds } from "../db/user.db"
import { string } from "joi";

export const addUserService = async(name: string, email: string, password: string, phoneNo: number, isAdmin: boolean)=>{
    const user = await checkIfUserExists(email);
  if (user) {
    throw new ClientError("User already exists");
    
  } else {
    const newUser = await addUser(name, email, password,  phoneNo, isAdmin);
    
    const token = await signToken(newUser);
    return { status: 201, data: { token: token } };
  }

}


export const userLoginService = async(email: string, password: string)=>{

  const user = await checkIfUserExists(email);
  if(!user){
    throw new ClientError("invalid credentials ")
  }else{
    const isMatch = await checkUserCreds(user, password)
    if(!isMatch){
      throw new ClientError("invalid credentials ")
    }
    const token = await signToken(user); 
    return {status: 201, data: {token: token}}
    
  }
}


//return jsonwebtoken
// const payload={
// teacherExist:{
// id:teacherExist._id
// }
// }
// jwt.sign(payload,jwtSecret,
//   {expiresIn:360000},(err,token)=>{
//       if(err)throw err;
//       res.status(200).json({msg:"logeed in successfully", token});
//   });

