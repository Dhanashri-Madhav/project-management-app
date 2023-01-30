import { Request, Response, NextFunction, RequestHandler } from "express";
import { ClientError } from "../lib/error";
import { checkIfBoardExists } from "../db/board.db";
import {addNewBoard} from "../db/board.db"


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