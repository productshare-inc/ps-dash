import { TaskParamType, TaskType } from "@repo/ts-types/scrape-flow/node";
import { LucideProps, CodeIcon, GlobeIcon, TextIcon } from "lucide-react";
import { AppNode } from "@repo/ts-types/scrape-flow/node";
import { WorkflowTask } from "@repo/ts-types/scrape-flow/workflow";

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
    ],
    outputs: [
        {
            name: "Web page",
            type: TaskParamType.BROWSER_INSTANCE,
        }
    ],
    credits: 5
} satisfies WorkflowTask;

export const PageToHtmlTask = {
    type: TaskType.PAGE_TO_HTML,
    label: "Get Html from Page",
    icon: (props: LucideProps) => (
        <CodeIcon className="stroke-rose-400" {...props} />
    ),
    isEntryPoint: false,
    inputs: [
        {
            name: "Web page",
            type: TaskParamType.BROWSER_INSTANCE,
            required: true,
            hideHandle: false
        }
    ],
    outputs: [
        {
            name: "Html",
            type: TaskParamType.STRING,
        },
        {
            name: "Web Page",
            type: TaskParamType.BROWSER_INSTANCE,
        }
    ],
    credits: 2
} satisfies WorkflowTask;

export const ExtractTextFromElementTask = {
    type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
    label: "Extract text from element",
    icon: (props: LucideProps) => (
        <TextIcon className="stroke-rose-400" {...props} />
    ),
    isEntryPoint: false,
    inputs: [
        {
            name: "Html",
            type: TaskParamType.STRING,
            required: true,
            variant: "textarea"
        },
        {
            name: "Selector",
            type: TaskParamType.STRING,
            required: true,
        }
    ],
    outputs: [
        {
            name: "Extracted Text",
            type: TaskParamType.STRING,
        }
    ],
    credits: 2
} satisfies WorkflowTask;


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
