import 'dotenv/config';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  virtual,
} from '@keystone-6/core/fields';

import { list, graphql } from '@keystone-6/core';

import { cloudinaryImage } from '@keystone-6/cloudinary';

import { document } from '@keystone-6/fields-document';

export const lists = {
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
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      lastname: text(),
      image: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
          apiKey: process.env.CLOUDINARY_API_KEY!,
          apiSecret: process.env.CLOUDINARY_API_SECRET!,
          folder: process.env.CLOUDINARY_API_FOLDER!,
        },
      }),
      password: password({ validation: { isRequired: true } }),
      posts: relationship({ ref: 'Post.author', many: true }),
    },
    ui: {
      listView: {
        initialColumns: ['name', 'posts'],
      },
    },
  }),
  Post: list({
    hooks: {
      resolveInput: async ({ resolvedData, operation, inputData, item }) => {
        if(operation === 'create') {
          const slug = resolvedData?.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-').toLowerCase();
          resolvedData!.slug = slug;
          return resolvedData;
        }
        if(operation === 'update') {
          if(!inputData.title) {
            const slug = item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-').toLowerCase();
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
            if(operation === 'update' && !item?.cover || operation === 'update' && resolvedData.cover === 'DbNull') {
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
      status: select({
        options: [
          { label: 'Published', value: 'published' },
          { label: 'Draft', value: 'draft' },
        ],
        defaultValue: 'draft',
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
