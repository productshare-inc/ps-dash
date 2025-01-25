import { ConnectionCardProps, ConnectionType } from "@repo/ts-types/home/v1";



export const CONNECTIONS: ConnectionCardProps[] = [
    {
      title: 'OpenAI',
      description: 'Interact with openAI API',
      logo: '/connections/openai.png',
      darkLogo: '/connections/openai.png',
      type: ConnectionType.ApiKey,
      published: true,
    },
  ]
