import React, { useState } from 'react';
import { Button } from '../../../atoms/shadcn/button';
import { Textarea } from '../../../atoms/shadcn/textarea';
import { chatWithAssistant} from "@repo/openai/assistant";


export const SupportChat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>('');

  const sendMessage = async () => {
    await chatWithAssistant(userInput);

   
  };

  return (
    <div className='w-full m-10'>
      <div className="bg-sidebar text-sidebar-foreground h-[300px] border-[1px] overflow-y-auto p-10">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <div className='flex items-center'>
        <Textarea
        className='flex-1 bg-sidebar text-sidebar-foreground rounded-none min-h-[60px] max-h-[60px]'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={sendMessage} className='m-0 p-6 rounded-none border-0 min-h-[60px] max-h-[60px]'>Send</Button>
      </div>
    </div>
  );
};
