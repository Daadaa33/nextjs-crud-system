import { NextRequest , NextResponse } from "next/server";
import connectToTheDatabase from "../lib/route";
import mongoose from "mongoose";

export async function  GET() {
    connectToTheDatabase();
    const post = await .find()

    return NextResponse.json(post, { status: 200 })   
}


export async function POST() {
    return NextResponse.json({
        message: "Hello World"
    })
    
}