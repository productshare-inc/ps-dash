import "server-only"
import Stripe from "stripe";
// import { writeFile } from "fs"
import { getCreditsPack, PackId } from "../../_lib/helper/billing";
import db from "@repo/prisma-db/client";

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