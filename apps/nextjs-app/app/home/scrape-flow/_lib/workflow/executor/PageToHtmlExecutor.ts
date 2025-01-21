import {  ExecutionEnvironment } from '@repo/ts-types/scrape-flow/workflow'
import { PageToHtmlTask } from '../tasks'

export async function PageToHtmlExecutor(environment:ExecutionEnvironment<typeof PageToHtmlTask>):Promise<boolean>{
    try{
        const html = await environment.getPage()!.content()
        environment.setOutput("Html",html)
        return true
    } catch(e){
        console.log("Failed to launch browser",e)
        return false
    }
}