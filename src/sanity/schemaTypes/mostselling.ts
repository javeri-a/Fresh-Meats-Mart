
// import { Rule } from '@sanity/types';

// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'pic',
//       title: 'Product Image',
//       type: 'image',
//       options: { hotspot: true },
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'name',
//       title: 'Product Name',
//       type: 'string',
//       validation: (Rule) =>
//         Rule.required().min(3).max(100).error('Product name is required'),
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'name',
//         maxLength: 96,
//       },
//       validation: (Rule) =>
//         Rule.required().error('Slug is required'),
//     },
//     {
//       name: 'rating',
//       title: 'Rating',
//       type: 'number',
//       validation: (Rule) =>
//         Rule.min(0).max(5).error('Rating must be between 0 and 5'),
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       validation: (Rule) =>
//         Rule.required().positive().error('Price must be a positive number'),
//     },
//     {
//       name: 'discountPrice',
//       title: 'Discount Price',
//       type: 'number',
//       description: 'Optional discounted price',
//     },
//     {
//       name: 'kg',
//       title: 'Kilograms',
//       type: 'number',
//       description: 'Weight in kg',
//     },
//     {
//       name: 'gram',
//       title: 'Grams',
//       type: 'number',
//       description: 'Weight in grams',
//     },
//   ],
// };



 export const mostsell = {
  name: 'selling',
  title: 'selling',
  type: 'document',
  fields: [
    {
      name: 'pic',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule =>
        Rule.required().min(3).max(100).error('Product name is required'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: Rule => Rule.required().error('Slug is required'),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.min(0).max(5).error('Rating must be between 0 and 5'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().positive().error('Price must be a positive number'),
    },
    {
      name: 'discountPrice',
      title: 'Discount Price',
      type: 'number',
      description: 'Optional discounted price',
    },
    {
      name: 'kg',
      title: 'Kilograms',
      type: 'number',
      description: 'Weight in kg',
    },
    {
      name: 'gram',
      title: 'Grams',
      type: 'number',
      description: 'Weight in grams',
    },
  ],
};
