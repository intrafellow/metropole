import {defineField, defineType} from 'sanity'

export const methologyType = defineType({
  name: 'methology',
  title: 'Methology',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок страницы',
      type: 'string',
      initialValue: 'Methodology',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lead',
      title: 'Описание (HERO)',
      type: 'text',
      rows: 3,
      initialValue: 'The Venture Triad of Trade-offs™ — a strategic compass that helps founders make the right capital decisions before they raise, spend, or scale.',
      validation: (rule) => rule.required(),
    }),
    
    // Diagram
    defineField({
      name: 'triadTitle',
      title: 'Заголовок диаграммы',
      type: 'string',
      initialValue: 'The Venture Triad of Trade-offs',
    }),
    defineField({
      name: 'triadDescription',
      title: 'Описание диаграммы',
      type: 'text',
      rows: 2,
      initialValue: 'Every founder faces three unavoidable trade-offs that define how ventures evolve (Silchenko)',
    }),
    
    // Top block
    defineField({
      name: 'blockTop',
      title: 'Верхний блок',
      type: 'object',
      fields: [
        defineField({
          name: 'emoji',
          title: 'Эмодзи',
          type: 'string',
          initialValue: '⚡',
        }),
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'string',
          initialValue: 'Scaling vs. Building',
        }),
        defineField({
          name: 'content',
          title: 'Содержимое',
          type: 'text',
          rows: 2,
          initialValue: 'Blitzscale for exit vs. Build for resilience',
        }),
      ],
    }),
    
    // Bottom-left block
    defineField({
      name: 'blockLeft',
      title: 'Левый нижний блок',
      type: 'object',
      fields: [
        defineField({
          name: 'emoji',
          title: 'Эмодзи',
          type: 'string',
          initialValue: '🔒',
        }),
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'string',
          initialValue: 'Patents vs. Open',
        }),
        defineField({
          name: 'content',
          title: 'Содержимое',
          type: 'text',
          rows: 2,
          initialValue: 'Protect IP vs. Open innovation',
        }),
      ],
    }),
    
    // Bottom-right block
    defineField({
      name: 'blockRight',
      title: 'Правый нижний блок',
      type: 'object',
      fields: [
        defineField({
          name: 'emoji',
          title: 'Эмодзи',
          type: 'string',
          initialValue: '💰',
        }),
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'string',
          initialValue: 'Traditional VC vs. Alternative Funding',
        }),
        defineField({
          name: 'content',
          title: 'Содержимое',
          type: 'text',
          rows: 2,
          initialValue: 'Equity vs. Non-equity / Hybrid models',
        }),
      ],
    }),
    
    // Center text
    defineField({
      name: 'centerTitle',
      title: 'Заголовок центра',
      type: 'string',
      initialValue: 'FOUNDERS',
    }),
    defineField({
      name: 'centerDescription',
      title: 'Описание центра',
      type: 'text',
      rows: 2,
      initialValue: 'Navigate tensions between competing forces',
    }),
    
    // Footer text
    defineField({
      name: 'footerText1',
      title: 'Текст подвала 1',
      type: 'string',
      initialValue: "We don't push founders down a single path",
    }),
    defineField({
      name: 'footerText2',
      title: 'Текст подвала 2',
      type: 'string',
      initialValue: 'We give them the clarity to choose their own',
    }),
    
    // Cards - исправлено: без вложенных типов, просто инлайн объекты
    defineField({
      name: 'cards',
      title: 'Секции-карточки',
      type: 'array',
      of: [{type: 'object', name: 'card', fields: [
        {name: 'title', type: 'string', title: 'Заголовок'},
        {name: 'content', type: 'text', title: 'Контент', rows: 4},
        {name: 'items', type: 'array', of: [{type: 'string'}], title: 'Список'},
      ]}],
    }),
  ],
})
