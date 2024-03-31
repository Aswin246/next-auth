import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { nextauth: string[] } }
) {
  console.log(params.nextauth[0]);
  return NextResponse.json({
    msg: "From auth endpoint",
  });
}
