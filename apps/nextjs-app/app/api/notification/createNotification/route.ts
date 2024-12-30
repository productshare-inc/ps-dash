import { auth } from "@repo/next-auth/auth";
import { createNotification } from "@repo/prisma-db/repo/notification";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    let {userId, message, type,href} = await request.json();
    if(!userId){
        const session = await auth();
        userId = session.user.id;
    }
    
    const notification = await createNotification({userId,message,type,href})
    return NextResponse.json({ notification });
}