import dotenv from "dotenv";
// const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "../.env" });

const config = {
  isdev: process.env.NODE_ENV === "development",
  userMongo: process.env.USER_MONGO,
  passwordMongo: process.env.PASSWORD_MONGO,
  dbName: process.env.DB_NAME,
};

export default config;
// module.exports = config;
