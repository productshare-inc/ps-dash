"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "react-feather"; // Assuming this is the correct import for the icon
import { cn } from "@/lib/utils";
import ComponentWrapper from "./ui/component-wrapper";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { LockClosedIcon } from "@radix-ui/react-icons";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  Preview: React.ReactNode;
  Code: string;
  align?: "center" | "start" | "end";
  preview?: boolean;
}

export function InteractiveCode({
  Preview,
  Code,
  align = "center",
  preview = false,
  ...props
}: ComponentPreviewProps) {
  const [key, setKey] = useState(0); // State to trigger re-render of preview
  const [user, setUser] = useState<User | null>(null);
  const [hasPaid, setHasPaid] = useState<boolean>(false);
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session && session.user) {
        setUser(session.user);
        const userId = session.user.id;
        const { data: profileData, error } = await supabase
          .from("profiles")
          .select("has_paid")
          .eq("id", userId)
          .single();
        if (error) {
          console.error("Error fetching profile data:", error.message);
          setHasPaid(false);
        } else {
          setHasPaid(profileData.has_paid);
        }
      } else {
        setUser(null);
        setHasPaid(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  return (
    <div className={cn("relative my-4 flex flex-col space-y-2 ")} {...props}>
      <Tabs defaultValue="preview" className="relative mr-auto w-full ">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="preview"
          className="relative rounded-md py-10 border rounded-lg shadow px-4"
          key={key}
        >
          <Button
            onClick={() => setKey((prev) => prev + 1)}
            className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
            variant="ghost"
          >
            <RotateCcw size={16} />
          </Button>
          <React.Suspense
            fallback={
              <div className="flex items-center text-sm text-muted-foreground">
                Loading...
              </div>
            }
          >
            {Preview}
          </React.Suspense>
        </TabsContent>
        <TabsContent value="code">
          {/* {hasPaid ? ( */}
            <div className="flex flex-col space-y-4">
              <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {Code}

              </div>
            </div>
          {/* ) : ( */}
            <div className="flex flex-col justify-center items-center text-sm text-muted-foreground">
              <Button
                className="w-1/2 px-4 py-4 mr-2 "
                type="button"
                onClick={() => (window.location.href = "/pricing-section")}
              >
                <LockClosedIcon className="h-4 w-4 mr-2" />
                Buy Now
              </Button>
              <span className="py-2 text-md">
                Please purchase to view the code.
              </span>
            </div>
          {/* )} */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
