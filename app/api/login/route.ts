import { NextResponse } from "next/server";
import * as bcrypt from "bcrypt";

import { JWT_SECRET } from "@/lib/config";
import * as jwt from "jsonwebtoken";


export async function POST(req : NextResponse, res : NextResponse){
    try {
        const {email, password} = await req.json();
        const UserExist = await prisma?.users.findUnique({
          where: {
            email: email.toLowerCase(),
          },
        });

        if(!UserExist){
            return NextResponse.json({message: "Email is not found"}, { status: 404 })
        }

        const isPasswordCorrect = await bcrypt.compare(password, UserExist.password);
        if(!isPasswordCorrect){
            return NextResponse.json({message: "Password incorrect"}, { status: 400 })
        }

        
        // token generate 
        const expiresIn = 7 * 24 * 60 * 60; // 7 days
        
        const token = jwt.sign({ _id: UserExist.id, email }, JWT_SECRET as string, { expiresIn });

        // Cookies.set('token', token, {
        //     httpOnly: true,
        //     secure : false,
        //     maxAge: expiresIn * 1000
        // });


        return NextResponse.json({UserExist , token}, { status: 200 })
        
    } catch (error) {
        return NextResponse.json(error, {status: 500 })
    }
}