'use client';

import { PropsWithChildren } from 'react';

import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <div>{children}</div>
    </SessionProvider>
  );
};

export default AuthProvider;
