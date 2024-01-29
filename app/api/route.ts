import { NextRequest, NextResponse } from "next/server";
import prisma from "../../prisma/client";


export async function GET(request: NextRequest) {
  try {
    const users = await prisma.users.findMany();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

