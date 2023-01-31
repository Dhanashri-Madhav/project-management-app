import { RequestHandler } from "express";
import {addBoardService, BoardDetails, BoardsList, removeBoard} from "../services/Bord.services"

export const postAddBoard : RequestHandler = async(req,res,next)=>{
    const {name, privacy} = req.body
    const { status, data } = await addBoardService(name, privacy);

    return res.status(status).json({ data });


}

export const getBoardDetails: RequestHandler = async(req,res,next)=>{
  const {name} = req.body
  const {status, data } = await BoardDetails(name)
  return res.status(status).json({ data });
}

export const getBoardsList: RequestHandler = async(req,res,next)=>{
    const {status, data } = await BoardsList()
    return res.status(status).json({ data });
  }

export const deleteBoard: RequestHandler = async(req,res,next)=>{
    const {name} = req.body
    const {status, data } = await removeBoard(name)
    return res.status(status).json({ data })
}

