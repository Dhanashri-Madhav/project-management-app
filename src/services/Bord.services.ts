import { Request, Response, NextFunction, RequestHandler } from "express";
import { ClientError , NoDataFoundError} from "../lib/error";
import { checkIfBoardExists } from "../db/board.db";
import {addNewBoard, checkBoardLists, boardDelete} from "../db/board.db"


export const addBoardService = async(name: string, privacy: string) =>{

    const board = await checkIfBoardExists(name);
    if (board) {
      throw new ClientError("Board already exists"); 
    } 
    else {
      const newBoard = await addNewBoard(name, privacy);
      return { status: 201, data: {newBoard} };
    }

}

export const BoardDetails = async(name: string) =>{
  const board = await checkIfBoardExists(name)
  
  if (board) {
    return { status: 201, data: {board} }; 
  } 
  else {
    throw new NoDataFoundError("No Board found");
  }
}

export const BoardsList = async()=>{
  const board = await checkBoardLists()
  
  if (board) {
    return { status: 201, data: {board} }; 
  } 
  else {
    throw new NoDataFoundError("No Boards");
  }
}

export const removeBoard = async(name: string) =>{
  const board = await checkIfBoardExists(name)
  if(!board){
    throw new NoDataFoundError("No Board found");
  }else{
    const deleteBoard = await boardDelete(name)
    return { status: 201, data: {deleteBoard} }; 
  }

}