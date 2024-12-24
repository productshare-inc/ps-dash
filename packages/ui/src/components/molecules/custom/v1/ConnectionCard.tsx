'use client'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { Card, CardDescription, CardHeader, CardTitle } from '../../shadcn/card'
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../shadcn/dialog'
import { ConnectionCardProps } from '@repo/ts-types/home/v1'
import { useTheme } from '../../../../providers/theme-provider'
import { Button } from '../../../atoms/shadcn/button'
import { DialogContent } from '@radix-ui/react-dialog'
import { Link } from 'react-router-dom'


const ConnectionCard = ({connection}:{connection:ConnectionCardProps }) => {
    const {theme} = useTheme();

    useEffect(() => {

    }, [theme]);

  return (
    <Card className="flex flex-col items-center justify-between bg-sidebar min-h-[250px] max-h-[250px] max-w-[300px]">
    <CardHeader className="flex flex-col items-center justify-center gap-2">
        <div className="flex aspect-square size-8 items-center justify-center ">
            {theme === "dark" ?
                <Image src={connection.darkLogo} alt='/next.svg' width={30} height={30} /> : 
                <Image src={connection.logo} alt='/next.svg' width={30} height={30} />}
        </div>
      <div className='flex flex-col gap-4'>
        <CardTitle className="text-center text-lg">{connection.title}</CardTitle>
        <CardDescription className=' text-center'>{connection.description}</CardDescription>
      </div>
    </CardHeader>
    { connection.published && <div className="flex flex-col items-center gap-2 p-4 mx-4 ">
     { connection.showModal? (
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg"  >
              Connect using Keys
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='flex text-4xl gap-4'>
                {theme === "dark" ?
                <Image src={connection.darkLogo} alt='/next.svg' width={30} height={30} /> : 
                <Image src={connection.logo} alt='/next.svg' width={30} height={30} />}
                <div>{connection.title}</div>
              </DialogTitle>
              <DialogDescription className='py-4 '>{connection.description}</DialogDescription>
            </DialogHeader>
            {/* <AddConnectionsModal formElements={connection.formElements || []} addConnection={addConnection} userId={user?.id}/> */}
          </DialogContent>
        </Dialog>
      ):(
      <div className=''>
        <a href={connection.oauthUrl as string}>
            <Button size="lg" >
              Connect using OAuth
            </Button>
        </a>  
      </div>)}
    </div>}
    {!connection.published && 
    <div className="flex flex-col items-center gap-2 mb-4">
        <Button size="lg" >
          In Progress
        </Button>
    </div>
    }
  </Card>
  )
}

export default ConnectionCard