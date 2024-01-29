import chalk from "chalk";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client"

export async function GET() {
    try {
        const teachers = await prisma?.teachers.findMany()
    
   return NextResponse.json({ teachers }, { status: 200 });
    
   } catch (error : any) {
    return NextResponse.json({error : error.message} ,{status : 500});
   }
}

export async function POST(req : NextRequest){
  try {
    const {name , email, price } = await req.json();  
    
    const newTeacher =  await prisma?.teachers.create({
        data : {
            name: name,
            email: email,
            price: price,
        }
    });

    return NextResponse.json(newTeacher, { status: 201 })
} catch (error) {
    return NextResponse.json(error , {status : 500});
  }
}

