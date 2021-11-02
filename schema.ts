import { list } from '@keystone-next/keystone';
import { text } from '@keystone-next/keystone/fields';

export const lists = {
  Redirect: list({
    fields: {
      source: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      destination: text({ validation: { isRequired: true } }),
    },
  })
};
