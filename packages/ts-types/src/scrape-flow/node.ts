import {Node} from "@xyflow/react"

export interface AppNodeData {
    type: TaskType;
    inputs: Record<string,string>;
    [key: string]: any;
}

export interface AppNode extends Node {
    data: AppNodeData;
}

export enum TaskType {
    LAUNCH_BROWSER = 'LAUNCH_BROWSER',
}

export enum TaskParamType {
    STRING = 'STRING',
    NUMBER = 'NUMBER',
    BOOLEAN = 'BOOLEAN',
    OBJECT = 'OBJECT',
    ARRAY = 'ARRAY',
}

export interface TaskParam {
    name: string;
    type: TaskParamType;
    helperText?: string;
    required: boolean;
    hideHandle?: boolean;
    [key:string] : any;
}