"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PrivyProvider } from '@privy-io/react-auth';
import { type ThemeProviderProps } from "next-themes";

export default function ThemeProvider({
                                        children,
                                        ...props
                                      }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      <PrivyProvider
        appId="cm2imp7wd01oy6v9bm2dqhzms"
        config={{
          appearance: {
            theme: 'light',
            accentColor: '#676FFF',
          },
          loginMethods: ['twitter', 'wallet', 'farcaster', 'email'],
        }}
      >
        {children}
      </PrivyProvider>
    </NextThemesProvider>
  );
}