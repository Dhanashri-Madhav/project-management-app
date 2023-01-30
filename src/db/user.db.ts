import * as bcrypt from "bcryptjs";
import { userModel } from "../models/userModel";

export const checkIfUserExists = async (email: String) => {
  try {
    
    const userExist =  await userModel.findOne({email});
    return userExist

  } catch (err) {
    
    throw new Error("error occoured");
    
  }
};

export const addUser = async (name: string, email: string, password: string,  phoneNO: number, isAdmin: boolean) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new userModel({
      email,name,phoneNO,isAdmin,
      password: hashedPassword,
      
    });
    return newUser.save();
  } catch (err) {
    throw new Error("error occoured");
  }
};


export const checkUserCreds = async(user: any, password: string) =>{
try{
  const isMatch= await bcrypt.compare(password,user.password);
  return isMatch
 
}catch (err) {
  throw new Error("error occoured");
}
  
}


 



                 