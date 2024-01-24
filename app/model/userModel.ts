import { Model, model } from "mongoose";
import { Schema, models } from "mongoose";

interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required : true,
            
        },
        email: {
            type: String,
            unique: true,
            required : true,
          },
          password: {
            type: String,
          },
    },
{
    timestamps: true
}
);

const User = models.User || model("User", UserSchema);

export default User as Model<UserDocument>;



