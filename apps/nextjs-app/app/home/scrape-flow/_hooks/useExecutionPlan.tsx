import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { FlowToExecutionPlan } from "../_lib/workflow/executionPlan";
import { AppNode } from "@repo/ts-types/scrape-flow/node";

const useExecutionPlan = () => {
    const {toObject} = useReactFlow();
    const generateExecutionPlan = useCallback(()=>{
        const {nodes,edges} = toObject();
        const {executionPlan}  = FlowToExecutionPlan(nodes as AppNode[],edges);
        return executionPlan;
    },[toObject])
    return generateExecutionPlan
};

export default useExecutionPlan;