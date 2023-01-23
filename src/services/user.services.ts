
import { ClientError } from "../lib/error"
import { signToken } from "./sign.services";
import { checkIfUserExists, addUser } from "../db/user.db"

export const addUserService = async(name: string, email: string, password: string, phoneNo: number)=>{
    const user = await checkIfUserExists(email);
  if (user) {
    throw new ClientError("User already exists");
    
  } else {
    const newUser = await addUser(name, email, password,  phoneNo);
    const token = await signToken(newUser);
    return { status: 201, data: { token: token } };
  }

}