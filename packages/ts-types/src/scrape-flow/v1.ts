import {LucideIcon} from "lucide-react";
import React from "react";

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