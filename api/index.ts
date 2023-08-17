import express, { Request, Response } from "express";
// const express = require("express");
import startDBConnection from "./db";
// const startDBConnection = require("./db.js");
// import config from "./config/config";

import { UserRouter } from "./routes";
// const UserRouter = require("./routes/userRoutes.js");
import cors from "cors"

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors(corsOptions))

app.use(express.json());

app.use("/users", UserRouter);

startDBConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
