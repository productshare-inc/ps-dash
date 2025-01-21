import puppeteer from 'puppeteer'
import { ExecutionEnvironment } from '@repo/ts-types/scrape-flow/workflow'
import { LaunchBrowserTask } from '../tasks'

export async function LaunchBrowserExecutor(environment:ExecutionEnvironment<typeof LaunchBrowserTask>):Promise<boolean>{
    try{
        const websiteUrl = environment.getInput("Website Url")
        const browser = await puppeteer.launch({headless:true})
        environment.setBrowser(browser)
        const page = await browser.newPage()
        await page.goto(websiteUrl as string)
        environment.setPage(page)
        return true
    } catch(e){
        console.log("Failed to launch browser",e)
        return false
    }
}