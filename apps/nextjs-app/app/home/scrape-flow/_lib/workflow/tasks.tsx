import { TaskParamType, TaskType } from "@repo/ts-types/scrape-flow/node";
import { LucideProps,GlobeIcon } from "lucide-react";
import { AppNode } from "@repo/ts-types/scrape-flow/node";

export const LaunchBrowserTask = {
    type: TaskType.LAUNCH_BROWSER,
    label: "Launch Browser",
    icon: (props: LucideProps) => (
        <GlobeIcon className="stroke-pink-400" {...props} />
    ),
    isEntryPoint: true,
    inputs: [
        {
            name: "Website Url",
            type: TaskParamType.STRING,
            helperText: "eg: https://www.google.com",
            required: true,
            hideHandle: true
        }
    ]
}

export const TaskRegistry = {
    LAUNCH_BROWSER: LaunchBrowserTask
}

export function CreateFlowNode(nodeType: TaskType, position?: {x: number, y: number}):AppNode {
    return {
        id: crypto.randomUUID(),
        type: 'Node',
        dragHandle: ".drag-handle",
        data: {
            type: nodeType,
            inputs: {},
        },
        position: position ?? {x: 0, y: 0}
    }
}