import connectToTheDatabase from "@/app/lib/route";
import StudentModel from "@/app/model/studentModel";
import { NextRequest, NextResponse } from "next/server";

interface Params {
    id: string;
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
    connectToTheDatabase()

    try {
        const {fullName , age , grade} = await req.json();
        
        const updateStudent = await StudentModel.findByIdAndUpdate(params.id ,{
          fullName: fullName,
          age: age,
          grade: grade,
        });

        if(!updateStudent){
            return NextResponse.json({message : "Student not found"}, {status : 404})
        }
        return NextResponse.json(updateStudent, { status: 201 })
    } catch (error) {
        return NextResponse.json(error, {status : 500});
    }
}


export async function DELETE(req: NextRequest, { params }: { params: Params }) {

    connectToTheDatabase()

    try {

        const deleteStudent = await StudentModel.findByIdAndDelete(params.id);

        if(!deleteStudent){
            return NextResponse.json({message : "Student not found"}, {status : 404})
        }
        return NextResponse.json({message : "student has been deleted"}, {status : 200})

    } catch (error) {
        return NextResponse.json(error, {status : 500});
    }
}
