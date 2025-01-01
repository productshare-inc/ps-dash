import OpenAI from 'openai';

const openai = new OpenAI({apiKey:process.env.NEXT_PUBLIC_OPENAI_KEY as string,dangerouslyAllowBrowser:true});

export const chatWithAssistant = async (chatMessage: string) =>{
    const thread = await openai.beta.threads.create();
    const message = await openai.beta.threads.messages.create(
        thread.id,
        {role: "user",content: chatMessage}
    );
    const assistant_id = process.env.NEXT_PUBLIC_OPENAI_SUPPORT_ASSISTANT_ID as string;
    let run = await openai.beta.threads.runs.createAndPoll(
        thread.id,
        { 
          assistant_id: assistant_id,
          instructions: "Please address the user as Guest User. The user has a Pro account."
        }
    );

    if (run.status === 'completed') {
        const messages:any = await openai.beta.threads.messages.list(run.thread_id);
        for (const message of messages.data.reverse()) {
            console.log(`${message.role} > ${message.content[0].text.value}`);
        }
    } else {
        console.log(run.status);
    }
}