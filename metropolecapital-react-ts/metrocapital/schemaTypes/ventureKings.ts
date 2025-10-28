import {defineField, defineType} from 'sanity'

export const ventureKingsType = defineType({
  name: 'ventureKings',
  title: 'Venture Kings',
  type: 'document',
  fields: [
    // HERO
    defineField({
      name: 'logo',
      title: 'Логотип Venture Kings',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'Venture Kings™',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lead',
      title: 'Подзаголовок (HERO)',
      type: 'text',
      rows: 3,
      initialValue: 'Venture Kings is a startup simulation game that puts players directly in the founder\'s seat, forcing them to make the same strategic and financial trade-offs real entrepreneurs face.',
      validation: (rule) => rule.required(),
    }),
    
    // CARDS
    defineField({
      name: 'whyCard',
      title: 'Карточка "Why"',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Заголовок',
          initialValue: 'Why Venture Kings™',
        },
        {
          name: 'items',
          type: 'array',
          title: 'Список',
          of: [{type: 'text'}],
        },
      ],
    }),
    defineField({
      name: 'howCard',
      title: 'Карточка "How"',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Заголовок',
          initialValue: 'How It Works',
        },
        {
          name: 'description',
          type: 'array',
          title: 'Описание',
          of: [{type: 'block'}],
        },
      ],
    }),
    defineField({
      name: 'whoCard',
      title: 'Карточка "Who"',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Заголовок',
          initialValue: 'Who It\'s For',
        },
        {
          name: 'items',
          type: 'array',
          title: 'Список',
          of: [{type: 'string'}],
        },
      ],
    }),
    defineField({
      name: 'uniqueCard',
      title: 'Карточка "Unique"',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Заголовок',
          initialValue: 'What Makes It Unique',
        },
        {
          name: 'description',
          type: 'array',
          title: 'Описание',
          of: [{type: 'block'}],
        },
      ],
    }),
    
    // CTA
    defineField({
      name: 'ctaTitle',
      title: 'Заголовок CTA',
      type: 'string',
      initialValue: 'Bring Venture Kings™ to Your Organization',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Описание CTA',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})

