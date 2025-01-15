"use client"
import { TaskParam } from '@repo/ts-types/scrape-flow/node'
import { Input } from '@repo/ui/atoms/shadcn/input'
import { Label } from '@repo/ui/atoms/shadcn/label'
import React, { useId, useState } from 'react'

interface ParamProps {
    param: TaskParam
    value: string
    updateNodeParamValue: (newValue:string) => void
}

const StringParam = ({param,value,updateNodeParamValue}:ParamProps) => {
    const [internalValue, setInternalValue] = useState(value)
    const id = useId()
  return (
    <div className='space-y-1 p-1 w-full'>
        <Label htmlFor={id} className='text-xs flex'>
            {param.name}
            {param.required && <p className='text-destructive px-1'>*</p>}
        </Label>
        <Input id={id} placeholder={param.helperText} value={internalValue} 
        onChange={(e)=>setInternalValue(e.target.value)}
        onBlur={(e)=>updateNodeParamValue(e.target.value)}
        className='text-xs'
        />
        
    </div>
  )
}

export default StringParam