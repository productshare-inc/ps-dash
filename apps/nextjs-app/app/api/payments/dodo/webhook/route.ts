import crypto from 'crypto';
import { NextResponse } from "next/server";
import { HandleCheckoutSessionCompleted } from "../../../../_actions/payments/dodo";


export async function POST(request: Request) {
    const webhookId = request.headers.get('webhook-id');
    const webhookTimestamp = request.headers.get('webhook-timestamp');
    const webhookSignature = request.headers.get('webhook-signature');
    const rawBody = await request.text();
    const secret = process.env.DODO_WEBHOOK_SECRET;

    const verificationString = `${webhookId}.${webhookTimestamp}.${rawBody}`;

    // Step 2: Compute the HMAC SHA256 signature
    const computedSignature = crypto
        .createHmac('sha256', secret as string)
        .update(verificationString)
        .digest('hex');

    if (computedSignature !== webhookSignature) {
        console.error('Invalid webhook signature');
        return new NextResponse('Invalid signature', { status: 400 });
    }

    const event = JSON.parse(rawBody);

    HandleCheckoutSessionCompleted(event);

    return new NextResponse(null, { status: 200 });
    

}