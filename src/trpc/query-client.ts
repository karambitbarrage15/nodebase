import {
  QueryClient,
  dehydrate,
  hydrate,
  defaultShouldDehydrateQuery,
} from '@tanstack/react-query';
import superjson from 'superjson';

// Create a QueryClient
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
    },
  });
}

// Define optional dehydrate/hydrate settings
export const dehydrateOptions = {
  shouldDehydrateQuery: (query: any) =>
    defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
  serializeData: superjson.serialize,
};

export const hydrateOptions = {
  deserializeData: superjson.deserialize,
};
