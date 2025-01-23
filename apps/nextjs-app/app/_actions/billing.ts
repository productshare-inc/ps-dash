"use server"

import { auth } from "@repo/next-auth/auth";
import db from "@repo/prisma-db/client";
import { LogCollector } from "@repo/ts-types/scrape-flow/log";

export async function GetAvailableCredits(){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }

    const user = await db.user.findUnique({
        where: {
            id: session.user.id
        }
    })
    if(!user){
        throw new Error("User not found");
    }
    const balance = user.creditsTotal - user.creditsUsed;
    return balance;
}

export async function decrementCredits(userId:string, amount: number, logCollector: LogCollector){
    try{
        const user = await db.user.findUnique({
            where: { id: userId },
            select: { creditsTotal: true, creditsUsed: true },
          });
        
        if (!user) {
            throw new Error("User not found");
          }
        
        const { creditsTotal, creditsUsed } = user;

        // Check if sufficient balance exists
        if (creditsTotal - creditsUsed <= amount) {
            logCollector.error("Insufficient balance");
            return false;
        }

        await db.user.update({
            where:{
                id: userId,
            },
            data:{
                creditsUsed: {
                    increment: amount
                }
            }
        })
        return true
    }catch{
        logCollector.error("Insufficient balance");
        return false
    }
}