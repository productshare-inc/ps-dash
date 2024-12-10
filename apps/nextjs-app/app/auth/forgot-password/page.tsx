'use client'

import { useRouter} from 'next/navigation'
import React, { Suspense } from 'react'
import ForgotPasswordPage from '@repo/ui/templates/auth/v1/ForgotPasswordPage'
import { ForgotPassword } from '../_actions/forgot-password'

const ForgotPasswordClient = () => {
    const router = useRouter()

    const quote = 'The only way to do great work is to love what you do.'
    const author = 'Late Steve Jobs'
    const credential = 'Ex CEO of Apple Inc.'
    const title = 'Forgot Password'
    const description = 'Enter your email to reset your password.'
    const error = 'Invalid Email! Please check your email and try again.' 
    const success = 'Password reset! Please check your email for further instructions.'

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