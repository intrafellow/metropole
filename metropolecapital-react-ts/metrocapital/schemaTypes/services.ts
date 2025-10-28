import {defineField, defineType} from 'sanity'

export const servicesType = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    // HERO
    defineField({
      name: 'title',
      title: 'Заголовок страницы',
      type: 'string',
      initialValue: 'Services',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lead',
      title: 'Подзаголовок (HERO)',
      type: 'text',
      rows: 3,
      initialValue: 'Every founder\'s journey is unique. We help you choose the smartest capital path, sharpen your story, and build the financial architecture to back it up.',
      validation: (rule) => rule.required(),
    }),
    
    // SERVICES GRID
    defineField({
      name: 'serviceItems',
      title: 'Услуги',
      type: 'array',
      of: [{
        type: 'object',
        name: 'serviceItem',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Название услуги',
          },
          {
            name: 'short',
            type: 'text',
            title: 'Краткое описание',
            rows: 2,
          },
          {
            name: 'details',
            type: 'array',
            title: 'Детали (rich text)',
            of: [{type: 'block'}],
          },
        ],
      }],
    }),
    
    // CTA SECTION
    defineField({
      name: 'ctaText',
      title: 'Текст над кнопкой CTA',
      type: 'string',
      initialValue: 'Interested in working together?',
    }),
  ],
})
