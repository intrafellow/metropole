/**
 * Скрипт для автоматического импорта всего контента в Sanity
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

const contents = [
  {
    _type: 'about',
    _id: 'about-document',
    title: 'About Us',
    lead: 'Based in Los Angeles, we inspire and empower entrepreneurs, innovators, and creators around the globe with modern funding tools and strategic insight, enabling them to design and execute their own financing strategies with confidence, independence, and vision.',
    whyUs: {
      title: 'Why Us',
      description: 'Most advisors stop at venture capital. We don\'t. We work with founders who raise through VC, but we also open the door to alternative and hybrid funding models, including:',
      items: [
        'Crowdfunding / Equity Crowdfunding',
        'Revenue sharing',
        'Non-dilutive financing (grants, corporate programs, strategic partnerships)',
        'Emerging funding models',
      ],
    },
    ourGoals: {
      title: 'Our Goals',
      items: [
        'Equip founders with the knowledge and tools to work with capital on their own terms.',
        'Help ventures craft funding strategies aligned with their business models, not external pressures.',
        'Build a global founder network driven by informed, independent financing decisions.',
        'Bridge the gap between traditional finance and emerging models to create smarter funding ecosystems.',
      ],
    },
    ourValues: {
      title: 'Our Values',
      description: 'We believe in clarity, integrity, and real impact. We\'re founders ourselves, and we understand the high stakes of building something that matters. Most innovators today face a defining dilemma: build a multi-generational company that endures, or build an asset for sale. We help founders navigate that choice with clarity, strategy, and control, grounding every engagement in trust and transparency.',
    },
  },
  {
    _type: 'methology',
    _id: 'methology-document',
    title: 'Methology',
    lead: 'Our methodology for helping founders raise capital.',
    content: [
      {
        sectionTitle: 'Strategic Planning',
        sectionContent: 'We help you create a comprehensive funding strategy.',
      },
    ],
  },
  {
    _type: 'contact',
    _id: 'contact-document',
    title: 'Contact Us',
    lead: 'Get in touch with us.',
    phone: 'Ph: 310.464.1575',
    email: 'info@metrocapitalgroup.com',
    address: 'Los Angeles, CA',
  },
  {
    _type: 'events',
    _id: 'events-document',
    title: 'Events',
    content: [],
  },
  {
    _type: 'insights',
    _id: 'insights-document',
    title: 'Insights',
    content: [],
  },
  {
    _type: 'services',
    _id: 'services-document',
    title: 'Services',
    content: [],
  },
  {
    _type: 'team',
    _id: 'team-document',
    title: 'Team',
    members: [],
  },
]

async function importAllContent() {
  console.log('🚀 Начинаю импорт ВСЕГО контента в Sanity...\n')

  for (const content of contents) {
    try {
      await client.createOrReplace(content)
      console.log(`✅ ${content._type} импортирован`)
    } catch (error) {
      console.error(`❌ Ошибка при импорте ${content._type}:`, error)
    }
  }

  console.log('\n🎉 ВСЁ импортировано! Обнови Studio в браузере.')
}

importAllContent()

