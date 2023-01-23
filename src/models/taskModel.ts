import { model, Schema, Document, Model } from 'mongoose';
// import {Task} from "../utils/Types"




const taskSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },  
  desciption: {
    type: String,
    required: true
   
  },
  status: {
    type: String,
    required: true
   
  },
  users:[{ 
      type: Schema.Types.ObjectId, 
      ref: "User" }]
 
});

// export const userModel = model<Task & Document>('Task', taskSchema);
