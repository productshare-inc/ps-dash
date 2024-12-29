import React, { useEffect, useState } from 'react'
import { Progress } from '../../../atoms/shadcn/progress'
import { CreditsProps } from '@repo/ts-types/home/v1'

const ProgressWithCredits = ({creditsUsed, maxTrialCredits,maxPremiumCredits,access}:CreditsProps) => {
    const [creditsPercentageUsed, setCreditsPercentageUsed] = useState(0)

    useEffect(() => {
        if(access === 'PREMIUM'){
            setCreditsPercentageUsed(creditsUsed*100/ maxPremiumCredits)
        }
        else if(access === 'TRIAL'){
            setCreditsPercentageUsed(creditsUsed*100/ maxTrialCredits)
        }
    }, [creditsUsed,  maxTrialCredits, maxPremiumCredits, access])

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
            <div className='text-description'>Credits Used</div>
            <div className='text-description'>{creditsUsed}/{ maxTrialCredits}</div>
        </div>
       <Progress value={creditsPercentageUsed} /> 
    </div>
  )
}

export default ProgressWithCredits