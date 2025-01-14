"use server"

import { auth } from "@repo/next-auth/auth"
import db from "@repo/prisma-db/client"
import { WorkflowStatus } from "@repo/ts-types/scrape-flow/v1";
import { createWorkflowSchema, createWorkflowSchemaType } from "@repo/zod/scrape-flow/workflow";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GetWorflowsForUser(){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }
    return db.workflow.findMany({
        where: {
            userId: session.user.id
        },
        orderBy: {
            createdAt: "asc"
        }
    });
}

export async function CreateWorkflow(form: createWorkflowSchemaType){
    const {success,data} = createWorkflowSchema.safeParse(form);
    if(!success){
        throw new Error("Invalid form data");
    }
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }
    const result = await db.workflow.create({
        data:{
            userId: session.user.id,
            status: WorkflowStatus.DRAFT,
            definition: "TODO",
            ...data
        }
    })
    if(!result){
        throw new Error("Failed to create workflow");
    }
    redirect(`/home/scrape-flow/workflow/editor/${result.id}`);
}

export async function DeleteWorkflow(id:string) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }
    const result = await db.workflow.delete({
        where: {
            id,
            userId: session.user.id
        }
    })
    revalidatePath("/home/scrape-flow/workflows");
}