"use client"

import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@repo/ui/molecules/shadcn/accordion'
import { TaskType } from '@repo/ts-types/scrape-flow/node'
import TaskMenuButton from './TaskMenuButton'

const TaskMenu = () => {
  return (
    <aside className='w-[340px] min-w-[340px] max-w-[340px] border-r-2 border-separate h-full p-2 px-4 overflow-auto'>
        <Accordion type="multiple" className='w-full' defaultValue={['extraction']}>
            <AccordionItem value="extraction">
                <AccordionTrigger className='font-bold'>
                    Data Extraction
                </AccordionTrigger>
                <AccordionContent className='flex flex-col gap-1'>
                    <TaskMenuButton taskType={TaskType.PAGE_TO_HTML}/>
                    <TaskMenuButton taskType={TaskType.EXTRACT_TEXT_FROM_ELEMENT}/>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </aside>
  )
}

export default TaskMenu