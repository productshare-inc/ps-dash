import OpenAI from 'openai';

const openai = new OpenAI({apiKey:process.env.NEXT_PUBLIC_OPENAI_KEY as string});

export const chatWithAssistant = async (chatMessage:string) =>{
    const thread = await openai.beta.threads.create();
    const message = await openai.beta.threads.messages.create(
        thread.id,
        {role: "user",content: chatMessage}
    );

}