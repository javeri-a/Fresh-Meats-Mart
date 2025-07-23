import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'meat',
  title: 'Meat Product',
  type: 'document',
  fields: [
    defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  },
  validation: Rule => Rule.required(),
}),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(50),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'weight',
      title: 'Weight (Kg)',
      type: 'number',
      validation: Rule => Rule.required().min(0.1).max(100),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'discountPrice',
      title: 'Discount Price',
      type: 'number',
      description: 'Leave empty if no discount',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required().min(10).max(300),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule =>
        Rule.required()
          .min(1)
          .max(5)
          .precision(1)
          .error('Rating must be between 1 and 5 stars'),
    }),
  ],
})
