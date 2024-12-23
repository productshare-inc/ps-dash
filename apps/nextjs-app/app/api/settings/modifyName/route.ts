import { modifyName } from "@repo/prisma-db/repo/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { id, name } = await request.json();
    const user = await modifyName(id, name);
    return NextResponse.json({ user });

}