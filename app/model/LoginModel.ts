import {Model , Schema, model, models } from "mongoose";

interface LoginDocument extends Document {
    email: string;
    password: string;
}

const LoginSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
   
  },
  {
    timestamps: true,
  }
);

const LoginModel = models.User || model("Login", LoginSchema);

export default LoginModel as Model<LoginDocument>;
