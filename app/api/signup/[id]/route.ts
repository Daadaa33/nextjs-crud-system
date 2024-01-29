import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../prisma/client"

interface Params {
    id: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: params.id,
            },
        });
        if(!user){
            return NextResponse.json({message : "user not found"}, {status : 404})
        }
        return NextResponse.json(user, { status: 200 })
        
    } catch (error) {
        return NextResponse.json(error, {status : 500});
    
    }
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
    try {
        const {name, email, password}  = await req.json();
        const userExists = await prisma.users.findUnique({
          where: {
            id: params.id,
          }
        });
        if(!userExists) {
            return NextResponse.json({messeage : "userID not found"}, {status: 404})
        }
        const updateUser = await prisma.users.update(
            {
                where: {
                    id: params.id,
                },
                data: {
                    name: name,
                    email: email,
                    password: password
                }
        });
        if(!updateUser){
            return NextResponse.json({message : "user info not complete"}, {status: 404})
        }
       
        return NextResponse.json(updateUser , { status: 201 })
    } catch (error : any) {
        return NextResponse.json({message : `${error.message}`}, {status : 500});        
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
    try {
         const userExists = await prisma.users.delete({
           where: { id: params.id },
         });
       
         if(!userExists) {
            return NextResponse.json({messeage : "user not found"}, {status: 404})
         }

         return NextResponse.json({message : "user has been deleted"}, {status : 200})

    } catch (error : any) {
        return NextResponse.json({message : `${error.message}`}, {status : 500});        
    }
}
