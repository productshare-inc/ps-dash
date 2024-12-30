"use client"

import React from 'react'
import { useNotificationPolling } from "../hooks/useNotificationPolling";
import { useSession } from 'next-auth/react';

const Home = () => {
  const { data:session} = useSession();
  const notifications = useNotificationPolling(session?.user?.id || "", 30000);
  return (
    <div>Home</div>
  )
}

export default Home