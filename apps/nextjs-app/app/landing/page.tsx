"use client"
import LandingPage from "@repo/ui/templates/landing/v1/LandingPage";
import { routeList,featuresWithDescription,featureList, testimonials, 
  pricingList, FAQList, footerList, teamList} from "../../lib/constants/landing-page";
import { useRouter } from "next/navigation";

export default function Landing() {

  const githubUsername = "anoopkarnik"
  const githubRepositoryName = "turborepo-saas-boilerplate-code"
  const githubLink = "https://github.com/"+githubUsername+"/"+githubRepositoryName
  const loginPath= "/auth/login"
  const title = "TURBOREPO SAAS BOILERPLATE CODE"
  const logo = "/logo.png"
  const darkLogo = "/logo.png"
  const documentationLink = process.env.NEXT_PUBLIC_DOCUMENTATION_URL as string;
  const router = useRouter()
  const tagline = "Best Turborepo Micro SaaS Boilerplate Code"
  const description = "Build your Turborepo Micro SaaS Application effortlessly by keeping and modifying the required components, packages and apps to your project."
  const creator = "Anoop Karnik"
  const creatorLink = "https://www.linkedin.com/in/anoopkarnik/"
  const supportEmailAddress = "support@bsamaritan.com"
  
  const  loginFunction = () => {
      router.push(loginPath)
  }

  return (
    <div>
      <LandingPage 
        routeList={routeList} 
        githubLink={githubLink}
        githubUsername={githubUsername}
        githubRepositoryName={githubRepositoryName}
        documentationLink={documentationLink}
        title={title}
        logo={logo}
        darkLogo={darkLogo}
        loginFunction={loginFunction}
        tagline={tagline}
        description={description}
        featuresWithDescription={featuresWithDescription}
        featureList={featureList}
        testimonials={testimonials}
        pricingList={pricingList}
        FAQList={FAQList}
        footerList={footerList}
        creator={creator}
        creatorLink={creatorLink}
        teamList={teamList}
        supportEmailAddress={supportEmailAddress}
      />
    </div>
  );
}
