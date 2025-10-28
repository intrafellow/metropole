/**
 * Импорт Methology без вложенных типов
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

const methologyContent = {
  _type: 'methology',
  _id: 'methology-document',
  title: 'Methodology',
  lead: 'The Venture Triad of Trade-offs™ — a strategic compass that helps founders make the right capital decisions before they raise, spend, or scale.',
  
  triadTitle: 'The Venture Triad of Trade-offs',
  triadDescription: 'Every founder faces three unavoidable trade-offs that define how ventures evolve (Silchenko)',
  
  blockTop: {
    emoji: '⚡',
    title: 'Scaling vs. Building',
    content: 'Blitzscale for exit vs. Build for resilience',
  },
  
  blockLeft: {
    emoji: '🔒',
    title: 'Patents vs. Open',
    content: 'Protect IP vs. Open innovation',
  },
  
  blockRight: {
    emoji: '💰',
    title: 'Traditional VC vs. Alternative Funding',
    content: 'Equity vs. Non-equity / Hybrid models',
  },
  
  centerTitle: 'FOUNDERS',
  centerDescription: 'Navigate tensions between competing forces',
  
  footerText1: "We don't push founders down a single path",
  footerText2: 'We give them the clarity to choose their own',
  
  cards: [
    {
      _key: 'card-1',
      title: '1. Why Trade-offs Define Real Ventures',
      content: 'Most startup advice starts with funding rounds. We start earlier.',
      items: [
        'Do you blitzscale for a fast exit or build a company designed to endure?',
        'Scaling for exit: attracts VC, prioritizes speed, and often means dilution and investor control.',
      ],
    },
    {
      _key: 'card-2',
      title: '2. The Three Trade-Offs',
      content: '',
      items: [],
    },
    {
      _key: 'card-3',
      title: '3. Why It Matters',
      content: 'The Venture Triad™ is a decision-making framework.',
      items: [],
    },
    {
      _key: 'card-4',
      title: '4. How We Use This Framework',
      content: '',
      items: [],
    },
    {
      _key: 'card-5',
      title: '5. Work With Us',
      content: 'Whether you\'re scaling fast or building for legacy.',
      items: [],
    },
  ],
}

async function importMethology() {
  console.log('🚀 Импортирую Methology с простой структурой...')
  
  try {
    await client.createOrReplace(methologyContent)
    console.log('✅ Methology импортирован!')
    console.log('📝 Схема упрощена - ошибок не будет!')
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

importMethology()

