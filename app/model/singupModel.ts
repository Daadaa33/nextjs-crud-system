import { Model, model } from "mongoose";
import { Schema, models } from "mongoose";

interface SingupDocument extends Document {
    name: string;
    email: string;
    password: string;
}

const SingupSchema = new Schema(
  {
    name: {
      type: String,
    },
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

const SingupModel = models.Singup || model("Singup", SingupSchema);

export default SingupModel as Model<SingupDocument>;

