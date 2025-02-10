"use client"

import React, { useState, useEffect } from "react"
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useTheme } from "next-themes"

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore")
    if (!hasVisitedBefore) {
      setIsOpen(true)
      localStorage.setItem("hasVisitedBefore", "true")
    }
  }, [])

  const handleClick = () => {
    router.push('/docs/ez-boiler')
    handleClose()
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!isMounted) {
    return null
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen} >
      <AlertDialogContent className="max-w-[370px] w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-lg transition-all">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-10 blur-xl" />
        <AlertDialogHeader className="space-y-2">
          <AlertDialogTitle className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Welcome to Easy UI Premium!
          </AlertDialogTitle>
          <p className="text-lg text-gray-500 dark:text-gray-400 py-3">
            We are introducing our new Boilerplate - Designed to jumpstart your project with style and efficiency.
          </p>
        </AlertDialogHeader>
        <div className="mt-0 space-y-4">
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm text-gray-700 dark:text-gray-300">Responsive design out of the box</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm text-gray-700 dark:text-gray-300">Dark and light theme support</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm text-gray-700 dark:text-gray-300">Modern SaaS-style components and templates</span>
          </div>
        </div>
        <AlertDialogFooter className="mt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
         
          <Button
            onClick={handleClick}
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:opacity-90 transition-opacity z-10 w-full sm:w-auto"
          >
            Checkout Easy Boilerplate
          </Button>
          <Button variant="outline" size="sm" onClick={handleClose} className="z-10 w-full sm:w-auto">
             Close
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}