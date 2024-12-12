export interface sidebarHeaderSubItemsProps {
    title: string;
    url: string;
}

export interface sidebarHeaderItemsProps{
    title: string;
    icon: any;
    url?: string;
    isActive?: boolean;
    items?: sidebarHeaderSubItemsProps[];
}

export interface sidebarHeaderProps {
    [key: string]: sidebarHeaderItemsProps[];
}

export interface sidebarFooterItemsProps {
    title: string;
    url: string;
    icon: any;
}

export interface sidebarListProps {
    items: sidebarHeaderProps;
    redirect: (url: string) => void;
}

export interface sidebarProps {
    name: string;
    quote: string;
    logo: string;
    darkLogo: string;
    homePath: string;
    userName: string | null | undefined;
    userAvatar: string | null |undefined;
    userEmail: string | null | undefined;
    documentationLink?: string;
    supportEmailAddress?: string;
    githubUsername?: string;
    githubRepositoryName?: string;
    items: sidebarHeaderProps;
    footerItems: sidebarFooterItemsProps[];
    logoutFunction: () => void;
    redirect: (url: string) => void;
}

export interface CompanyLogoNameProps {
    name: string;
    quote: string;
    logo: string;
    darkLogo: string;
    homePath: string;
}

export interface UserProps {
    name: string | null | undefined;
    avatar: string | null |undefined;
    email: string | null | undefined;
    documentationLink?: string;
    supportEmailAddress?: string;
    githubUsername?: string;
    githubRepositoryName?: string;
    logoutFunction: () => void;
}