import connectToTheDatabase from "@/app/lib/route";
import StudentModel from "@/app/model/studentModel";
import chalk from "chalk";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    connectToTheDatabase();
    try {
        const students = await StudentModel.find()
    
   return NextResponse.json({ students }, { status: 200 });
    
   } catch (error) {
    return NextResponse.json({error , status : 500});
   }
}
interface Params {
    id: string;
}
export async function getByID(req : NextRequest,  { params }: { params: Params }) {
    connectToTheDatabase()

    try {
        const {fullName , age ,grade} = await req.json();
    const getStudent = await StudentModel.findById(params.id,{
        fullName,
        age,
        grade
    })
    if(!getStudent){
        return NextResponse.json({ message : "Student not found", })
    }
    
    return NextResponse.json(getStudent, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
export async function POST(req : NextRequest){
  try {
   connectToTheDatabase()
    const {fullName , age, grade } = await req.json();  
   
    const newStudent =  new StudentModel({
      fullName: fullName,
      age: age,
      grade: grade,
    });
   

   await newStudent.save();
   return NextResponse.json(newStudent, { status: 201 })

} catch (error) {
    return NextResponse.json(error , {status : 500});
  }
}

