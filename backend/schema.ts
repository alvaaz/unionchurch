import { list } from '@keystone-6/core';
import { password, text } from '@keystone-6/core/fields';

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
      email: text({validation: { isRequired: true}, isIndexed: 'unique'}),
      password: password({ validation: { isRequired: true }}),
    },
  }),
};
