import { Router } from "express";
import { asyncwrap } from "../lib/utility";
import {creatBoardSchema, ValidateBoardJoi} from "../validations/createBoardValidation"
import {authCheck} from "../middleware/tokenAuthentication"
import {isAdmin} from "../middleware/isAdmin"
import {postAddBoard, getBoardDetails, getBoardsList, deleteBoard} from "../Controllers/board.controller"


const router = Router()


router.post("/createBoard",ValidateBoardJoi(creatBoardSchema.data),authCheck,isAdmin, asyncwrap(postAddBoard))  
router.get("/boardDetails", authCheck, isAdmin, asyncwrap(getBoardDetails) )
router.get("/boardsList", authCheck, isAdmin,asyncwrap(getBoardsList))
router.delete("/deleteBoard", authCheck,isAdmin, asyncwrap(deleteBoard) )




export default router;