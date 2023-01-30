import { RequestHandler } from "express";
import {addBoardService} from "../services/Bord.services"

export const postAddBoard : RequestHandler = async(req,res,next)=>{
    const {name, privacy} = req.body
    const { status, data } = await addBoardService(name, privacy);

    return res.status(status).json({ data });


}