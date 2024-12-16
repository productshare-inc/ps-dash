import {
    Sidebar,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../../shadcn/sidebar";
import { sidebarProps } from "@repo/ts-types/home/v1";
import { CompanyLogoName } from "../../../molecules/custom/v1/CompanyLogoName";
import SidebarItems from "../../../molecules/custom/v1/SidebarItems";
import SidebarFooterItems from "../../../molecules/custom/v1/SidebarFooterItems";
import SidebarUser  from "../../../molecules/custom/v1/SidebarUser";

export function AppSidebar({name,quote,logo,darkLogo,homePath,userid,username,avatar,email,items,footerItems,
    logoutFunction,documentationLink,supportEmailAddress,githubUsername,githubRepositoryName,redirect,modifyAvatar,
    modifyName,modifyPassword,deleteAccount}:sidebarProps) {

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <CompanyLogoName logo={logo} darkLogo={darkLogo} name={name} quote={quote} homePath={homePath}/>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarItems items={items} redirect={redirect}/>
            <SidebarFooterItems footerItems={footerItems}/>
            <SidebarFooter>
                <SidebarUser userid={userid} username={username} email={email} avatar={avatar} logoutFunction={logoutFunction} 
                      documentationLink={documentationLink} supportEmailAddress={supportEmailAddress} githubUsername={githubUsername} 
                      githubRepositoryName={githubRepositoryName} modifyAvatar={modifyAvatar} modifyName={modifyName} 
                      modifyPassword={modifyPassword} deleteAccount={deleteAccount}/>
            </SidebarFooter>
        </Sidebar>
    );
}
  