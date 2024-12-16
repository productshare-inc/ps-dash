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

export interface CompanyLogoNameProps {
    name: string;
    quote: string;
    logo: string;
    darkLogo: string;
    homePath: string;
}


export interface sidebarProps extends CompanyLogoNameProps,UserProps {
    items: sidebarHeaderProps;
    footerItems: sidebarFooterItemsProps[];
    redirect: (url: string) => void;
}


export interface UserProps {
    userid: string ;
    username: string | undefined;
    avatar: string | undefined;
    email: string | undefined;
    documentationLink?: string;
    supportEmailAddress?: string;
    githubUsername?: string;
    githubRepositoryName?: string;
    logoutFunction?: () => void;
    modifyAvatar?: (id:string,event: React.ChangeEvent<HTMLInputElement>) => void;
    modifyName: (id:string,name: string) => void;
    modifyEmail?: (id:string,email: string) => void;
    modifyPassword: (id:string,password: string) => void;
    deleteAccount: (id:string) => void;
}


export interface SettingsDialogProps extends UserProps {
    children?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
  