import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

// SOURCE : https://www.apollographql.com/blog/apollo-client/next-js/building-a-next-js-app-with-slash-graphql/

let apolloClient;

// ############################################################

const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === 'development'
      ? process.env.ENDPOINT
      : process.env.PRODENDPOINT,
  credentials: 'include',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// ############################################################
// ############################################################
function createApolloClient(token = null) {
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        ...(!!token && { authorization: `Bearer ${token}` }),
        // retirer token si y en a pas, sinon erreur
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // set to true for SSR
    link: from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache(),
  });
}

// ############################################################
// ############################################################
// ############################################################
export function initializeApollo(initialState = null, token) {
  const _apolloClient = apolloClient ?? createApolloClient(token);

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

// ############################################################
// ############################################################
// ############################################################
export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
