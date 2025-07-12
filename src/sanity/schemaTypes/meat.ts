// schemas/meat.ts
import { Rule } from '@sanity/types';
import Rule_ from 'postcss/lib/rule';

export default {
    name: 'meat',
    title: 'Meat Products',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        description: 'The name of the meat product (e.g., Angus Beef Steak)',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A detailed description of the meat product.',
      },
      {
        name: "shortDescription",
        title: "Short Description",
        type: "text",
        rows: 2, 
        validation: (Rule:Rule) => Rule.max(150), // 150 characters tak limit
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Price of the product.',
        validation: (Rule:Rule) => Rule.min(0).max(1000).warning('Price should be between 0 and 1000'),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'An image of the meat product.',
      },
      {
        name: 'weight',
        title: 'Weight',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
        description: 'List of available weights for this product (e.g., 500g, 1kg, 2kg).',
      },
      {
        name: 'productType',
        title: 'Product Type',
        type: 'string',
        description: 'Type of meat (e.g., Beef, Chicken, Lamb)',
        options: {
          list: [
            { title: 'Beef', value: 'beef' },
            { title: 'Chicken', value: 'chicken' },
            { title: 'Lamb', value: 'lamb' },
          ],
          layout: 'radio',
        },
      },
      {
        name: 'isPremium',
        title: 'Is Premium?',
        type: 'boolean',
        description: 'Is this product a premium quality meat?',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        description: 'Product rating (e.g., 4.5 stars)',
        validation: (Rule:Rule) => Rule.min(0).max(5).precision(1).warning('Rating should be between 0 and 5'),
      },
      {
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'reviewer',
                title: 'Reviewer Name',
                type: 'string',
              },
              {
                name: 'review',
                title: 'Review Text',
                type: 'text',
              },
              {
                name: 'rating',
                title: 'Rating',
                type: 'number',
                validation: (Rule :Rule) => Rule.min(0).max(5).precision(1),
              },
            ],
          },
        ],
        description: 'Customer reviews for this product.',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        description: 'The date when the product was created.',
      },
    ],
  };
  