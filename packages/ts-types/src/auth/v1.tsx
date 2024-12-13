export interface QuoteProps {
    quote: string,
    author: string,
    credential: string
}

export interface DataResultProps {
    success?: string | undefined;
    error?: string | undefined;
}

export interface LoginCardProps {
    showEmail?: boolean;
    showGoogleProvider?: boolean;
    showGithubProvider?: boolean;
    showLinkedinProvider?: boolean;
    onEmailSubmit?: any;
    onGoogleProviderSubmit?: any;
    onGithubProviderSubmit?: any;
    onLinkedinProviderSubmit?: any;
    forgotPasswordFunction?: any;
    backFunction?:()=>void;
    errorMessage?:string;
  }
  
export interface LoadingCardProps {
    title: string;
    description: string;
}

export interface RegisterCardProps {
    showEmail?: boolean;
    showGoogleProvider?: boolean;
    showGithubProvider?: boolean;
    showLinkedinProvider?: boolean;
    onEmailSubmit?: any;
    onGoogleProviderSubmit?: any;
    onGithubProviderSubmit?: any;
    onLinkedinProviderSubmit?: any;
    backFunction?:() => void;
    errorMessage?:string;
  }

export interface VerificationCardProps {
    errorMessage?:string;  
    successMessage?:string;
    token?: string;
    backFunction?:() => void;
    resetFunction?:any;
}

export interface ResetPasswordCardProps {
    errorMessage?:string;  
    successMessage?:string;
    token?: string;
    backFunction?:() => void;
    resetFunction?:any;
}

export interface FormResultProps{
    type: 'error' | 'success',
    message?: string;
}

export interface ForgotPasswordCardProps {
    errorMessage?:string;  
    successMessage?:string;
    resetFunction?:any; 
    backFunction?:any;
  }

 export interface ErrorCardProps {
    errorMessage?:string;
    backFunction?:any
  }

export interface LoginPageProps {
    showEmail?: boolean;
    showGoogleProvider?: boolean;
    showGithubProvider?: boolean;
    showLinkedinProvider?: boolean;
    onEmailSubmit?: any;
    onGoogleProviderSubmit?: any;
    onGithubProviderSubmit?: any;
    onLinkedinProviderSubmit?: any;
    forgotPasswordFunction?: any;
    backFunction?:()=>void;
    errorMessage?:string;
    title: string;
    description: string;
    quote: string,
    author: string,
    credential: string
}

export interface RegisterPageProps {
    showEmail?: boolean;
    showGoogleProvider?: boolean;
    showGithubProvider?: boolean;
    showLinkedinProvider?: boolean;
    onEmailSubmit?: any;
    onGoogleProviderSubmit?: any;
    onGithubProviderSubmit?: any;
    onLinkedinProviderSubmit?: any;
    backFunction?:() => void;
    errorMessage?:string;
    title: string;
    description: string;
    quote: string,
    author: string,
    credential: string
}

export interface ErrorPageProps {
    errorMessage: string;
    backFunction?:()=>void;
    quote: string;
    author: string;
    credential: string;
}

export interface ForgotPasswordPageProps {
    errorMessage?:string;  
    successMessage?:string;
    resetFunction?:any;
    backFunction?:()=>void;
    title: string;
    description: string;
    quote: string;
    author: string;
    credential: string;
}

export interface VerificationPageProps {
    errorMessage?:string;  
    successMessage?:string;
    backFunction?:()=>void;
    title: string;
    description: string;
    quote: string;
    author: string;
    credential: string;
}

export interface ResetPasswordPageProps {
    errorMessage?:string;  
    successMessage?:string;
    token?: string;
    backFunction?:()=>void;
    resetFunction?:any;
    title: string;
    description: string;
    quote: string;
    author: string;
    credential: string;
}

export interface UserProps {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  export interface SettingsDialogProps {
    children?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
  