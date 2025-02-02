"use client"
import ErrorPage from '@repo/ui/templates/auth/v1/ErrorPage'
import React from 'react'

const ErrorTemp = () => {

  const quote = 'The only way to do great work is to love what you do.'
  const author = 'Late Steve Jobs'
  const credential = 'Ex CEO of Apple Inc.'
  const errorMessage = 'Oops! Something went wrong!'

  return (
    <div>
      <ErrorPage errorMessage={errorMessage} quote={quote} author={author} credential={credential}/>
    </div>
  )
}

export default ErrorTemp;