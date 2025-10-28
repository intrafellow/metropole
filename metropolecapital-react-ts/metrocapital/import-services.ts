/**
 * Импорт Services
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

const servicesData = [
  {
    title: 'Funding Strategy & Capital Roadmap',
    short: 'Turn fundraising into a strategic roadmap aligned with your goals.',
    details: [
      {
        _type: 'block',
        children: [{_type: 'span', text: 'Most founders raise capital reactively. We make it strategic.'}],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Map your optimal capital structure (equity, debt, hybrid)\n• Plan funding stages and timing aligned with your strategy\n• Ensure long-term financing without losing control',
          },
        ],
        style: 'normal',
        markDefs: [],
      },
      {
        _type: 'block',
        children: [
          {_type: 'span', marks: ['strong'], text: 'Outcome: '},
          {_type: 'span', text: 'a clear, founder-centered funding plan.'},
        ],
        style: 'normal',
      },
    ],
  },
  {
    title: 'Market Research & Investor Positioning',
    short: 'Position your venture precisely with data-driven insights.',
    details: [
      {
        _type: 'block',
        children: [{_type: 'span', text: 'Winning funding starts with understanding your market.'}],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Market & trend analysis to identify key dynamics and growth areas\n• Competitive intelligence and benchmarking\n• Investor targeting strategy — who is likely to invest in your model\n• Market sizing: TAM / SAM / SOM breakdown with realistic assumptions',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {_type: 'span', marks: ['strong'], text: 'Outcome: '},
          {_type: 'span', text: 'sharper positioning, stronger investor appeal.'},
        ],
        style: 'normal',
      },
    ],
  },
  {
    title: 'Financial Modeling & Valuation',
    short: 'Build investor-grade models that reflect your business reality.',
    details: [
      {
        _type: 'block',
        children: [{_type: 'span', text: 'Numbers tell your story — we make sure they speak the investors\' language.'}],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Detailed projections with sensitivity and scenario analysis\n• Unit economics, breakeven, and dilution modeling\n• Valuation strategy and comparable benchmarking',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {_type: 'span', marks: ['strong'], text: 'Outcome: '},
          {_type: 'span', text: 'a solid financial foundation for confident fundraising.'},
        ],
        style: 'normal',
      },
    ],
  },
  {
    title: 'Pitch Deck & Investment Narrative',
    short: 'Craft a clear and persuasive story that resonates with investors.',
    details: [
      {
        _type: 'block',
        children: [{_type: 'span', text: 'A great pitch deck informs, inspires, and convinces.'}],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Deck structure and storytelling strategy\n• Positioning for venture capital, angels, or hybrid models\n• Investor presentation and Q&A coaching',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {_type: 'span', marks: ['strong'], text: 'Outcome: '},
          {_type: 'span', text: 'a story that cuts through the noise and connects.'},
        ],
        style: 'normal',
      },
    ],
  },
  {
    title: 'Revenue Growth Strategy',
    short: 'Create sustainable revenue paths aligned with your capital structure.',
    details: [
      {
        _type: 'block',
        children: [{_type: 'span', text: 'Capital is fuel — but growth is the engine.'}],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Go-to-market strategy and customer segmentation\n• Pricing and retention optimization\n• Scaling models aligned with capital structure and profitability goals',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {_type: 'span', marks: ['strong'], text: 'Outcome: '},
          {_type: 'span', text: 'a realistic, scalable path to long-term success.'},
        ],
        style: 'normal',
      },
    ],
  },
  {
    title: 'Alternative & Hybrid Financing',
    short: 'Explore non-VC options like revenue share, grants & tokenization.',
    details: [
      {
        _type: 'block',
        children: [{_type: 'span', text: 'Venture capital is only one path — we help you discover the rest.'}],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Revenue-based financing and profit-sharing models\n• Government and institutional grants\n• Emerging hybrid and tokenized structures',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {_type: 'span', marks: ['strong'], text: 'Outcome: '},
          {_type: 'span', text: 'more flexibility, more control, and less dilution.'},
        ],
        style: 'normal',
      },
    ],
  },
  {
    title: 'Workshops & Masterclasses',
    short: 'Educational programs for founders, accelerators, and universities.',
    details: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Startup finance & capital strategy workshops\n• Venture Triad™ sessions — understanding the founder-investor dynamic\n• Guest lectures, masterclasses, and keynotes for innovation hubs',
          },
        ],
        style: 'normal',
      },
      {
        _type: 'block',
        children: [
          {_type: 'span', marks: ['strong'], text: 'Outcome: '},
          {_type: 'span', text: 'empowering the next generation of founders and investors.'},
        ],
        style: 'normal',
      },
    ],
  },
]

async function importServices() {
  console.log('🚀 Импортирую Services...')
  
  try {
    const servicesDoc = {
      _id: 'services-document',
      _type: 'services',
      title: 'Services',
      lead: 'Every founder\'s journey is unique. We help you choose the smartest capital path, sharpen your story, and build the financial architecture to back it up.',
      serviceItems: servicesData.map((service, index) => ({
        _key: `service-${index + 1}`,
        _type: 'serviceItem',
        title: service.title,
        short: service.short,
        details: service.details,
      })),
      ctaText: 'Interested in working together?',
    }
    
    await client.createOrReplace(servicesDoc)
    
    console.log('✅ Services импортирован!')
    console.log(`📋 Добавлено ${servicesData.length} услуг`)
    
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

importServices()

