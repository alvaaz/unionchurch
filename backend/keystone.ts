import { config } from '@keystone-6/core';
import { lists } from './schema';
import { PORT, DATABASE_URL } from './config';
import { withAuth, session } from './auth';

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: DATABASE_URL,
      useMigrations: true,
    },
    server: {
      port: PORT,
      cors: {
        credentials: true,
        origin: [
          `localhost:3000`,
          'https://unionchurch.cl',
          'https://unionchurch-experimental.vercel.app'
        ],
      },
    },
    lists,
    session,
    graphql: {
      path: '/api/graphql',
      cors: {
        origin: [
          `localhost:3000`,
          'https://unionchurch.cl',
          'https://unionchurch-experimental.vercel.app'
        ],
        credentials: true,
      },
    },
  })
);
