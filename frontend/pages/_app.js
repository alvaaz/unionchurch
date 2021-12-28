import '../styles/global.css';
import PropTypes from 'prop-types';
import { useApollo } from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};
