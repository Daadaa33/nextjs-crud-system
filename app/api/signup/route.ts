import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'; 
import prisma from "../../../prisma/client"

export async function  GET() {
    try{
        const posts = await prisma?.users.findMany()
        
        return NextResponse.json(posts, { status: 200 })   
    }catch(error){
        return NextResponse.json(error, { status: 500 })
    }
}

export async function POST(req :NextRequest) {
    try {
        const {email, name, password} = await req.json();
        
        const UserExist = await prisma?.users.findUnique({
                where: {
                    email : email,
                }
            })
        
        if(UserExist){
            return NextResponse.json({message: "Email already exist"}, { status: 400 })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma?.users.create({
            data: {

                name : name,
                email : email,
                password : hashedPassword
            }
        })

        return NextResponse.json(newUser, { status: 201 })
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}


