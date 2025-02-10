import React from 'react'
import PricingPage from '../pricing/page'
import FaqPage from '../faqs/page'
import { SiteHeader } from '@/components/site-header'
import ReviewsSection from '@/components/testimonial'

function PricingSection() {
  return (
    <>
    {/* <SiteHeader /> */}
    
    <PricingPage />
    <ReviewsSection />
    <div className="pt-18 sm:pt-8 px-4 lg:pt-5 mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mt-10">
          <h2 className="mx-0  text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text  text-4xl font-semibold leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-3xl md:text-6xl lg:text-6xl px-2">
              Frequently asked questions
          </h2>
          <p className="max-w-[85%] pb-1 sm:pb-1 lg:pb-10 leading-normal sm:text-lg sm:leading-7">
                Need help with something? Here are some of the most common questions we get.
          </p>
      </div>
     
      <div className="container px-4 my-10 sm:my-0 lg:my-0 md:my-0 flex max-w-[58rem] flex-col items-center justify-between gap-4 py-0">
              <FaqPage />
          </div></>
  )
}

export default PricingSection