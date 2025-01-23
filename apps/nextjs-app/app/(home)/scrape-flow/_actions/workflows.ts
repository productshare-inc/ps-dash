"use server"

import { auth } from "@repo/next-auth/auth"
import db from "@repo/prisma-db/client"
import { AppNode, TaskType } from "@repo/ts-types/scrape-flow/node";
import { ExecutionPhaseStatus, WorkflowExecutionPlan, WorkflowExecutionStatus, WorkflowExecutionTrigger, WorkflowStatus } from "@repo/ts-types/scrape-flow/workflow";
import { createWorkflowSchema, createWorkflowSchemaType } from "@repo/zod/scrape-flow/workflow";
import { Edge } from "@xyflow/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateFlowNode } from "../_lib/workflow/tasks";
import { FlowToExecutionPlan } from "../_lib/workflow/executionPlan";
import { TaskRegistry } from "../_lib/workflow/registry";
import { executeWorkflow } from "../_lib/workflow/executeWorkflow";

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
    redirect(`/scrape-flow/workflow/editor/${result.id}`);
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
    revalidatePath("/scrape-flow/workflows");
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
    revalidatePath("/scrape-flow/workflows")
}

export async function RunWorkflow(form: {workflowId:string, flowDefinition?:string}){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }
    const {workflowId,flowDefinition} = form;
    if (!workflowId){
        throw new Error("Invalid workflow id");
    }
    const workflow = await db.workflow.findUnique({
        where: {
            id: workflowId,
            userId: session.user.id
        }
    })

    if(!workflow){
        throw new Error("Workflow not found");
    }

    if(!flowDefinition){
        throw new Error("Flow definition not provided");
    }

    const flow = JSON.parse(flowDefinition);

    const result = FlowToExecutionPlan(flow.nodes, flow.edges);

    if(result.error){
        throw new Error("Invalid flow definition");
    }

    if(!result.executionPlan){
        throw new Error("Failed to generate execution plan");
    }

    const executionPlan: WorkflowExecutionPlan = result.executionPlan;
    
    const execution = await db.workflowExecution.create({
        data:{
            workflowId,
            userId: session.user.id,
            status: WorkflowExecutionStatus.PENDING,
            startedAt: new Date(),
            trigger: WorkflowExecutionTrigger.MANUAL,
            definition: flowDefinition,
            phases: {
                create: executionPlan.flatMap(phase => {
                    return phase.nodes.flatMap(node=>{
                        return {
                            userId: session.user.id,
                            status: ExecutionPhaseStatus.CREATED,
                            number: phase.phase,
                            node: JSON.stringify(node),
                            name: TaskRegistry[node.data.type].label
                        }
                    })
                })
            }
        },
        select:{
            id:true,
            phases: true
        }
    });
    if (!execution){
        throw new Error("Failed to create execution");
    }
    executeWorkflow(execution.id); //run this on background
    redirect(`/scrape-flow/workflow/runs/${workflowId}/${execution.id}`);
}

export async function GetWorkflowExecutionWithPhases(executionId: string){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }
    const execution = await db.workflowExecution.findUnique({
        where: {
            id: executionId,
            userId: session.user.id
        },
        include: {
            phases: {
                orderBy: {
                    number: 'asc',
                }
            }
        }
    })
    return execution;
}

export async function GetWorkflowPhaseDetails(phaseId: string){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }
    const phase = await db.executionPhase.findUnique({
        where: {
            id: phaseId,
            userId: session.user.id
        },
        include:{
            logs:{
                orderBy:{
                    timestamp: 'asc'
                }
            }
        }
    })
    return phase;
}

export async function GetWorkflowExecutions(workflowId: string){
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }
    const executions = await db.workflowExecution.findMany({
        where: {
            workflowId,
            userId: session.user.id
        },
        orderBy:{
            createdAt: 'desc'
        }
    })
    return executions;
}