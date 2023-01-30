import { model, Schema, Document, Model } from 'mongoose';
import { User } from '../interfaces/user.interface';



const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },  
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean
  },
  phoneNO:{
      type: Number,
      required: true
  },
  boards:[{ 
      type: Schema.Types.ObjectId, 
      ref: "Board" }],
  Tasks: [
    { type: Schema.Types.ObjectId,
      ref: "Task" }]

});

export const userModel = model<User & Document>('User', userSchema);


