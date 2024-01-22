import mongoose from "mongoose";
import chalk from "chalk";
import { NextResponse } from "next/server";

let connection : typeof mongoose;

const url = process.env.MONGO_URL as string;

const connectToTheDatabase = async () => {
    try{
        if (!connection) {
          connection = await mongoose.connect(url);
        }
        console.log(chalk.green.bold("Connection success", url));
        return connection

    }catch(e){
        console.log(chalk.red.bold("connection ayaa error ka jiro"), e);
        return NextResponse.json(e, {status: 500})
    }
}


export default connectToTheDatabase;