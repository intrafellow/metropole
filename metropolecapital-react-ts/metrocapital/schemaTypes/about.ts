import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lead',
      title: 'Описание (первый абзац)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'whyUs',
      title: 'Раздел "Why Us"',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Описание',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'items',
          title: 'Список преимуществ',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),
    defineField({
      name: 'ourGoals',
      title: 'Раздел "Our Goals"',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        }),
        defineField({
          name: 'items',
          title: 'Список целей',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),
    defineField({
      name: 'ourValues',
      title: 'Раздел "Our Values"',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Описание',
          type: 'text',
          rows: 4,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

