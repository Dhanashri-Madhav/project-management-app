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


export const checkBoardLists = async()=>{
  try{
    const BoardList= await boardModel.find()
    console.log("1",BoardList)
    return BoardList
    
  }catch (err) {
    throw new Error("error occoured");
  }

}

export const boardDelete = async(name: string)=>{
  try{
    const deleteVoard = await boardModel.findOneAndDelete({name: name})
    return({msg: "data deleted successgully"})

  }catch(err){
    throw new Error("error occoured");
  }

}
 
