import { list, graphql } from "@keystone-6/core";

import { allowAll } from "@keystone-6/core/access";
import { password, text, virtual } from "@keystone-6/core/fields";
import { cloudinaryImage } from "@keystone-6/cloudinary";
import type { Lists } from ".keystone/types";
import dotenv from "dotenv";

dotenv.config();

function buildSlug(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export const lists: Lists = {
  Redirect: list({
    access: allowAll,
    fields: {
      source: text({ validation: { isRequired: true }, isIndexed: "unique" }),
      destination: text({ validation: { isRequired: true } }),
    },
  }),
  Person: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: "unique" }),
      password: password({ validation: { isRequired: true } }),
    },
  }),
  Ministry: list({
    access: allowAll,
    fields: {
      name: text({ isIndexed: "unique", validation: { isRequired: true } }),
      slug: text({
        isIndexed: "unique",
        hooks: {
          resolveInput: ({
            operation,
            resolvedData,
            inputData,
          }: {
            operation: string;
            resolvedData: any;
            inputData: any;
          }) => {
            if (operation === "create" && !inputData.slug) {
              return buildSlug(inputData.name);
            }
            return resolvedData.slug;
          },
        },
        ui: {
          // createView: { fieldMode: "hidden" },
          // itemView: { fieldMode: "hidden" },
          listView: { fieldMode: "hidden" },
        },
      }),

      photo: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
          apiKey: process.env.CLOUDINARY_API_KEY as string,
          apiSecret: process.env.CLOUDINARY_API_SECRET as string,
          folder: process.env.CLOUDINARY_API_FOLDER as string,
        },
      }),
    },
  }),
};
