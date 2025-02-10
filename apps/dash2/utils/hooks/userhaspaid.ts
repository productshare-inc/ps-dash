"use client";

// utils/hooks/userhaspaid.ts
import { useState, useEffect } from 'react';
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

export const useUserHasPaid = () => {
  const [hasPaid, setHasPaid] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session && session.user) {
        setUser(session.user);
        const userId = session.user.id;
        const { data: profileData, error } = await supabase
          .from('profiles')
          .select('has_paid')
          .eq('id', userId)
          .single();
        if (error) {
          console.error('Error fetching profile data:', error.message);
          setHasPaid(false);
        } else {
          setHasPaid(!!profileData?.has_paid);
        }
      } else {
        setUser(null);
        setHasPaid(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  return hasPaid;
};