import mongoose from "mongoose";
// const mongoose = require("mongoose");
import config from "./config/config.js";
// const config = require("./config/config.js");

// const uri = `mongodb+srv://${config.userMongo}:${config.passwordMongo}@cluster0.vppdkrc.mongodb.net/${config.dbName}?retryWrites=true&w=majority`;

const uri =
  "mongodb+srv://user1:Homunculo_123@cluster0.vppdkrc.mongodb.net/Prueba1?retryWrites=true&w=majority";

async function startDBConnection() {
  await mongoose.connect(uri).then(() => {
    console.log("Conexion a la base de datos establecida");
  });
}

// module.exports = startDBConnection;
export default startDBConnection;
