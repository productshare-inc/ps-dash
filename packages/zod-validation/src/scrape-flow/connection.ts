import {z} from  'zod';

export const addApiKeyConnectionSchema = z.object({
    name: z.string().max(30),
    description: z.string().max(80).optional(),
    apiKey: z.string().max(500),
})

export type addApiKeyConnectionSchemaType = z.infer<typeof addApiKeyConnectionSchema>