import {LucideIcon, LucideProps} from "lucide-react";
import React from "react";
import { AppNode, TaskParam, TaskType } from "./node";

export interface CustomDialogHeaderProps {
    title?: string;
    subTitle?: string;
    icon?: LucideIcon;

    titleClassName?: string;
    subTitleClassName?: string;
    iconClassName?: string;
}

export enum WorkflowStatus{
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
}

export interface TooltipWrapperProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: 'top' | 'bottom' | 'left' | 'right';
}

export interface DeleteWorkflowDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    workflowName: string;
    workflowId: string;
}

export type WorkflowTask = {
    label: string;
    icon: React.FC<LucideProps>;
    type: TaskType;
    isEntryPoint?: boolean;
    inputs: TaskParam[];
    outputs: TaskParam[];
    credits: number;

}

export type WorkflowExecutionPlanPhase = {
    phase: number;
    nodes: AppNode[];
};

export type WorkflowExecutionPlan = WorkflowExecutionPlanPhase[];



