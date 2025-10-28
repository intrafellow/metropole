import {defineField, defineType} from 'sanity'

export const eventsType = defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок страницы',
      type: 'string',
      initialValue: 'Events',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lead',
      title: 'Подзаголовок (HERO)',
      type: 'text',
      rows: 2,
      initialValue: 'Shaping the Global Funding Conversation Since 2012',
      validation: (rule) => rule.required(),
    }),
    
    // Main content card
    defineField({
      name: 'cardTitle',
      title: 'Заголовок карточки',
      type: 'string',
      initialValue: 'Over a Decade of Global Engagement',
    }),
    defineField({
      name: 'cardDescription',
      title: 'Описание карточки',
      type: 'text',
      rows: 4,
      initialValue: 'For more than a decade, we\'ve been actively engaged with the global investment and startup community — bringing together visionary founders, investors, policymakers, and thought leaders to explore new models of capital formation.',
    }),
    defineField({
      name: 'cardItems',
      title: 'Список в карточке',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'cardFooterTitle',
      title: 'Заголовок в футере карточки',
      type: 'string',
      initialValue: 'Inspiring the next generation of founders to rethink capital and create global impact',
    }),
    
    // Gallery section
    defineField({
      name: 'galleryTitle',
      title: 'Заголовок галереи',
      type: 'string',
      initialValue: 'Highlights & Community',
    }),
    defineField({
      name: 'galleryDescription',
      title: 'Описание галереи',
      type: 'text',
      rows: 3,
      initialValue: 'Over the years, our events have united innovators, investors, and policymakers across continents. Here\'s a glimpse into the energy, connection, and collaboration that define our global community.',
    }),
    
    // Галерея с изображениями для загрузки в Sanity
    defineField({
      name: 'galleryItems',
      title: 'Фотографии галереи',
      type: 'array',
      of: [{
        type: 'object',
        name: 'galleryItem',
        fields: [
          {
            name: 'image',
            type: 'image',
            title: 'Изображение',
          },
          {
            name: 'alt',
            type: 'string',
            title: 'Alt текст',
          },
        ],
        preview: {
          select: {
            title: 'alt',
            media: 'image',
          },
        },
      }],
    }),
  ],
})
