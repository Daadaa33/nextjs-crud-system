import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client"
interface Params {
    id: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
    try {
        const student = await prisma.students.findUnique({
            where: {
                id: params.id,
            },
        });
        if(!student){
            return NextResponse.json({message : "student not found"}, {status : 404})
        }
        return NextResponse.json(student, { status: 200 })
        
    } catch (error) {
        return NextResponse.json(error, {status : 500});
    
    }
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {

    try {
        const {name , age , grade} = await req.json();
        
        const updateStudent = await prisma?.students.update({
            where : {
                id : params.id
            },
            data : {
                name : name,
                age : age,
                grade : grade
            }
        }) 

        if(!updateStudent){
            return NextResponse.json({message : "Student not found"}, {status : 404})
        }
        return NextResponse.json(updateStudent, { status: 201 })
    } catch (error) {
        return NextResponse.json(error, {status : 500});
    }
}


export async function DELETE(req: NextRequest, { params }: { params: Params }) {

    try {

        const deleteStudent = await prisma?.students.delete({
            where : {
                id : params.id
            }
        })
        if(!deleteStudent){
            return NextResponse.json({message : "Student not found"}, {status : 404})
        }
        return NextResponse.json({message : "student has been deleted"}, {status : 200})

    } catch (error) {
        return NextResponse.json(error, {status : 500});
    }
}
