import { model, Schema, Document, Model } from 'mongoose';
// import {Board} from "../utils/Types"

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },  
  privacy: {
    type: String,
    required: true,
    default: "public"
  },
  lists:[{ 
      type: Schema.Types.ObjectId, 
      ref: "List" }],
  Tasks: [
    { type: Schema.Types.ObjectId,
      ref: "Task" }]

});

// export  default  model<Board & Document>('Board', userSchema);







//  privacy: string;
//  name: string;
//  lists: number[];
//  users: number[]
// }