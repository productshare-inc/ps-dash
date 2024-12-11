import { sidebarFooterItemsProps, sidebarHeaderProps } from "@repo/ts-types/home/v1"
import {  Home, Inbox, LifeBuoy, Send, BookOpen, Settings2 } from "lucide-react"

export const sidebarItems:sidebarHeaderProps = 
{
    "Application":[
        {title: "Home", url: "#", icon: Home},
        {title: "Systems", url: "#", icon: Inbox, isActive:true, items: [
            {title: "System 1", url: "#"},
            {title: "System 2", url: "#"},
            {title: "System 3", url: "#"},
        ]},
    ],
}

export const sidebarFooterItems:sidebarFooterItemsProps[] = 
[
        {title: "Documentation", url: "#", icon: BookOpen},
        {title: "Settings", url: "#", icon: Settings2},
        {title: "Support", url: "#", icon: LifeBuoy},
        {title: "Feedback", url: "#", icon: Send}
]


