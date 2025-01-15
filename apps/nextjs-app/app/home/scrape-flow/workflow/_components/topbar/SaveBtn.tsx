"use client"
import { Button } from '@repo/ui/atoms/shadcn/button'
import React from 'react'
import { CheckIcon } from 'lucide-react'
import { useReactFlow } from '@xyflow/react'

const SaveBtn = () => {

    const {toObject} = useReactFlow()

  return (
    <Button variant="outline" className=' flex items-center gap-2' onClick={()=>{
        console.log(toObject())
    }}>
        <CheckIcon size={16} className="stroke-green-400"/>
        Save
    </Button>
  )
}

export default SaveBtn