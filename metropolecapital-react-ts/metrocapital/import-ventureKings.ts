/**
 * Импорт Venture Kings
 */

import {createClient} from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

async function uploadImage(imagePath: string, filename: string) {
  if (!fs.existsSync(imagePath)) {
    console.log(`⚠️  Файл не найден: ${imagePath}`)
    return null
  }
  
  console.log(`📸 Загружаю: ${filename}`)
  const buffer = fs.readFileSync(imagePath)
  const asset = await client.assets.upload('image', buffer, {filename})
  
  return {
    _type: 'image',
    asset: {
      _ref: asset._id,
      _type: 'reference',
    },
  }
}

async function importVentureKings() {
  console.log('🚀 Импортирую Venture Kings...\n')
  
  try {
    // Загружаем логотип
    const assetsDir = path.join(process.cwd(), '..', 'src', 'assets')
    const logo = await uploadImage(path.join(assetsDir, '34.jpg'), 'venture-kings-logo.jpg')
    
    const vkDoc = {
      _id: 'venturekings-document',
      _type: 'ventureKings',
      logo,
      title: 'Venture Kings™',
      lead: 'Venture Kings is a startup simulation game that puts players directly in the founder\'s seat, forcing them to make the same strategic and financial trade-offs real entrepreneurs face.',
      
      whyCard: {
        title: 'Why Venture Kings™',
        items: [
          'Realistic Simulation: Recreates the first six months of a startup journey.',
          'Strategic Trade-offs: Forces tough choices between raising capital and keeping control.',
          'Critical Thinking: Builds fast, strategic decision-making skills under pressure.',
          'Engagement: Ideal for MBA and PhD programs, accelerators, and innovation workshops.',
          'Outcome-Driven: The winner isn\'t who raises the most but who ends with the highest Founder\'s Equity Value.',
        ],
      },
      
      howCard: {
        title: 'How It Works',
        description: [
          {
            _key: 'how-1',
            _type: 'block',
            children: [
              {_key: 'how-1-1', _type: 'span', marks: ['strong'], text: 'We customize every scenario to align with the organization\'s strategic objectives. Here\'s an example'},
            ],
            style: 'normal',
          },
          {
            _key: 'how-2',
            _type: 'block',
            children: [
              {_key: 'how-2-1', _type: 'span', text: 'Each team starts with $20,000 and 100% ownership. Six rounds simulate six months of startup life. Each round, teams draw a Challenge Card and make a decision that affects their cash and ownership.'},
            ],
            style: 'normal',
          },
          {
            _key: 'how-3',
            _type: 'block',
            children: [
              {_key: 'how-3-1', _type: 'span', text: 'Mid-game, they face a Funding Challenge, choosing whether and how much control to give up for capital. At the end, the team with the highest Founder\'s Equity Value wins.'},
            ],
            style: 'normal',
          },
        ],
      },
      
      whoCard: {
        title: 'Who It\'s For',
        items: [
          'Universities and business schools',
          'Accelerators and incubators',
          'Founder bootcamps and corporate innovation programs',
        ],
      },
      
      uniqueCard: {
        title: 'What Makes It Unique',
        description: [
          {
            _key: 'unique-1',
            _type: 'block',
            children: [
              {_key: 'unique-1-1', _type: 'span', text: 'Unlike most startup games that focus on pitching or storytelling, '},
              {_key: 'unique-1-2', _type: 'span', marks: ['strong'], text: 'Venture Kings™'},
              {_key: 'unique-1-3', _type: 'span', text: ' puts the spotlight on capital strategy and trade-offs. Players face real founder dilemmas:'},
            ],
            style: 'normal',
          },
          {
            _key: 'unique-2',
            _type: 'block',
            children: [
              {_key: 'unique-2-1', _type: 'span', text: '• Do you accept VC money and give up control?\n• Do you bootstrap and risk slower growth?\n• Do you pivot or stay the course?'},
            ],
            style: 'normal',
          },
          {
            _key: 'unique-3',
            _type: 'block',
            children: [
              {_key: 'unique-3-1', _type: 'span', text: 'It\'s not just a game — it\'s a strategy lab.'},
            ],
            style: 'normal',
          },
        ],
      },
      
      ctaTitle: 'Bring Venture Kings™ to Your Organization',
      ctaDescription: [
        {
          _key: 'cta-1',
          _type: 'block',
          children: [
            {_key: 'cta-1-1', _type: 'span', text: 'Whether you\'re teaching entrepreneurial finance, running an accelerator, or training innovation leaders, Venture Kings™ is a powerful and engaging way to make funding strategy come alive.'},
          ],
          style: 'normal',
        },
        {
          _key: 'cta-2',
          _type: 'block',
          children: [
            {_key: 'cta-2-1', _type: 'span', text: 'For licensing, workshops, or live facilitation — contact us through the form below.'},
          ],
          style: 'normal',
        },
      ],
    }
    
    await client.createOrReplace(vkDoc)
    
    console.log('✅ Venture Kings импортирован!')
    console.log('📸 Логотип загружен')
    
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

importVentureKings()

