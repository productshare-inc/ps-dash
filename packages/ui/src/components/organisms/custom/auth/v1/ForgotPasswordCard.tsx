import { useState } from 'react'
import {z} from "zod"
import { Card, CardContent, CardFooter, CardHeader } from '../../../../molecules/shadcn/card';
import { useTransition } from 'react';
import { Button } from '../../../../atoms/shadcn/button';
import { ForgotPasswordSchema } from '@repo/zod/auth'
import {  useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../molecules/shadcn/form'
import { Input } from '../../../../atoms/shadcn/input';
import { FormResult } from './FormResult';
import { ForgotPasswordCardProps } from '@repo/ts-types/auth/v1';
import { useRouter } from 'next/navigation';

const ForgotPasswordCard = ({errorMessage,successMessage,resetFunction}
  :ForgotPasswordCardProps
) => {
  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues:{
      email: '',
    },
  })
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const [isPending, startTransition] = useTransition()

  async function handleSubmit(data: z.infer<typeof ForgotPasswordSchema>) {
    setError("")
    setSuccess("")
    startTransition(() => {
      resetFunction(data.email)
        .then((result: any) => {
          setError(result?.error);
          setSuccess(result?.success);
        })
    });
  }

  const router = useRouter();

  return (
    <Card className='w-[400px] bg-white text-black shadow-xl shadow-white/20'>
      <CardHeader>
        <div className='text-6xl font-bold text-center'>Forgot Password</div>
        <div className='text-md font-extralight text-center'>Send Reset Password Mail</div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
            <div className='space-y-4 mb-4'>
              <FormField control={form.control} name="email" render={({field})=>(
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input disabled={isPending}  type="email" placeholder='example@gmail.com'  className='bg-white text-black'  {...field}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}/>
            </div>
            <FormResult type="error" message={error}/>
            <FormResult type="success" message={success}/>
            <Button  disabled={isPending}  variant="default" type="submit">Send Email</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <Button onClick={()=>router.push('/auth/login')} variant={'blank'}
        className='text-sm text-center text-black/60 hover:text-black cursor-pointer hover:underline'>
          Go to Login Page
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ForgotPasswordCard;