"use client"

import { SidebarProvider, SidebarTrigger } from "@repo/ui/organisms/shadcn/sidebar"
import { AppSidebar } from "@repo/ui/organisms/custom/home/app-sidebar"
import { sidebarFooterItems, sidebarItems } from "../../lib/constants/home"
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import LoadingCard from "@repo/ui/organisms/custom/auth/v1/LoadingCard";
import { useRouter } from "next/navigation";


export default function Layout({ children }: { children: React.ReactNode }) {
    const logo = '/logo.png'
    const darkLogo = '/logo.png'
    const name = 'Microsaas Boilerplate'
    const quote = 'Start your journey with us'
    const homePath = '/home'
    const documentationLink ="https://turborepo-saas-boilerplate-code-docs.vercel.app/"
    const supportEmailAddress = "support@bsamaritan.com"
    const githubUsername = "anoopkarnik"
    const githubRepositoryName = "turborepo-saas-boilerplate-code"
    const { data:session,status } = useSession();
    
    const [user, setUser] = useState<any>(null)
    
    const logout = async () => {
        await signOut()
    }

    const router = useRouter();

    const redirect = (href: string) => {
      router.push(href);
    }

      // Refresh session manually after login
  const refreshSession = async () => {
    const response = await fetch("/api/auth/session");
    const newSession = await response.json();
    setUser(newSession?.user || null);
  };

    useEffect(() => {
      if (status === "authenticated") {
        setUser(session?.user || null);
      } else if (status === "unauthenticated") {
        refreshSession();
      }
    }, [session, status]);

    if (status === "loading") {
        return <LoadingCard title="" description="Loading the Home Page"/>
    }

  return (
    <SidebarProvider>
        <AppSidebar
          items={sidebarItems}
          footerItems={sidebarFooterItems}
          userName={user?.name}
          userAvatar={user?.image}
          userEmail={user?.email}
          name={name}
          logo={logo}
          darkLogo={darkLogo}
          quote={quote}
          homePath={homePath}
          logoutFunction={logout}
          documentationLink={documentationLink}
          supportEmailAddress={supportEmailAddress}
          githubUsername={githubUsername}
          githubRepositoryName={githubRepositoryName}
          redirect={redirect}
        />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
