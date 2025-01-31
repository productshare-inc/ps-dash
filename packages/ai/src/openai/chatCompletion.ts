
import OpenAI from "openai";

export const chatCompletion = async ({apiKey,model,systemMessage,userMessages,temperature}:{
    apiKey:string,
    model:string,
    systemMessage:string,
    userMessages:string[],
    temperature:number   
}) => {
    if(!apiKey){
        throw new Error('API key is missing')
    }
    const openai = new OpenAI({apiKey});

    let messages:any = []
    messages.push({
        role: 'system',
        content: systemMessage
    })
    userMessages.forEach((message) => {
        messages.push({
            role: 'user',
            content: message
        })
    })

    const response = await openai.chat.completions.create({
        model: model,
        messages: messages,
          
        temperature: temperature
    });
    return response
}