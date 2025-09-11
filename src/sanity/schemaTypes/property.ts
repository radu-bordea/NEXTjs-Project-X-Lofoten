// sanity/schemaTypes/property.ts
import { defineType, defineField } from "sanity";

const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({ name: "brand", type: "string" }),
    defineField({ name: "title", type: "string" }),

    // Contacts: [{ email, phone }]
    defineField({
      name: "contacts",
      title: "Contacts",
      type: "array",
      of: [
        {
          type: "object",
          name: "contact",
          title: "Contact",
          fields: [
            {
              name: "email",
              title: "Email",
              type: "string",
              validation: (rule) => rule.required().email(),
            },
            {
              name: "phone",
              title: "Phone",
              type: "string",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),

    // Gallery: [{ image + alt }]
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt text" }],
        },
      ],
    }),

    // Optional so client can modify
    // defineField({ name: "airbnbUrl", type: "url" }),
  ],
});

export default property;
