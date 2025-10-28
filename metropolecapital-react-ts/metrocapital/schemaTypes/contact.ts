import {defineField, defineType} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    // HERO
    defineField({
      name: 'title',
      title: 'Заголовок страницы',
      type: 'string',
      initialValue: 'Contact Us',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lead',
      title: 'Подзаголовок (HERO)',
      type: 'text',
      rows: 3,
      initialValue: 'Let\'s build your next big move together. Whether you\'re raising capital, refining your growth strategy, or exploring alternative funding models — we\'d love to hear from you.',
      validation: (rule) => rule.required(),
    }),
    
    // FORM SECTION
    defineField({
      name: 'formTitle',
      title: 'Заголовок формы',
      type: 'string',
      initialValue: 'Send us a message',
    }),
    
    // OFFICE INFO SECTION
    defineField({
      name: 'officeTitle',
      title: 'Заголовок секции офиса',
      type: 'string',
      initialValue: 'Phone',
    }),
    defineField({
      name: 'companyName',
      title: 'Название компании',
      type: 'string',
      initialValue: 'Metropole Capital Group',
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
      initialValue: '+1 (310) 464-1575',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'officePhoto',
      title: 'Фото офиса',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
