import {defineField, defineType} from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Логотип',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    // HERO TITLE
    defineField({
      name: 'heroTitle',
      title: 'Заголовок HERO',
      type: 'string',
      initialValue: 'We help founders master capital',
      validation: (rule) => rule.required(),
    }),
    
    // HERO LINE
    defineField({
      name: 'heroLine',
      title: 'Описание HERO',
      type: 'string',
      initialValue: 'Strategic guidance, investor-ready financial models, and smart funding strategies',
      validation: (rule) => rule.required(),
    }),
    
    // HERO LINE SMALL
    defineField({
      name: 'heroLineSmall',
      title: 'Подтекст HERO',
      type: 'string',
      initialValue: 'Built by entrepreneurs, for entrepreneurs',
    }),
    
    // MAP SECTION
    defineField({
      name: 'mapTitle',
      title: 'Заголовок карты',
      type: 'string',
      initialValue: 'Our network is worldwide:',
    }),
    defineField({
      name: 'mapImage',
      title: 'Карта мира',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

