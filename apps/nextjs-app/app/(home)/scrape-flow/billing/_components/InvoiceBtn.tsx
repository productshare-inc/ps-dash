"use client"

import { Button } from '@repo/ui/atoms/shadcn/button'
import { useMutation } from '@tanstack/react-query'
import { Loader2Icon } from 'lucide-react'
import React from 'react'
import { DownloadInvoice } from '../../../_actions/billing'
import { useToast } from '@repo/ui/hooks/use-toast'

const InvoiceBtn = ({id}:{id:string}) => {

    const {toast} = useToast()

    const mutation = useMutation({
        mutationFn: DownloadInvoice,
        onSuccess:(data) => (window.location.href = data as string),
        onError:() => {
            toast({
                title: 'Error',
                description: 'Failed to download invoice',
                color: 'destructive'
            })
        }
    })
  return (
    <Button variant={"ghost"} size={"sm"} className='text-xs gap-2 text-muted-foreground px-1' 
    disabled={mutation.isPending} onClick={()=> mutation.mutate(id)}>
        Invoice
        {mutation.isPending && <Loader2Icon className='h-4 w-4 animate-spin'/>}

    </Button>
  )
}

export default InvoiceBtn