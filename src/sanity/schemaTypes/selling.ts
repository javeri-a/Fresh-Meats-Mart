import { defineField, defineType } from "sanity";

export default defineType({
  name: "top products",
  type: "document",
  title: "top products",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Product Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price (PKR)",
      description: "Original price of the chicken per unit",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "salePrice",
      type: "number",
      title: "Sale Price (PKR)",
      description: "Discounted price (if applicable)",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "weight",
      type: "object",
      title: "Weight",
      fields: [
        defineField({
          name: "value",
          type: "number",
          title: "Weight Value",
          validation: (Rule) => Rule.required().min(0.1),
        }),
        defineField({
          name: "unit",
          type: "string",
          title: "Unit",
          options: { list: ["kg", "g"] },
        }),
      ],
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Short Description",
      description: "Brief details about the chicken product",
    }),
    defineField({
      name: "details",
      type: "array",
      title: "Detailed Information",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug (Detail Page URL)",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Product Image",
      options: { hotspot: true },
    }),
  ],
});
