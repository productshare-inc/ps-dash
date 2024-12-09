'use client'
import LoginPage from '@repo/ui/templates/auth/v1/LoginPage'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import { DEFAULT_LOGIN_REDIRECT } from '../../../routes'
import { signIn } from 'next-auth/react'
import ForgotPasswordPage from '@repo/ui/templates/auth/v1/ForgotPasswordPage'
import { ForgotPassword } from '../_actions/forgot-password'

const ForgotPasswordClient = () => {
    const router = useRouter()

    const quote = 'The only way to do great work is to love what you do.'
    const author = 'Late Steve Jobs'
    const credential = 'Ex CEO of Apple Inc.'
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const goToLoginPage = ()=>{
        router.push('/auth/login')
    }

  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <ForgotPasswordPage errorMessage={error} successMessage={success} resetFunction={ForgotPassword} backFunction={goToLoginPage} 
            title={title} description={description} quote={quote} author={author} credential={credential} />
        </Suspense>
    </div>
  )
}

export default ForgotPasswordClient