import {defineField, defineType} from 'sanity'

export const insightsType = defineType({
  name: 'insights',
  title: 'Insights',
  type: 'document',
  fields: [
    // HERO
    defineField({
      name: 'title',
      title: 'Заголовок страницы',
      type: 'string',
      initialValue: 'Insights',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lead',
      title: 'Подзаголовок (HERO)',
      type: 'text',
      rows: 2,
      initialValue: 'Articles, essays, and sharp commentary. Books, reports and practical frameworks for founders and capital partners.',
      validation: (rule) => rule.required(),
    }),
    
    // BOOK SECTION
    defineField({
      name: 'bookTitle',
      title: 'Заголовок секции книги',
      type: 'string',
      initialValue: 'A book by our founder, on smart funding for innovators',
    }),
    defineField({
      name: 'bookCover',
      title: 'Обложка книги',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bookDescription',
      title: 'Описание книги',
      type: 'text',
      rows: 4,
      initialValue: 'Raise and Rise is a goldmine of in-depth knowledge on modern capital sources and funding tools for startups. It covers venture capital, crowdfunding (including blockchain-based), royalty financing, family offices, and angel investors.',
    }),
    defineField({
      name: 'bookKeyTopics',
      title: 'Ключевые темы (список)',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'bookLink',
      title: 'Ссылка на Amazon',
      type: 'url',
      initialValue: 'https://www.amazon.com/Raise-Rise-Funding-Transformation-Blockchain-ebook/dp/B08H1CYCMY/',
    }),
    defineField({
      name: 'bookLinkText',
      title: 'Текст кнопки Amazon',
      type: 'string',
      initialValue: 'Find Raise and Rise on Amazon',
    }),
    
    // ARTICLES SECTION
    defineField({
      name: 'articlesTitle',
      title: 'Заголовок секции статей',
      type: 'string',
      initialValue: 'Articles by the Founder',
    }),
    defineField({
      name: 'articles',
      title: 'Статьи',
      type: 'array',
      of: [{
        type: 'object',
        name: 'article',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Заголовок статьи',
          },
          {
            name: 'description',
            type: 'text',
            title: 'Описание',
            rows: 3,
          },
          {
            name: 'url',
            type: 'url',
            title: 'Ссылка на статью',
          },
        ],
      }],
    }),
  ],
})
