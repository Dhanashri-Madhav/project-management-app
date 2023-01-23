import express from "express"
import mongoose from "mongoose";
import { DBSTRING, PORT } from "./index";
import {ServerError} from "../lib/error";
import { nextTick } from "process";

const app = express()

export const dbConnect = () => {mongoose
.connect(DBSTRING)
.then(() => {
  console.log("Connected to db");
})
.catch(() => {
  throw new ServerError ("Unable to connect database");
})};