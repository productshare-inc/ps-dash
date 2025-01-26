"use server"

import { auth } from "@repo/next-auth/auth";
import db from "@repo/prisma-db/client";
import { LogCollector } from "@repo/ts-types/scrape-flow/log";
import { getCreditsPack, PackId } from "../(home)/scrape-flow/_lib/helper/billing";
import {stripe} from "@repo/payments/stripe"
import { getAppUrl } from "../(home)/scrape-flow/_lib/helper/appUrl";
import { redirect } from "next/navigation";


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

export async function PurchaseCredits(packId: PackId){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }
    
    await db.user.findUnique({
        where: {
            id: session.user.id
        }
    })
    
    const selectedPack = getCreditsPack(packId);

    if(!selectedPack){
        throw new Error("Invalid pack selected");
    }

    // const productId = selectedPack?.productId;

    await stripe.checkout.sessions.create({
        mode:"payment",
        invoice_creation: {
            enabled: true,
        },
        success_url: getAppUrl("/scrape-flow/billing"),
        cancel_url: getAppUrl("/scrape-flow/billing"),
        metadata: {
            userId: session.user.id,
            packId
        },
        line_items: [
            {
                price: selectedPack?.productId,
                quantity: 1
            }
        ]
    })

    if(!session.url){
        throw new Error("Stripe session creation failed");
    }

    redirect(session.url)
}