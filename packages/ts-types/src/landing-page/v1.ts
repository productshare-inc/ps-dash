export interface RouteProps {
    href: string;
    label: string;
  }

  export interface ServiceProps {
    title: string;
    description: string;
  }

  export interface ProductProps {
    title: string;
    description: string;
    demo?: string;
    github?: string;
    image?: string;
    notion?: string;

}
    
  export interface StatisticsProps {
    users: string;
    subscribers: string;
    products: string;
    downloads: string;
  }

  export interface AboutProps  extends StatisticsProps{
    companyDetails: string;

}
export interface NavbarProps {
    donateNowLink?: string;
    routeList: RouteProps[];
    githubLink: string;
    githubUsername: string;
    githubRepositoryName: string;
    title: string;
    logo: string;
    darkLogo: string;
  }
export interface HeroProps {
    loginFunction: () => void;
    documentationLink: string;
    tagline: string;
    description: string;
    testimonials: TestimonialProps[];
    pricingList: PricingProps[];
    teamList: TeamProps[];
    featuresWithDescription: FeatureWithDescriptionProps[];
  }

export interface FeatureWithDescriptionProps {
    title: string;
    href?: string;
    description: string;
  }
  
export interface FeaturesProps {
    featuresWithDescription: FeatureWithDescriptionProps[];
    featureList: string[];
  }

  export interface AboutProps  extends StatisticsProps{
    companyDetails: string;

}
export interface LandingPageProps  extends NavbarProps, HeroProps{
    documentationLink: string;
    loginFunction: () => void;
    tagline: string;
    description: string;
    featuresWithDescription: FeatureWithDescriptionProps[];
    featureList: string[];
    testimonials: TestimonialProps[];
    pricingList: PricingProps[];
    FAQList: FAQProps[];
    footerList: FooterListProps;
    creator: string;
    creatorLink: string;
    teamList: TeamProps[];
    productsList?: ProductProps[];
    servicesList?: ServiceProps[];
    about?: AboutProps;
    supportEmailAddress: string;
  }

export interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

export enum PopularPlanType {
  NO = 0,
  YES = 1,
}

export interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  priceType: string;
  unregisteredHref: string;
  registeredHref: string;
  description: string;
  unregisteredButtonText: string;
  registeredButtonText: string;
  benefitList: string[];
}
export interface PrivacyPolicyProps {
  email: string;
  siteName: string;
  companyName: string;
  country: string;
  websiteUrl: string;
  lastUpdated: string;
}

export interface CancellationRefundPoliciesProps {
  email: string;
  siteName: string;
  companyName: string;
  websiteUrl: string;
  lastUpdated: string;
}

export interface CancellationRefundPoliciesPageProps extends CancellationRefundPoliciesProps, NavbarProps{

}

export interface PrivacyPolicyPageProps extends PrivacyPolicyProps, NavbarProps{

}

export interface TermsOfServiceProps {
  email: string;
  siteName: string;
  companyName: string;
  country: string;
  websiteUrl: string;
  lastUpdated: string;
  version: string;
  address: string;
}

export interface ContactUsProps {
  email: string;
  companyName: string;
  lastUpdated: string;
  contactNumber: string;
  address: string;
}

export interface ContactUsPageProps extends ContactUsProps, NavbarProps{
  
}

export interface TermsOfServicePageProps extends TermsOfServiceProps, NavbarProps{

}

export interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export interface FooterListProps {
  [key: string]: FooterProps[];
}

export interface FooterProps {
  label: string;
  href: string;
}

export interface FooterComponentProps {
  footerList: FooterListProps;
  creator: string;
  creatorLink: string;
  title: string;
  logo: string;
  darkLogo: string;
}

export interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

export interface SociaNetworkslProps {
  name: string;
  url: string;
}

export interface HeroCardsProps {
  testimonials: TestimonialProps[];
  pricingList: PricingProps[];
  featuresWithDescription: FeatureWithDescriptionProps[];
  teamList: TeamProps[];
}