import {defineField, defineType} from 'sanity'

export const serviceStrategicAdvisoryType = defineType({
  name: 'serviceStrategicAdvisory',
  title: 'Service Strategic Advisory',
  type: 'document',
  fields: [
    // HERO
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      initialValue: 'Strategic Advisory',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lead',
      title: 'Подзаголовок (HERO)',
      type: 'text',
      rows: 3,
      initialValue: 'Funding strategy, financial modeling, and growth — practical and outcome-driven. We build the investor-ready story, model, and pipeline with your team.',
      validation: (rule) => rule.required(),
    }),

    // WHAT WE DO
    defineField({
      name: 'whatWeDoTitle',
      title: 'Заголовок секции "What we do"',
      type: 'string',
      initialValue: 'What we do',
    }),
    defineField({
      name: 'whatWeDoItems',
      title: 'What we do - элементы',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Заголовок',
          },
          {
            name: 'description',
            type: 'text',
            title: 'Описание',
            rows: 2,
          },
        ],
      }],
    }),

    // DELIVERABLES
    defineField({
      name: 'deliverablesTitle',
      title: 'Заголовок секции "Deliverables"',
      type: 'string',
      initialValue: 'Deliverables',
    }),
    defineField({
      name: 'deliverablesItems',
      title: 'Deliverables - элементы',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Заголовок',
          },
          {
            name: 'description',
            type: 'text',
            title: 'Описание',
            rows: 2,
          },
        ],
      }],
    }),
    defineField({
      name: 'pills',
      title: 'Пилсы (badges)',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: ['Founder-first', 'Data-driven', 'Execution-ready'],
    }),

    // PROCESS
    defineField({
      name: 'processTitle',
      title: 'Заголовок секции "Process"',
      type: 'string',
      initialValue: 'Process',
    }),
    defineField({
      name: 'processSteps',
      title: 'Шаги процесса',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'num',
            type: 'string',
            title: 'Номер',
          },
          {
            name: 'title',
            type: 'string',
            title: 'Заголовок',
          },
          {
            name: 'description',
            type: 'text',
            title: 'Описание',
            rows: 2,
          },
        ],
      }],
    }),

    // ENGAGEMENT
    defineField({
      name: 'engagementTitle',
      title: 'Заголовок секции "Engagement"',
      type: 'string',
      initialValue: 'Engagement',
    }),
    defineField({
      name: 'engagementItems',
      title: 'Engagement - элементы',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Заголовок',
          },
          {
            name: 'description',
            type: 'text',
            title: 'Описание',
            rows: 2,
          },
        ],
      }],
    }),

    // FAQ
    defineField({
      name: 'faqTitle',
      title: 'Заголовок секции FAQ',
      type: 'string',
      initialValue: 'FAQ',
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ - элементы',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Вопрос',
          },
          {
            name: 'description',
            type: 'text',
            title: 'Ответ',
            rows: 3,
          },
        ],
      }],
    }),
  ],
})

