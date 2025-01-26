import { headers } from "next/headers";


export async function POST(request: Request) {
    const body = await request.text();
    console.log(body);
    const signature = headers().get("webhook-signature") as string;
    console.log(signature);

}