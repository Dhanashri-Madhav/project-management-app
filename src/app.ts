require('dotenv').config()
import bodyParser from "body-parser"
import express from "express"
import {dbConnect} from "./config/dbConnect"
import { PORT } from "./config"
import { Request, Response, NextFunction } from "express";
import { sendError } from "./middleware/error.handler"


const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));

dbConnect()

import userRoutes from "./routes/user.routes"
import boardRoutes from "./routes/Board.routes"
app.use("/user", userRoutes);
app.use("/boards", boardRoutes)

app.listen(PORT, () => {
  console.log(`Listening On PORT ${PORT}`);
});


app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("not found");
});

//common error handler
app.use(sendError);

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("Error handler middleware");
  console.log("error is", err);
  res.status(500).send("server error");
});



