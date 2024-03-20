import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'string',
      validation: (Rule) => Rule.required(),
      placeholder: 'https://sitename.com',
    }),

    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // }),
    defineField({
      name: 'discord',
      title: 'Discord',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string',
    }),
    defineField({
      name: 'telegram',
      title: 'Telegram',
      type: 'string',
    }),
    defineField({
      name: 'xapp',
      title: 'Xapp',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Contract Address',
      type: 'string',
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'usage',
      title: 'Usage',
      type: 'blockContent',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prompts',
      title: 'Prompts',
      type: 'blockContent',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'number',
    }),
    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
