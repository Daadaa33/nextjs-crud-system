import chalk from "chalk";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client"

export async function GET() {
    try {
        const students = await prisma.students.findMany()
    
   return NextResponse.json( students , { status: 200 });
    
   } catch (error) {
    return NextResponse.json({error , status : 500});
   }
}

export async function POST(req : NextRequest){
  try {
    const {name , age, grade } = await req.json();  
    const newStudent =  await prisma?.students.create({
        data : {
            name: name,
            age: age,
            grade: grade,
        }
    });
   return NextResponse.json(newStudent, { status: 201 })

} catch (error) {
    return NextResponse.json(error , {status : 500});
  }
}

