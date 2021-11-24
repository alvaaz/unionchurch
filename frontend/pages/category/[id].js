import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';

export const CATEGORY = gql`
  query Query($where: CategoryWhereUniqueInput!) {
    category(where: $where) {
      name
      id
    }
  }
`;

export default function CategoryPage({ query }) {
  const { data, loading, error } = useQuery(CATEGORY, {
    variables: {
      where: {
        id: query.id,
      },
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { category } = data;
  return (
    <main style={{ margin: '3rem' }} className="container mx-auto px-8">
      <p>{category.name}</p>
    </main>
  );
}

CategoryPage.propTypes = {
  query: PropTypes.object,
};
