"use client"

import * as React from "react"
import { BadgeCheck,Bell,  CircleUserIcon,  Globe,Link, Lock,  Settings, 
} from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../../molecules/shadcn/dialog"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "../../organisms/shadcn/sidebar"
import MyAccountSettings from "../../organisms/custom/home/MyAccountSettings"
import { cn } from "../../../lib/utils"
import { SettingsDialogProps } from "@repo/ts-types/auth/v1"
import { Avatar, AvatarFallback, AvatarImage } from "../../atoms/shadcn/avatar"

const data = {
  nav: [
    { name: "My account", icon: CircleUserIcon},
    { name: "Notifications", icon: Bell },
    { name: "Language & region", icon: Globe },
    { name: "Connected accounts", icon: Link },
    { name: "Privacy & visibility", icon: Lock },
    { name: "Advanced", icon: Settings },
  ],
}


export function SettingsDialog({children, open: controlledOpen, onOpenChange: setControlledOpen,name,email,image}: SettingsDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)

  // Determine which open state to use
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen

  // Determine which setOpen function to use
  const setOpen = setControlledOpen || setInternalOpen

  const [currentOpenedTab, setCurrentOpenedTab] = React.useState("")

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
        <>
            <BadgeCheck />
            Account
        </>)}
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0 max-h-[80%] max-w-[80%]">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">
          Customize your settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="hidden md:flex bg-secondary">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <div className="text-description mt-[1px] ml-[1px]">Account</div>
                    <div className="flex items-center space-x-2 ">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={image ?? ''} alt={name ?? ''} />
                        <AvatarFallback className="rounded-lg bg-sidebar">{name?name[0]?.toUpperCase() :'U'}</AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{name}</span>
                        <span className="truncate text-description">{email}</span>
                      </div>
                    </div>
                    {data.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          className={cn("cursor-pointer hover:bg-accent2", item.name === currentOpenedTab && "bg-accent2")}
                        >
                          <div className="cursor-pointer" onClick={()=>setCurrentOpenedTab(item.name)}>
                            <item.icon />
                            <span>{item.name}</span>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex flex-1 flex-col overflow-auto w-full h-full bg-sidebar">
            {currentOpenedTab === "My account" && 
            <MyAccountSettings name={name} email={email} image={image}/>}
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  )
}
