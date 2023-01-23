import { Router } from "express";
import { asyncwrap } from "../lib/utility";
import { postAddUser, loginUser } from "../Controllers/user.controller";
import { Schemas, ValidateJoi } from "../validations/signupValidation";
import { loginSchemas, ValidateloginJoi } from "../validations/loginvalidation"




const router = Router()



router.post("/signup",ValidateJoi(Schemas.data), asyncwrap(postAddUser))
router.post("/login", ValidateJoi(loginSchemas.data), asyncwrap(loginUser))

export default router;