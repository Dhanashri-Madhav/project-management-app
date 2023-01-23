import { model, Schema, Document, Model } from 'mongoose';
import {List} from "../utils/Types"




const listSchema: Schema = new Schema({
    name: {
      type: String,
      required: true,
    },  
    Tasks: [
      { type: Schema.Types.ObjectId,
        ref: "Task" }]
  
  });
  
  export const userModel = model<List & Document>('List', listSchema);