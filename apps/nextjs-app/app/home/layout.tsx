"use client"

import { SidebarProvider, SidebarTrigger } from "@repo/ui/organisms/shadcn/sidebar"
import { AppSidebar } from "@repo/ui/organisms/custom/home/app-sidebar"
import { CONNECTIONS, sidebarFooterItems, sidebarItems } from "../../lib/constants/home"
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import LoadingCard from "@repo/ui/organisms/custom/auth/v1/LoadingCard";
import { useRouter } from "next/navigation";
import { darkLogo, githubRepositoryName, githubUsername, logo, supportEmailAddress, tagline, title } from "../../lib/constants/appDetails";


export default function Layout({ children }: { children: React.ReactNode }) {

    const homePath = '/home'
    const documentationLink = process.env.NEXT_PUBLIC_DOCUMENTATION_URL as string;

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
          userid={user?.id}
          username={user?.name}
          avatar={user?.image}
          email={user?.email}
          name={title}
          logo={logo}
          darkLogo={darkLogo}
          quote={tagline}
          homePath={homePath}
          logoutFunction={logout}
          documentationLink={documentationLink}
          supportEmailAddress={supportEmailAddress}
          githubUsername={githubUsername}
          githubRepositoryName={githubRepositoryName}
          redirect={redirect}
          connections={CONNECTIONS}
        />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
