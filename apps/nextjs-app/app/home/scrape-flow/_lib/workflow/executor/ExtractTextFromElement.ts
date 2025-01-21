import {  ExecutionEnvironment } from '@repo/ts-types/scrape-flow/workflow'
import { ExtractTextFromElementTask} from '../tasks'
import * as cheerio from 'cheerio';

export async function ExtractTextFromElementExecutor(environment:ExecutionEnvironment<typeof ExtractTextFromElementTask>):Promise<boolean>{
    try{
        const selector = environment.getInput("Selector")
        if(!selector){
            console.log("Selector not found")
            return false
        }
        const html = environment.getInput("Html")
        if(!html){
            console.log("Html not found")
            return false
        }
        const $ = cheerio.load(html)
        const element = $(selector)

        if(!element){
            console.log("Element not found")
            return false
        }

        const extractedText = $.text(element)

        if(!extractedText){
            console.log("Failed to extract text")
            return false
        }

        environment.setOutput("Extracted Text",extractedText)

        return true
    } catch(e){
        console.log("Failed to launch browser",e)
        return false
    }
}