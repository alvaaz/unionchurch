import { query } from '.keystone/api';

export default function ShortIdPage() {
  return <div>ShortID Redirect</div>;
}

export async function getServerSideProps({ params }) {
  const { url } = params;
  const data = await query.Redirect.findOne({
    where: {
      source: url,
    },
    query: 'destination',
  });
  console.log(data);
  if (!data) {
    return {
      redirect: { destination: '/' },
    };
  }

  return {
    redirect: {
      destination: data.destination,
    },
  };
}
