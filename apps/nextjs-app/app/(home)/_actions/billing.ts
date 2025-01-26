"use server"

import { auth } from "@repo/next-auth/auth";
import { stripe } from "@repo/payments/stripe";
import db from "@repo/prisma-db/client";

export async function GetUserPurchaseHistory() {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }

    return db.userPurchase.findMany({
        where: {
            userId: session.user.id
        },
        orderBy:{
            date: "desc"
        }
    })
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