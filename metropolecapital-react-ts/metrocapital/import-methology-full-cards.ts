/**
 * Импорт Methology со ВСЕМИ 5 карточками
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
  
  topBlock: {
    emoji: '⚡',
    title: 'Scaling vs. Building',
    content: 'Blitzscale for exit <br /> vs. <br /> Build for resilience',
  },
  
  bottomLeftBlock: {
    emoji: '🔒',
    title: 'Patents vs. Open',
    content: 'Protect IP <br /> vs. <br /> Open innovation',
  },
  
  bottomRightBlock: {
    emoji: '💰',
    title: 'Traditional VC vs. Alternative Funding',
    content: 'Equity <br /> vs. <br /> Non-equity / Hybrid models',
  },
  
  centerTitle: 'FOUNDERS',
  centerDescription: 'Navigate tensions between competing forces',
  
  footerText1: "We don't push founders down a single path",
  footerText2: 'We give them the clarity to choose their own',
  
  cards: [
    {
      _key: 'card-1',
      title: '1. Why Trade-offs Define Real Ventures',
      content: 'Most startup advice starts with funding rounds. We start earlier. Before a founder raises a single dollar, there are three critical strategic decisions that shape the entire journey.',
      items: [
        'These decisions determine your capital structure, your growth path, and ultimately whether you\'re building an enduring company or a short-term asset.',
        'This is why we created <strong>The Venture Triad of Trade-offs™</strong> — a practical strategic compass for founders who want to master capital, not be mastered by it.',
        'If you get these trade-offs right, everything else — from funding to growth — aligns.',
      ],
    },
    {
      _key: 'card-2',
      title: '2. The Three Trade-Offs',
      content: '',
      items: [
        'Scaling for exit: attracts VC, prioritizes speed, and often means dilution and investor control.',
        'Building for legacy: slower growth, more resilience, and founder ownership.',
        'Patents: defensibility and higher valuation, but require capital and time.',
        'Open: faster adoption, but changes funding logic.',
        'VC: provides capital but pushes for exits and control.',
        'Alternative: crowdfunding, revenue sharing, grants — retaining more control.',
      ],
    },
    {
      _key: 'card-3',
      title: '3. Why It Matters',
      content: 'The Venture Triad™ isn\'t a slogan. It\'s a decision-making framework that gives founders clarity before they raise, spend, or scale.',
      items: [
        'Design intentional capital strategies instead of reactive fundraising.',
        'Align financial architecture with mission and purpose.',
        'Stay in control of company trajectory.',
        '<strong>Capital should serve the vision — not the other way around.</strong>',
      ],
    },
    {
      _key: 'card-4',
      title: '4. How We Use This Framework',
      content: '',
      items: [
        'Build funding strategies aligned with founder intent.',
        'Shape valuation and modeling logic.',
        'Craft investment narratives reflecting real strategic choices.',
        'Recommend instruments that fit long-term goals.',
        'Leverage AI-powered modeling for sharper insight.',
      ],
    },
    {
      _key: 'card-5',
      title: '5. Work With Us',
      content: 'Whether you\'re scaling fast or building for legacy, the Venture Triad™ helps you make the right decisions early.',
      items: [],
    },
  ],
}

async function importMethology() {
  console.log('🚀 Импортирую Methology со ВСЕМИ 5 карточками...')
  
  try {
    await client.createOrReplace(methologyContent)
    console.log('✅ Methology импортирован!')
    console.log('📋 Все 5 карточек добавлены!')
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

importMethology()

