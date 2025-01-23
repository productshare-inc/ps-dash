import { WorkflowExecutionStatus } from '@repo/ts-types/scrape-flow/workflow'
import { cn } from '@repo/ui/lib/utils'
import React from 'react'

const indicatorColors: Record<WorkflowExecutionStatus, string> = {
    PENDING: 'bg-slate-400',
    RUNNING: 'bg-yellow-400',
    COMPLETED: 'bg-emerald-600',
    FAILED: 'bg-red-400'
    
}

const ExecutionStatusIndicator = ({status}:{status:WorkflowExecutionStatus}) => {
  return (
    <div className={cn('w-2 h-2 rounded-full',
        indicatorColors[status]
    )}/>
  )
}

export default ExecutionStatusIndicator