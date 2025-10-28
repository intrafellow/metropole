import {defineField, defineType} from 'sanity'

export const teamType = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    // HERO
    defineField({
      name: 'title',
      title: 'Заголовок страницы',
      type: 'string',
      initialValue: 'Our Team',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lead',
      title: 'Подзаголовок (HERO)',
      type: 'text',
      rows: 2,
      initialValue: 'Leaders, educators, and innovators shaping the new era of capital, strategy, and creativity.',
      validation: (rule) => rule.required(),
    }),
    
    // FOUNDER
    defineField({
      name: 'founder',
      title: 'Основатель',
      type: 'object',
      fields: [
        {
          name: 'photo',
          type: 'image',
          title: 'Фото',
          options: {hotspot: true},
        },
        {
          name: 'name',
          type: 'string',
          title: 'Имя',
          initialValue: 'Victoria Silchenko Robbins, PhD',
        },
        {
          name: 'role',
          type: 'string',
          title: 'Роль',
          initialValue: 'Founder & CEO | Economist | Entrepreneurial Finance Strategist',
        },
        {
          name: 'bio',
          type: 'array',
          title: 'Биография (параграфы)',
          of: [{type: 'block'}],
        },
        {
          name: 'linkedin',
          type: 'url',
          title: 'LinkedIn',
          initialValue: 'https://www.linkedin.com/in/victoriametropolecapital/',
        },
      ],
    }),
    
    // ADVISORY BOARD
    defineField({
      name: 'advisoryTitle',
      title: 'Заголовок Advisory Board',
      type: 'string',
      initialValue: 'Advisory Board',
    }),
    defineField({
      name: 'advisoryMembers',
      title: 'Члены Advisory Board',
      type: 'array',
      of: [{
        type: 'object',
        name: 'member',
        fields: [
          {
            name: 'photo',
            type: 'image',
            title: 'Фото',
            options: {hotspot: true},
          },
          {
            name: 'name',
            type: 'string',
            title: 'Имя',
          },
          {
            name: 'role',
            type: 'string',
            title: 'Роль',
          },
          {
            name: 'bio',
            type: 'text',
            title: 'Биография',
            rows: 4,
          },
          {
            name: 'linkedin',
            type: 'url',
            title: 'LinkedIn',
          },
        ],
      }],
    }),
  ],
})
