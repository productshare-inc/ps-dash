"use server"

import { auth } from "@repo/next-auth/auth"
import db from "@repo/prisma-db/client"
import { AppNode, TaskType } from "@repo/ts-types/scrape-flow/node";
import { WorkflowStatus } from "@repo/ts-types/scrape-flow/workflow";
import { createWorkflowSchema, createWorkflowSchemaType } from "@repo/zod/scrape-flow/workflow";
import { Edge } from "@xyflow/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateFlowNode } from "../_lib/workflow/tasks";

const initialFlow: { nodes: AppNode[]; edges: Edge[]} ={
    nodes: [],
    edges: []
}

initialFlow.nodes.push(CreateFlowNode(TaskType.LAUNCH_BROWSER))

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
            definition: JSON.stringify(initialFlow),
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
    await db.workflow.delete({
        where: {
            id,
            userId: session.user.id
        }
    })
    revalidatePath("/home/scrape-flow/workflows");
}

export async function UpdateWorkflow({id,definition}:{id:string,definition:string}){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }
    const workflow = await db.workflow.findUnique({
        where: {
            id,
            userId: session.user.id
        }
    })
    if(!workflow){
        throw new Error("Workflow not found");
    }
    if (workflow.status !== WorkflowStatus.DRAFT) {
        throw new Error("Workflow is not in draft state");
    }
    await db.workflow.update({
        data: {
            definition
        },
        where: {
            id,
            userId: session.user.id
        }
    })
    revalidatePath("/home/scrape-flow/workflows")
}