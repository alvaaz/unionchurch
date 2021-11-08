import { gql } from '@apollo/client';

import { initializeApollo } from '../lib/apolloClient';

const GET_DESTINATION = gql`
  query Destination($source: String!) {
    redirect(where: { source: $source }) {
      destination
    }
  }
`;

export default function ShortIdPage() {
  return <div>ShortID Redirect</div>;
}

export async function getServerSideProps({ params }) {
  const apolloClient = initializeApollo(null);
  const { url: source } = params;

  const { data } = await apolloClient.query({
    query: GET_DESTINATION,
    variables: { source },
  });

  console.log(data);

  // if (!data) {
  //   return {
  //     redirect: { destination: '/' },
  //   };
  // }

  // return {
  //   redirect: {
  //     destination: data.destination,
  //   },
  // };
}
