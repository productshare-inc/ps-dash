"use client"

import {
  BadgeCheck,
  Bell,
  BookOpen,
  ChevronsUpDown,
  CreditCard,
  LifeBuoy,
  LogOut,
  MessageCircle,
  Send,
  Settings,
  Sparkles,
} from "lucide-react"
import React, { useState } from "react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../atoms/shadcn/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../shadcn/dropdown"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../../../organisms/shadcn/sidebar"
import { UserProps } from "@repo/ts-types/home/v1"
import { SettingsDialog } from "../../../templates/home/Settings"
import { useTheme } from "../../../../providers/theme-provider"
import { Theme } from "./Theme"

const SidebarUser = ({ name,email,avatar,logoutFunction,documentationLink,supportEmailAddress, githubUsername,
  githubRepositoryName}:UserProps) => {

  const { isMobile } = useSidebar()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { theme, setTheme } = useTheme()


  const handleSettingsClick = (e: React.MouseEvent) => {
    // Prevent the dropdown from closing
    e.preventDefault()
    e.stopPropagation()
    
    // Open the settings dialog
    setIsSettingsOpen(true)
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={avatar ?? ''} alt={name ?? ''} />
                <AvatarFallback className="rounded-lg">{name?name[0]?.toUpperCase() :'U'}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{name}</span>
                <span className="truncate text-xs">{email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={avatar ?? ''} alt={name ?? ''} />
                  <AvatarFallback className="rounded-lg">{name?name[0]?.toUpperCase() :'U'}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{name}</span>
                  <span className="truncate text-xs">{email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <SettingsDialog 
                open={isSettingsOpen} 
                onOpenChange={(open) => {
                  setIsSettingsOpen(open)
                  // Ensure dropdown remains open when dialog is closed
                  if (!open) {
                    setIsDropdownOpen(true)
                  }
                }}
                name={name}
                email={email}
                image={avatar}
              >
                <DropdownMenuItem 
                  className="flex gap-2 cursor-pointer" 
                  onClick={handleSettingsClick}
                >
                  <Settings size={20}/>
                  Account Settings
                </DropdownMenuItem>
              </SettingsDialog>
              <a href={`https://mail.google.com/mail/u/0/?fs=1&to=${supportEmailAddress}&su=Support&tf=cm`} target="_blank" 
              rel="noopener noreferrer">
                  <DropdownMenuItem 
                      className="flex gap-2 cursor-pointer" 
                    >
                      <MessageCircle size={20}/>
                      Support
                    </DropdownMenuItem>
              </a>
              <a href={`https://github.com/${githubUsername}/${githubRepositoryName}/issues/new`} target="_blank" 
              rel="noopener noreferrer">
                  <DropdownMenuItem 
                      className="flex gap-2 cursor-pointer" 
                    >
                      <Send  size={20}/>
                      Feedback / Issues
                    </DropdownMenuItem>
              </a>
              <a href={documentationLink} target="_blank" 
              rel="noopener noreferrer">
                  <DropdownMenuItem 
                      className="flex gap-2 cursor-pointer" 
                    >
                      <BookOpen  size={20}/>
                      Documentation
                  </DropdownMenuItem>
              </a>
                <DropdownMenuItem 
                      className="flex gap-2 cursor-pointer" 
                    >
                      <Theme setTheme={setTheme}/>
                  </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex gap-2 cursor-pointer" onClick={logoutFunction}>
              <LogOut  size={20} />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export default SidebarUser;