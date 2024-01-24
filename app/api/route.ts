import { NextRequest , NextResponse } from "next/server";
import connectToTheDatabase from "../lib/route";
import PostModel from "../model/postMOdels";
import chalk from "chalk";


export async function  GET() {
    connectToTheDatabase();
    try{
        const posts = await PostModel.find()
        
        return NextResponse.json(posts, { status: 200 })   
    }catch(error){
        return NextResponse.json(error, { status: 500 })
    }
}


export async function POST(req : NextRequest) {
   connectToTheDatabase();
    try {
        const {name , body, title} = await req.json();  
              
        const newPost = new PostModel({
            name : name,
            title : title,
            boby : body
        });  
    
        await newPost.save();
        return NextResponse.json(newPost, { status: 201 })

    
    } catch (error) {
            return NextResponse.json(error, {status: 500})
   }
    
}


