"use client"

import { Button } from '@repo/ui/atoms/shadcn/button'
import { PlayIcon } from 'lucide-react'
import React from 'react'
import useExecutionPlan from '../../../_hooks/useExecutionPlan'

const ExecuteBtn = ({workflowId}:{workflowId:string}) => {
    const generate = useExecutionPlan();
  return (
    <Button variant="outline" className=' flex items-center gap-2' onClick={()=>{
        const plan = generate();
        console.log("----plan -----")
        console.table(plan)
    }} >
        <PlayIcon size={16} className="stroke-orange-400"/>
        Execute
    </Button>
  )
}

export default ExecuteBtn