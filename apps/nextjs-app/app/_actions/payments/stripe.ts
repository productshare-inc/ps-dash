"use server"

import {stripe} from "@repo/payments/stripe"
import { getAppUrl } from "../../(home)/scrape-flow/_lib/helper/appUrl";
import { getCreditsPack, PackId } from "../../(home)/scrape-flow/_lib/helper/billing";
import { redirect } from "next/navigation";
import { auth } from "@repo/next-auth/auth";
import db from "@repo/prisma-db/client";
import "server-only"
import Stripe from "stripe";
// import { writeFile } from "fs"

export async function HandleCheckoutSessionCompleted(event: Stripe.Checkout.Session){
    // writeFile("session_completed.json",JSON.stringify(event),(err)=>{})
    if(!event.metadata){
        throw new Error("Metadata not found in event");
    }
    const { userId, packId} = event.metadata;
    if (!userId){
        throw new Error("User not found in session");
    }
    if (!packId){
        throw new Error("Pack not found in session");
    }

    const purchasedPack = getCreditsPack(packId as PackId);
    if(!purchasedPack){
        throw new Error("Purchased Pack not found");
    }

    await db.user.update({
        where:{id: userId},
        data:{
            creditsTotal:{
                increment: purchasedPack.credits
            }
        }
    })

    await db.userPurchase.create({
        data:{
            userId,
            eventId: event.id,
            description: `${purchasedPack.name} - ${purchasedPack.credits} credits`,
            amount: event.amount_total!,
            currency: event.currency!,

        }
    })

}

export async function PurchaseCreditsWithStripe(packId: PackId){
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

    const order = await stripe.checkout.sessions.create({
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

    if(!order.url){
        throw new Error("Stripe session creation failed");
    }

    redirect(order.url)
}


export async function DownloadInvoice(id:string){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }

    const purchase = await db.userPurchase.findFirst({
        where:{
            id,
            userId: session.user.id
        }
    })
    if(!purchase){
        throw new Error("Purchase not found");
    }

    const stripeSession = await stripe.checkout.sessions.retrieve(purchase.eventId)

    if(!stripeSession){
        throw new Error("Stripe session not found");
    }

    const invoice = await stripe.invoices.retrieve(stripeSession.invoice as string);

    return invoice.hosted_invoice_url;

}