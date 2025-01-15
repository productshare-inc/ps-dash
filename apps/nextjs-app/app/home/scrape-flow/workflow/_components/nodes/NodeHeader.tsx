"use client"
import { TaskType } from '@repo/ts-types/scrape-flow/node'
import React from 'react'
import { TaskRegistry } from '../../../_lib/workflow/tasks'
import { Badge } from '@repo/ui/atoms/shadcn/badge'
import { CoinsIcon,GripVerticalIcon} from 'lucide-react'

const NodeHeader = ({taskType}:{taskType: TaskType}) => {
    const task = TaskRegistry[taskType];
  return (
    <div className='flex items-center gap-2 p-2'>
        <task.icon size={16}/>
        <div className='flex justify-between items-center w-full'>
            <p className='text-xs font-bold uppercase text-muted-foreground'>
                {task.label}
            </p>
            <div className='flex gap-1 items-center'>
                {task.isEntryPoint && <Badge>Entry point</Badge>}
                <Badge className='gap-2 flex items-center text-xs hover:none'>
                    <CoinsIcon size={16}/>
                    TODO
                </Badge>
                <div className='drag-handle cursor-grab '>
                    <GripVerticalIcon size={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NodeHeader