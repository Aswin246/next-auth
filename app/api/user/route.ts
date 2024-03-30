import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  return NextResponse.json({
    email: "123@gmail.com",
    name: "Aswin",
  });
}

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const createdUser = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });

    return NextResponse.json({
      username: createdUser.username,
      password: createdUser.password,
    });
  } catch (error) {
    console.error("Error creating user:", error);
  }
}
