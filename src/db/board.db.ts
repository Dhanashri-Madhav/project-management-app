import  boardModel  from "../models/boardModel";

export const checkIfBoardExists = async (name: String) => {
  try {
   
    const boardExist =  await boardModel.findOne({name});
    return boardExist

  } catch (err) {
    
    throw new Error("error occoured");
    
  }
};

export const addNewBoard = async(name: string, privacy: string)=>{
  try{
    const newBoard = new boardModel({
    name, privacy
    });
    return newBoard.save();
  }catch(err)
{
  throw new Error("error occoured");
}}
