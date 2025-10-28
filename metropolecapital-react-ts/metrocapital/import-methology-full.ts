/**
 * Полный импорт контента Methology страницы
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
      _type: 'card',
      title: '1. Why Trade-offs Define Real Ventures',
      content: [
        {
          _type: 'block',
          children: [{_type: 'span', text: 'Most startup advice starts with funding rounds. We start earlier. Before a founder raises a single dollar, there are three critical strategic decisions that shape the entire journey.'}],
        },
      ],
      subcards: [
        {
          title: 'A. Scaling vs. Building',
          items: [
            'Do you blitzscale for a fast exit or build a company designed to endure?',
            'Scaling for exit: attracts VC, prioritizes speed, and often means dilution and investor control.',
            'Building for legacy: slower growth, more resilience, and founder ownership.',
          ],
        },
        {
          title: 'B. Patents vs. Open Innovation',
          items: [
            'Protect IP or open innovation?',
            'Patents: defensibility and higher valuation, but require capital and time.',
            'Open: faster adoption, but changes funding logic.',
          ],
        },
        {
          title: 'C. VC vs. Alternative Funding',
          items: [
            'VC: provides capital but pushes for exits and control.',
            'Alternative: crowdfunding, revenue sharing, grants — retaining more control.',
          ],
        },
      ],
    },
    {
      _type: 'card',
      title: '2. The Three Trade-Offs',
      content: [],
      subcards: [],
    },
    {
      _type: 'card',
      title: '3. Why It Matters',
      content: [
        {
          _type: 'block',
          children: [{_type: 'span', text: 'The Venture Triad™ isn\'t a slogan. It\'s a decision-making framework that gives founders clarity before they raise, spend, or scale.'}],
        },
      ],
    },
    {
      _type: 'card',
      title: '4. How We Use This Framework',
      content: [],
    },
  ],
}

async function importMethology() {
  console.log('🚀 Импортирую полный контент Methology...')
  
  try {
    await client.createOrReplace(methologyContent)
    console.log('✅ Methology импортирован!')
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

importMethology()

