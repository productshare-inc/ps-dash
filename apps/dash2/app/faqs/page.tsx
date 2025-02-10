"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FaqPage() {
    return (
      <Accordion type="single" collapsible className="mb-0 lg:mb-20 sm:mb-2 md:mb-2 w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What does "lifetime access" mean?</AccordionTrigger>
          <AccordionContent>
            It means you get access to all current and future components and templates for <b>a one-time payment. No recurring fees. No subscription.</b>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What does "lifetime updates" mean?</AccordionTrigger>
          <AccordionContent>
            Lifetime updates mean that you are entitled to receive all future updates for the product <b>without any additional cost.</b>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How do I get access once I've paid?</AccordionTrigger>
          <AccordionContent>
            After your payment is successfully processed, you will receive an email with instructions on how to access your purchase.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
          <AccordionContent>
            Due to the nature of digital products, we do not offer refunds. If you have any questions, please contact us at <a href="mailto:kathan@easyui.pro" className="underline">kathan@easyui.pro</a>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Do you offer technical support?</AccordionTrigger>
          <AccordionContent>
            Easy UI is a <b> self-serve</b> product. We do not offer technical support. However, if you have a bug to report, please open an issue and we will fix it as soon as possible.
          </AccordionContent>
        </AccordionItem>

        <h3 className="mt-20  text-center text-base font-medium tracking-tight text-foreground/80">Still have questions? Email us at <a href="mailto:kathan@easyui.pro" className="underline">kathan@easyui.pro</a></h3>

      </Accordion>
    )
  }  
