/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-next/keystone';

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema';

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth';

import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/unionchurch';

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    images: {
      upload: 'local',
      local: {
        storagePath: 'public/images',
        baseUrl: '/images',
      },
    },
    server: {
      cors: { origin: ['http://localhost:7777'], credentials: true }
    },
    db: {
      provider: 'postgresql',
      url: 'postgres://alvarogoederivera:@localhost:5432/unionchurch',
      enableLogging: true,
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);