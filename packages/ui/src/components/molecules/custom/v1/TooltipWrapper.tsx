"use client"

import { TooltipWrapperProps } from '@repo/ts-types/scrape-flow/v1'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from '@repo/ui/atoms/shadcn/tooltip'

import React from 'react'

const TooltipWrapper = (props: TooltipWrapperProps) => {
  return (
    <TooltipProvider delayDuration={0}>
        <Tooltip>
            <TooltipTrigger asChild>
                {props.children}
            </TooltipTrigger>
            <TooltipContent side={props.side}>
                {props.content}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipWrapper