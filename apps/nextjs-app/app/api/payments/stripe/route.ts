import { stripe } from "@repo/payments/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { HandleCheckoutSessionCompleted } from "../../../_actions/payments/stripe";


export async function POST(request: Request) {
    const body = await request.text();
    const signature = headers().get("stripe-signature") as string;

    try{
        const event = stripe.webhooks.constructEvent(body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET as string,
        )

        switch (event.type) {
            case "checkout.session.completed":
                HandleCheckoutSessionCompleted(event.data.object);
                break;
            default:
                break;
        return new NextResponse(null, { status: 200 });
    }
    }catch(e){
        console.error("stripe webhook error",e);
        return new NextResponse("webhook error", { status: 400 });
    }
}