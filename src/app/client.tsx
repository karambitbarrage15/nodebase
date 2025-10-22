'use client';

import { trpc } from '@/trpc/client';

export const Client = () => {
  const [users] = trpc.getUsers.useSuspenseQuery(undefined, {
    trpc: {
      ssr: false // Disable SSR for this query
    }
  });
  
  return (
    <div>
      Client Component: {JSON.stringify(users)}
    </div>
  );
};