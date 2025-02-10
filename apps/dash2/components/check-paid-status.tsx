// components/CheckPaidStatus.tsx
"use client";
import { useUserHasPaid } from '@/utils/hooks/userhaspaid';
import React, { ReactNode } from 'react';

interface CheckPaidStatusProps {
  children: ReactNode;
}

const CheckPaidStatus: React.FC<CheckPaidStatusProps> = ({ children }) => {
  const hasPaid = useUserHasPaid();

  if (!hasPaid) {
    // Optionally, you can render something else here or return null to render nothing
    return null;
  }

  return <>{children}</>;
};

export default CheckPaidStatus;