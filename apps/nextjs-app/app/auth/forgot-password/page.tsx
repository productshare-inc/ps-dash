'use client'

import React, {useState } from 'react'
import ForgotPasswordPage from '@repo/ui/templates/auth/v1/ForgotPasswordPage'
import { ForgotPassword } from '../_actions/forgot-password'

const ForgotPasswordClient = () => {


    const quote = 'The only way to do great work is to love what you do.'
    const author = 'Late Steve Jobs'
    const credential = 'Ex CEO of Apple Inc.'
    const title = 'Forgot Password'
    const description = 'Enter your email to reset your password.'
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()

    const ResetPasswordFunction = async (email: string) => {
        if (success || error) return;
        try {
            const data = await ForgotPassword(email)
            setSuccess(data?.success)
            setError(data?.error)
        } catch  {
            setError("Something went wrong!")
        }
    }


  return (
    <div>
      <ForgotPasswordPage errorMessage={error} successMessage={success} resetFunction={ResetPasswordFunction}  
      title={title} description={description} quote={quote} author={author} credential={credential} />
    </div>
  )
}

export default ForgotPasswordClient