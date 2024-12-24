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
    connections?: ConnectionCardProps[];
}


export interface SettingsDialogProps extends UserProps {
    children?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
  
export interface SettingsHeaderProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export interface ConnectionCardProps {
    title: string;
    description: string;
    logo: string;
    darkLogo: string;
    type: string;
    clientId?: string;
    clientSecret?: string;
    oauthUrl?: string;
    published: boolean;
    showModal: boolean;
    formElements?: ConnectionCardFormProps[];
}

export interface ConnectionCardFormProps {
    label: string;
    placeholder: string;
    type: string;
    name: string;
}