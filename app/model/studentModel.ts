import {Model , Schema, model, models } from "mongoose";

interface StudentDocument extends Document {
    fullName: string;
    age: number;
    grade : string;
}

const StudentSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: Number
    },
    grade :{
        type : String,
        required : true
    }
  },
  {
    timestamps: true,
  }
);

const StudentModel = models.Student || model("Student", StudentSchema);

export default StudentModel as Model<StudentDocument>;
