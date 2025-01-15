import { AppNode } from "@repo/ts-types/scrape-flow/node";
import { WorkflowExecutionPlan, WorkflowExecutionPlanPhase } from "@repo/ts-types/scrape-flow/workflow";
import { Edge, getIncomers } from "@xyflow/react";
import { TaskRegistry } from "./registry";

type FlowToExecutionPlanType = {
    executionPlan?: WorkflowExecutionPlan;
}

export function FlowToExecutionPlan(nodes: AppNode[], edges: Edge[]):FlowToExecutionPlanType{
    const entryPoint = nodes.find(node=> TaskRegistry[node.data.type].isEntryPoint)
    if(!entryPoint){
        throw new Error("No entry point found");
    }
    const planned = new Set<string>();
    const executionPlan: WorkflowExecutionPlan = [
        {
            phase: 1,
            nodes: [entryPoint]
        }
    ];
    planned.add(entryPoint.id);
    for (let phase =2 ; phase <=nodes.length && planned.size < nodes.length; phase++){
        const nextPhase: WorkflowExecutionPlanPhase = {phase, nodes:[]}
        for (const currentNode of nodes){
            if(planned.has(currentNode.id))continue;
            const invalidInputs = getInvalidInputs(currentNode, edges, planned);
            if(invalidInputs.length >0){
                const incomers = getIncomers(currentNode,nodes,edges);
                if(incomers.every(incomer => planned.has(incomer.id))){
                    // If all incomers are planned, and there are still invalid inputs
                    // then this node is failing because of invalid inputs
                    console.log(`Node ${currentNode.id} is failing because of invalid inputs`);
                    throw new Error(`Node ${currentNode.id} is failing because of invalid inputs`);
                }
                else{
                    continue;
                }
        
            }
            nextPhase.nodes.push(currentNode);
            
        }
        for (const node of nextPhase.nodes){
            planned.add(node.id);
        }
        executionPlan.push(nextPhase);
    }

    return {executionPlan};
}

function getInvalidInputs(node: AppNode, edges: Edge[], planned: Set<string>){
    const invalidInputs = [];
    const inputs = TaskRegistry[node.data.type].inputs;
    for (const input of inputs){
        const inputValue = node.data.inputs[input.name] as string;
        const inputValueProvided = inputValue?.length > 0;
        if (inputValueProvided) continue;
        const incomingEdges = edges.filter(edge => edge.target === node.id);
        const inputLinkedToOutput = incomingEdges.find(edge=>edge.targetHandle === input.name);

        const requiredInputProvidedByVisitedOutput = input.required && inputLinkedToOutput && planned.has(inputLinkedToOutput.source);

        if (requiredInputProvidedByVisitedOutput) {
            // If the input is required and it is provided by a visited output
            continue;
        }else if(!input.required){
            if(!inputLinkedToOutput)continue;
            if(inputLinkedToOutput && planned.has(inputLinkedToOutput.source)){
                continue;
            }
        }
        invalidInputs.push(input.name);
    }
    return invalidInputs;
}