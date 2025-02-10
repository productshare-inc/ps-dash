'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from './icons'
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { Lock, LockIcon } from 'lucide-react';
import { LockClosedIcon } from '@radix-ui/react-icons';


export function InteractiveButtons({ downloadLink, previewLink }: { downloadLink: string; previewLink: string }) {
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
          .from('profiles')
          .select('has_paid')
          .eq('id', userId)
          .single();
        if (error) {
          console.error('Error fetching profile data:', error.message);
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

  const handleDownload = () => {
    if (user && hasPaid) {
      const link = document.createElement('a');
      link.href = downloadLink;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Please purchase the template to download.");
    }
  };

  const handlePreview = () => {
    window.open(previewLink, '_blank');
  };

  return (
    <div className="flex justify-between">
      {hasPaid ? (
        <Button
          className="w-1/2 px-4 py-4 mr-2"
          type="button"
          onClick={handleDownload}
        >
          Download Template
        </Button>
      ) : (
        <Button
          className="w-1/2 px-4 py-4 mr-2 "
          type="button"
          onClick={() => window.location.href = '/pricing-section'}
        >
          <LockClosedIcon className='h-4 w-4 mr-2' />Buy Now 
        </Button>
      )}
      <Button
        className="w-1/2 px-4 py-4 border shadow-sm ml-2 hover:bg-accent hover:text-accent-foreground"
        variant="outline"
        type="button"
        onClick={handlePreview}
      >
        Live Preview
        <Icons.externalLink className="ml-1 p-1" />
      </Button>
    </div>
  )
}
