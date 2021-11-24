<<<<<<< HEAD
import '../styles/global.css';
import PropTypes from 'prop-types';
import { useApollo } from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
=======
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import '../styles/global.css';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
>>>>>>> 83072a48 (new)
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

<<<<<<< HEAD
export default App;

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};
=======
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
>>>>>>> 83072a48 (new)
