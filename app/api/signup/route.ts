import connectToTheDatabase from "@/app/lib/route";
import SingupModel from "@/app/model/singupModel";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'; 

import * as jwt from "jsonwebtoken";

import { JWT_SECRET } from "@/lib/config";

export async function  GET() {
    try{
        const posts = await SingupModel.find()
        
        return NextResponse.json(posts, { status: 200 })   
    }catch(error){
        return NextResponse.json(error, { status: 500 })
    }
}



export async function POST(req :NextRequest) {
    try {
        connectToTheDatabase();
        const {email, name, password} = await req.json();
        
        const UserExist = await SingupModel.findOne({ email: email,})
        
        if(UserExist){
            return NextResponse.json({message: "Email already exist"}, { status: 400 })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new SingupModel({
            name : name,
            email : email,
            password : hashedPassword
        })
        await newUser.save();
        return NextResponse.json(newUser, { status: 201 })
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}


