import { TaskType } from '@repo/ts-types/scrape-flow/node'
import { Button } from '@repo/ui/atoms/shadcn/button'
import React from 'react'
import { TaskRegistry } from '../../_lib/workflow/registry';

const TaskMenuButton = ({taskType}: {taskType: TaskType}) => {
    const task = TaskRegistry[taskType];

    const onDragStart = ( event: React.DragEvent, type: TaskType) => {
        event.dataTransfer.setData('application/reactflow', type);
        event.dataTransfer.effectAllowed = "move";
    }

  return (
    <Button variant='secondary' className='flex justify-between items-center gap-2 border w-full' draggable 
    onDragStart={event => onDragStart(event,taskType)}>
        <div className='flex gap-2'>
            <task.icon size={20}/>
            {task.label}
        </div>
    </Button>
  )
}

export default TaskMenuButton