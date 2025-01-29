"use server"

import { auth } from "@repo/next-auth/auth"
import db from "@repo/prisma-db/client"
import { ConnectionType } from "@repo/ts-types/home/v1";
import { addApiKeyConnectionSchema, addApiKeyConnectionSchemaType } from "@repo/zod/scrape-flow/connection";
import { revalidatePath } from "next/cache";
import { symmetricEncrypt } from "../../lib/helper/encryption";

export async function GetConnectionsForUser(){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }

    return db.connection.findMany({
        where: {
            userId: session.user.id
        },
        orderBy:{
            name: 'asc'
        }
    })
}

export async function AddApiKeyConnection(form: addApiKeyConnectionSchemaType){
    const {success, data} = addApiKeyConnectionSchema.safeParse(form);
    if (!success) {
        throw new Error("Invalid form data");
    }

    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }

    // Encrypt the API key before storing it
    const encryptedApiKey = symmetricEncrypt(data.apiKey);
    const result = await db.connection.create({
        data:{
            name: data.name,
            type: ConnectionType.ApiKey,
            userId: session.user.id,
            details: JSON.stringify({apiKey: encryptedApiKey})
        }
    });

    if (!result) {
        throw new Error("Failed to create connection");
    }
    revalidatePath('/connections');

}

export async function DeleteConnection(name: string){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }

    await db.connection.delete({
        where:{
            userId_name:{
                userId: session.user.id,
                name
            }
        }
    })

    revalidatePath('/connections');
}