import { TaskParam } from '@repo/ts-types/scrape-flow/node'
import { cn } from '@repo/ui/lib/utils'
import { Handle,Position } from '@xyflow/react'
import React from 'react'
import NodeParamField from './NodeParamField'

const NodeInput = ({input,nodeId}:{input:TaskParam,nodeId:string}) => {
  return (
    <div className='flex justify-start relative p-3 bg-secondary w-full rounded-b-md'>
        <NodeParamField param={input} nodeId={nodeId}/>
        {!input.hideHandle && (
            <Handle id={input.name} type="source" position={Position.Right}
            className={cn("!bg-muted-foreground !border-2 !border-background !-right-2 !w-4 !h-4")}
            />
        )}
    </div>
  )
}

export default NodeInput