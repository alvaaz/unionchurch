/*
Welcome to the schema! The schema is the heart of Keystone.

Here we define our 'lists', which will then be used both for the GraphQL
API definition, our database tables, and our Admin UI layout.

Some quick definitions to help out:
A list: A definition of a collection of fields with a name. For the starter
  we have `User`, `Post`, and `Tag` lists.
A field: The individual bits of data on your list, each with its own type.
  you can see some of the lists in what we use below.

*/

// Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { list, graphql } from '@keystone-next/keystone';
import 'dotenv/config';

// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  virtual,
  image
} from '@keystone-next/keystone/fields';

import { cloudinaryImage } from '@keystone-next/cloudinary';

// The document field is a more complicated field, so it's in its own package
// Keystone aims to have all the base field types, but you can make your own
// custom ones.
import { document } from '@keystone-next/fields-document';

// We have a users list, a blogs list, and tags for blog posts, so they can be filtered.
// Each property on the exported object will become the name of a list (a.k.a. the `listKey`),
// with the value being the definition of the list, including the fields.
export const lists = {
  // Here we define the user list.
  Category: list({
    fields: {
      name: text({
        validation: {
          isRequired: true
        }
      }),
      posts: relationship({ ref: 'Post.category', many: true }),
    }
  }),
  User: list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      image: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
          apiKey: process.env.CLOUDINARY_API_KEY!,
          apiSecret: process.env.CLOUDINARY_API_SECRET!,
          folder: process.env.CLOUDINARY_API_FOLDER!,
        },
      }),
      // The password field takes care of hiding details and hashing values
      password: password({ validation: { isRequired: true } }),
      // Relationships allow us to reference other lists. In this case,
      // we want a user to have many posts, and we are saying that the user
      // should be referencable by the 'author' field of posts.
      // Make sure you read the docs to understand how they work: https://keystonejs.com/docs/guides/relationships#understanding-relationships
      posts: relationship({ ref: 'Post.author', many: true }),
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      listView: {
        initialColumns: ['name', 'posts'],
      },
    },
  }),
  Post: list({
    hooks: {
      resolveInput: async ({ resolvedData, operation, inputData, item }) => {
        console.log(inputData, 'inputData')
        console.log(resolvedData, 'resolvedData')
        console.log(item, 'item')
        if(operation === 'create') {
          const slug = resolvedData?.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-').toLowerCase();
          resolvedData!.slug = slug;
          return resolvedData;
        }
        if(operation === 'update') {
          if(!inputData.title) {
            const slug = item?.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-').toLowerCase();
            resolvedData!.slug = slug;
            return resolvedData;
          }
          const slug = inputData?.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-').toLowerCase();
          resolvedData!.slug = slug;
          return resolvedData;
        }
      },
    },
    fields: {
      title: text({
        isIndexed: 'unique',
        validation: {
          isRequired: true,
        }
      }),
      cover: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
          apiKey: process.env.CLOUDINARY_API_KEY!,
          apiSecret: process.env.CLOUDINARY_API_SECRET!,
          folder: process.env.CLOUDINARY_API_FOLDER!,
        },
        hooks: {
          validateInput: ({ resolvedData, addValidationError, operation, item }) => {
            if(operation === 'create' && !resolvedData.cover) {
              addValidationError('Debes seleccionar una imagen');
            }
            if(operation === 'update' && !item.cover || operation === 'update' && resolvedData.cover === 'DbNull') {
              addValidationError('Debes seleccionar una imagen');
            }
          }
        }
      }),
      excerpt: virtual({
        field: graphql.field({
          type: graphql.String,
          args: {
            length: graphql.arg({
              type: graphql.nonNull(graphql.Int),
              defaultValue: 200
            }),
          },
          resolve(item: any, { length }: { length: number }) {
            // TODO: This is a hack to get the excerpt to work. I should
            // create loop to get the some paragraph excerpt.
            if(item.content[0].type === 'paragraph') {
              const content = item.content[0].children[0].text as string;
              if (content.length <= length) {
                return content;
              } else {
                return content.slice(0, length - 3) + '...';
              }
            }
            return null
          },
        }),
        ui: { query: '(length: 20)' },
      }),
      slug: text({
        isIndexed: 'unique',
        isFilterable: true,
        ui: {
          createView: {
            fieldMode: 'hidden'
          },
          itemView: {
            fieldMode: 'read'
          },
          listView: {
            fieldMode: 'read'
          }
        },

      }),
      // Having the status here will make it easy for us to choose whether to display
      // posts on a live site.
      status: select({
        options: [
          { label: 'Published', value: 'published' },
          { label: 'Draft', value: 'draft' },
        ],
        // We want to make sure new posts start off as a draft when they are created
        defaultValue: 'draft',
        // fields also have the ability to configure their appearance in the Admin UI
        ui: {
          displayMode: 'segmented-control',
        },
      }),
      // The document field can be used for making highly editable content. Check out our
      // guide on the document field https://keystonejs.com/docs/guides/document-fields#how-to-use-document-fields
      // for more information
      content: document({
        formatting: {
          alignment: true,
          inlineMarks: {
            bold: true,
            italic: true
          },
          headingLevels: true,
          listTypes: true,
          softBreaks: true
        },

        links: true,
        dividers: true,
      }),
      publishDate: timestamp({
        hooks: {
          resolveInput: ({ resolvedData }) => {
            if (resolvedData.status === 'published') {
              return new Date();
            }
            return null
          }
        },
        ui: {
          itemView: {
            fieldMode: 'read'
          },
          listView: {
            fieldMode: 'read'
          },
          createView: {
            fieldMode: 'hidden'
          }
        }

      }),
      // Here is the link from post => author.
      // We've configured its UI display quite a lot to make the experience of editing posts better.
      category: relationship({
        ref: 'Category.posts',
        ui: {
          inlineConnect: true,
          displayMode: 'cards',
          cardFields: ['name'],
          inlineEdit: { fields: ['name'] },
          linkToItem: true,
          inlineCreate: { fields: ['name'] },
        },
      }),
      author: relationship({
        ref: 'User.posts',
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'email'],
          inlineEdit: { fields: ['name', 'email'] },
          linkToItem: true,
          inlineCreate: { fields: ['name', 'email'] },
        },
      }),
    },
  }),

};
