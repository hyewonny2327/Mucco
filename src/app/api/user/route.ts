import { authOptions } from "@/app/utils/authOption";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}

export async function PUT(req: Request) {
  // 데이터 수정을 처리한다
  const formData = await req.json();
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json(
      {
        error: "Unauthorized user",
      },
      {
        status: 401,
      }
    );
  }

  const result = await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: { ...formData },
  });

  return NextResponse.json(result, {
    status: 200,
  });
}
