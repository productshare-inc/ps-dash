"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@repo/ui/molecules/shadcn/card'
import React, { useState } from 'react'
import { CoinsIcon, CreditCard } from 'lucide-react'
import { CreditsPack, PackId } from '../../_lib/helper/billing'
import { RadioGroup, RadioGroupItem } from '@repo/ui/atoms/shadcn/radio'
import { Label } from '@repo/ui/atoms/shadcn/label'
import { Button } from '@repo/ui/atoms/shadcn/button'
import { useMutation } from '@tanstack/react-query'
import { PurchaseCredits } from '../../../../_actions/billing'

const CreditsPurchase = () => {
    const [selectedPack, setSelectedPack] = useState(PackId.MEDIUM)

    const mutation = useMutation({
        mutationFn: PurchaseCredits,
        onSuccess:() => {},
        onError:() => {}
    })
  return (
    <Card className='bg-sidebar'>
        <CardHeader>
            <CardTitle className='text-2xl font-bold flex items-center gap-2'>
                <CoinsIcon className='h-6 w-6 text-primary'/>
                Purchase Credits
            </CardTitle>
            <CardDescription>
                Select the number of credits you want to purchase
            </CardDescription>
        </CardHeader>
        <CardContent>
            <RadioGroup onValueChange={value => setSelectedPack(value as PackId)} value={selectedPack}>
                {CreditsPack.map((pack) => (
                    <div key={pack.id} 
                    className='flex items-center space-x-3 bg-secondary/50 rounded-lg
                     p-3 hover:bg-secondary' 
                     onClick={()=> setSelectedPack(pack.id)}>
                        <RadioGroupItem value={pack.id} id={pack.id}/>
                        <Label className='flex justify-between w-full cursor-pointer'>
                            <span className='font-medium'>
                                {pack.name} - {pack.label}
                            </span>
                            <span className='font-bold text-primary'>
                                $ {(pack.price/100).toFixed(2)}
                            </span>
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </CardContent>
        <CardFooter>
            <Button className='w-full' disabled={mutation.isPending} 
            onClick={()=> mutation.mutate(selectedPack)}>
                <CreditCard className='mr-2 h-5 w-5'/> Purchase Credits              
            </Button>
        </CardFooter>
    </Card>
  )
}

export default CreditsPurchase