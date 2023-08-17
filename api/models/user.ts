// import mongoose from "mongoose";
// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   name: String,
//   lastName: String,
//   email: String,
//   phone: Number,
// });

// const User = mongoose.model("User", UserSchema);

// module.exports = User;

// export default User;

import { getModelForClass, prop } from "@typegoose/typegoose";

class UserClass {
    @prop({ required: true })
    public name!: string;

    @prop({ required: true})
    public lastName!: string;

    @prop({ required: true })
    public email!: string;

    @prop({ required: true })
    public phone!: number;

    @prop({ required: true })
    public date!: string;

    @prop()
    public notes!: string;
}

export default UserClass;

export const User = getModelForClass(UserClass);
