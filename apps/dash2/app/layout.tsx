import "./global.css";
import { Metadata } from "next";
import Head from "next/head";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import { RootProvider } from "fumadocs-ui/provider";
import Script from "next/script";
import WelcomePopup from "@/components/welcome-popup";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon-32x32.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    url: "https://ez-template1.vercel.app/",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/og.png", width: 800, height: 600, alt: siteConfig.name }],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <title>${siteConfig.name}</title>
          <meta property="og:url" content="https://easyui-premium.vercel.app/" />
          <meta property="og:image" content="/dashboard-dark.png" />
          <meta
            property="twitter:url"
            content="https://ez-template1.vercel.app/"
          />
          <meta property="twitter:image" content="/dashboard-dark.png" />          
        </Head>
       
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        > 
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <WelcomePopup />
              

              <SiteHeader />
              <RootProvider>{children}</RootProvider> 
              <SiteFooter className=" p-4 lg:p-0 md:p-0" />
              <TailwindIndicator />
            </ThemeProvider>
        </body>
        <Script
            src="https://cloud.umami.is/script.js"
            strategy="afterInteractive"
            data-website-id="5105f224-109b-475a-8ec6-096c73057762"
            defer
          />
          {/* Crisp Chatbox Script */}
          <Script strategy="lazyOnload">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="89ebfa18-f51c-4b35-8e66-181586efa9ce"; // Replace with your actual Crisp Website ID
            (function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
          `}
        </Script>        
        {/* Removed the script that sends a message on Crisp ready to prevent messages on every page refresh */}
      </html>
    </>
  );
}
