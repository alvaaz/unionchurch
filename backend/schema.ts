import { list } from '@keystone-next/keystone';
import { checkbox, password, relationship, text, timestamp, select } from '@keystone-next/keystone/fields';

export const lists = {
  Redirect: list({
    fields: {
      source: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      destination: text({ validation: { isRequired: true } }),
    },
  }),
  Person: list({
    fields: {
      name: text({validation: { isRequired: true }}),
      // Added an email and password pair to be used with authentication
      // The email address is going to be used as the identity field, so it's
      // important that we set both isRequired and isUnique
      email: text({validation: { isRequired: true}, isIndexed: 'unique'}),
      // The password field stores a hash of the supplied password, and
      // we want to ensure that all people have a password set, so we use
      // the isRequired flag.
      password: password({ validation: { isRequired: true }}),
    },
  }),
};
