import { Router } from "express";
import { asyncwrap } from "../lib/utility";
import { postAddUser } from "../Controllers/user.controller";
 import { Schemas, ValidateJoi } from "../validations/userValidation";


const router = Router()



router.post("/signup",ValidateJoi(Schemas.data), asyncwrap(postAddUser))


export default router;