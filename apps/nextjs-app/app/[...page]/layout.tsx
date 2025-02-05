"use client"
import Navbar from '@repo/ui/organisms/custom/landing/v1/Navbar';
import Footer from '@repo/ui/organisms/custom/landing/v1/Footer';
import {  githubLink, githubUsername, githubRepositoryName, title, logo, darkLogo, donateNowLink, creator, creatorLink } from '../../lib/constants/appDetails';
import { routeList, footerList} from "../../lib/constants/landing-page";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar
        routeList={routeList}
        githubLink={githubLink}
        githubUsername={githubUsername}
        githubRepositoryName={githubRepositoryName}
        title={title}
        logo={logo}
        darkLogo={darkLogo}
        donateNowLink={donateNowLink}
      />
      <main>{children}</main>
      <Footer
        footerList={footerList}
        creator={creator}
        creatorLink={creatorLink}
        title={title}
        logo={logo}
        darkLogo={darkLogo}
      />
    </div>
  );
};

export default Layout;