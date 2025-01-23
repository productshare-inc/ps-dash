import puppeteer from 'puppeteer'
import { ExecutionEnvironment } from '@repo/ts-types/scrape-flow/workflow'
import { LaunchBrowserTask } from '../tasks'

export async function LaunchBrowserExecutor(environment:ExecutionEnvironment<typeof LaunchBrowserTask>):Promise<boolean>{
    try{
        const websiteUrl = environment.getInput("Website Url")
        const browser = await puppeteer.launch({headless:true,args: ['--no-sandbox', '--disable-setuid-sandbox'],})
        environment.log.info("Browser launched Successfully")
        environment.setBrowser(browser)
        const page = await browser.newPage()
        await page.goto(websiteUrl as string)
        environment.setPage(page)
        environment.log.info(`Opened page at ${websiteUrl}`)
        return true
    } catch(e:any){
        environment.log.error(e.message)
        return false
    }
}