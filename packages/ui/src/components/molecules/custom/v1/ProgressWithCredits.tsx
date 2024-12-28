import React, { useEffect, useState } from 'react'
import { Progress } from '../../../atoms/shadcn/progress'
import { CreditsProps } from '@repo/ts-types/home/v1'

const ProgressWithCredits = ({creditsUsed, totalCredits}:CreditsProps) => {
    const [creditsPercentageUsed, setCreditsPercentageUsed] = useState(creditsUsed*100/totalCredits)

    useEffect(() => {
        setCreditsPercentageUsed(creditsUsed*100/totalCredits)
    }, [creditsUsed, totalCredits])

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
            <div className='text-description'>Credits Used</div>
            <div className='text-description'>{creditsUsed}/{totalCredits}</div>
        </div>
       <Progress value={creditsPercentageUsed} /> 
    </div>
  )
}

export default ProgressWithCredits