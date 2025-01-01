"use client"

import React from 'react'
import { useNotificationPolling } from "../hooks/useNotificationPolling";
import { useSession } from 'next-auth/react';
import { SupportChat } from "@repo/ui/organisms/custom/home/SupportChat";


const Home = () => {
  const { data:session} = useSession();
  useNotificationPolling(session?.user?.id || "", 30000);
  return (
    <div>
      <SupportChat/>
    </div>
  )
}

export default Home