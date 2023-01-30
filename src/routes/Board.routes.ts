import { Router } from "express";
import { asyncwrap } from "../lib/utility";
import {creatBoardSchema, ValidateBoardJoi} from "../validations/createBoardValidation"
import {authCheck} from "../middleware/tokenAuthentication"
import {isAdmin} from "../middleware/isAdmin"
import {postAddBoard} from "../Controllers/board.controller"

const router = Router()
console.log("router")

router.post("/createBoard",ValidateBoardJoi(creatBoardSchema.data),authCheck,isAdmin, asyncwrap(postAddBoard))  




export default router;