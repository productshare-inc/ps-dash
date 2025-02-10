"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckIcon, ChevronRight } from "lucide-react";
import { User } from "@supabase/supabase-js";

import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { createClient } from "@/utils/supabase/client";
import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button";
import { cn } from "@/lib/utils";
import { UserAvatar } from "./avatar-component";

export function SiteHeader() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function getInitialSession() {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    }

    getInitialSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    // Manually update the user state to null after signing out
    setUser(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-transparent backdrop-blur supports-[backdrop-filter]:backdrop-blur p-1">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <div className="hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://discord.gg/7yTP7KGK", "_blank")}
              >
                <Icons.discord width="23" height={23} className="text-gray-500 dark:text-gray-500" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://github.com/DarkInventor/easy-ui", "_blank")}
              >
                <Icons.github width="20" className="text-gray-500 dark:text-gray-500" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://x.com/kathanmehtaa", "_blank")}
              >
                <Icons.twitter width="20" className="text-gray-500 dark:text-gray-500" />
              </Button>
              <ThemeToggle />
            </div>
            <div className="block sm:hidden">
              <ThemeToggle />
            </div>
            {loading ? (
              <div className="h-8 w-20 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
            ) : user ? (
              <UserAvatar user={user} onSignOut={handleSignOut} />
            ) : (
              <Link
                href="/login"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "sm",
                  }),
                  "gap-2 whitespace-pre",
                  "group relative text-sm font-semibold rounded-lg ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
                )}
              >
                Login
                <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            )}
            <div className="hidden lg:block">
              <Link
                href="/pricing-section"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "sm",
                  }), 
                  "gap-2 whitespace-pre",
                  "group relative text-sm font-semibold rounded-lg ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
                )}
              >
                Easy UI Premium
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}