import { Model, Schema, model, models } from "mongoose";

interface PostDocument extends Document {
    name : string;
    body : any;
}

const PostSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    body: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = models.Post || model("Post", PostSchema);

export default PostModel as Model<PostDocument>;