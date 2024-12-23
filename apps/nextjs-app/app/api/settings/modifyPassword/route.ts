import db from "@repo/prisma-db/client"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { id, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.user.update({
        where: {id},
        data: {
            password: hashedPassword
        }
    })
    return NextResponse.json({ user });

}