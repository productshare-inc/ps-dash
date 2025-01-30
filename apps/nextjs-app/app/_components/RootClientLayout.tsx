"use client";

import { ThemeProvider } from "@repo/ui/providers/theme-provider";
import { SessionProviders } from "../../providers/session-provider";
import { Toaster } from "@repo/ui/molecules/custom/v1/Toaster";
import { Analytics } from "@vercel/analytics/react";
import { TanstackProvider } from "../../providers/tanstack-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";
import LoadingCard from "@repo/ui/organisms/custom/auth/v1/LoadingCard";

const RootClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
        <LoadingCard title="Home Page" description="Patience ia a virtue beyond anything" />
    );
  }

  return (
    <>
      <SessionProviders>
        <TanstackProvider>
          <NextTopLoader color="#10b981" showSpinner={false} />
          <ThemeProvider defaultTheme="dark" attribute="class" enableSystem disableTransitionOnChange >
            {children}
            <Analytics />
            <SpeedInsights />
            <Toaster />
          </ThemeProvider>
        </TanstackProvider>
      </SessionProviders>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID as string}
      />
    </>
  );
};

export default RootClientLayout;
