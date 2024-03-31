import { NextRequest, NextResponse } from "next/server";
import client from "@/app/db/index";

export async function GET() {
  const user = await client.user.findFirst();
  return NextResponse.json({
    username: user?.username,
    password: user?.password,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const createdUser = await client.user.create({
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
