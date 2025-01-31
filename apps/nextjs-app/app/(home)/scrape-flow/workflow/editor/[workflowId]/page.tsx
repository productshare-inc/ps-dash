import { auth } from '@repo/auth/next-auth/auth'
import React from 'react'
import db from '@repo/prisma-db/client'
import Editor from '../../_components/Editor'

async function page({params}: {params:{workflowId:string}}){

    const {workflowId} = params
    const session = await auth()
    if (!session?.user?.id){
        return <div>Unauthenticated</div>
    }
    const workflow = await db.workflow.findUnique({
        where:{
            id:workflowId
        }
    })
    if(!workflow){
        return <div>Workflow not found</div>
    }

  return (
    <pre className='h-full'>
        <Editor workflow={workflow}/>
    </pre>
  )
}

export default page