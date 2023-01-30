import { model, Schema, Document, Model } from 'mongoose';
import {Board} from "../interfaces/boards.inetrfaces"

const boardSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },  
  privacy: {
    type: String, 
    default: "public"
  },
  lists:[{ 
      type: Schema.Types.ObjectId, 
      ref: "List" }],
  Tasks: [
    { type: Schema.Types.ObjectId,
      ref: "Task" }]

});

export  default  model<Board & Document>('Board', boardSchema);







//  privacy: string;
//  name: string;
//  lists: number[];
//  users: number[]
// }