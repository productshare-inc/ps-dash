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

export interface sidebarProps {
    name: string;
    quote: string;
    logo: string;
    darkLogo: string;
    homePath: string;
    user: any;
    items: sidebarHeaderProps;
    footerItems: sidebarFooterItemsProps[];
}

export interface CompanyLogoNameProps {
    name: string;
    quote: string;
    logo: string;
    darkLogo: string;
    homePath: string;
}