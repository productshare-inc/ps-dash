"use client";

import React, { useEffect } from "react";
import { useNotificationPolling } from "../hooks/useNotificationPolling";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingCard from "@repo/ui/organisms/custom/auth/v1/LoadingCard";

const Home = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Handle redirection based on session state
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/landing");
    }
  }, [status, router]);

  // Use polling if the user is authenticated
  if (status === "authenticated") {
    useNotificationPolling(session?.user?.id || "", 30000);
  }

  if (status === "loading") {
    return <LoadingCard title="Loading" description="Patience ia a virtue beyond anything" />;
  }


  return <div> 
    <p>Welcome!</p>
    </div>
};

export default Home;
