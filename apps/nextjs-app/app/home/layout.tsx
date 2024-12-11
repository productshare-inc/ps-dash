"use client"

import { SidebarProvider, SidebarTrigger } from "@repo/ui/organisms/shadcn/sidebar"
import { AppSidebar } from "@repo/ui/organisms/custom/home/app-sidebar"
import { sidebarFooterItems, sidebarItems } from "../../lib/constants/home"
import { useSession } from "next-auth/react";


export default function Layout({ children }: { children: React.ReactNode }) {
    const logo = '/logo.png'
    const darkLogo = '/logo.png'
    const name = 'Microsaas Boilerplate'
    const quote = 'Start your journey with us'
    const homePath = '/home'
    const { data:session } = useSession();



  return (
    <SidebarProvider>
      <AppSidebar items={sidebarItems} footerItems={sidebarFooterItems} user={session?.user} name={name} 
      logo={logo} darkLogo={darkLogo} quote={quote} homePath={homePath}/>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
