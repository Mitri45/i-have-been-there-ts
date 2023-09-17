'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="min-h-screen flex flex-col">
      <SessionProvider>{children}</SessionProvider>
    </NextUIProvider>
  );
}
