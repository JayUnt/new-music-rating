import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { SessionContextProvider } from '@supabase/auth-helpers-react';
// import { useRouter } from 'next/router';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  // Create a new supabase browser client on every first render.

  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
