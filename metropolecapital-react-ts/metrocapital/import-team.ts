/**
 * Импорт Team со всем контентом
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

async function importTeam() {
  console.log('🚀 Импортирую Team...\n')
  
  try {
    // Загружаем фото
    const photosDir = path.join(process.cwd(), '..', 'src', 'assets', 'team')
    
    const founderPhoto = await uploadImage(path.join(photosDir, 'v.jpg'), 'victoria.jpg')
    const sandroPhoto = await uploadImage(path.join(photosDir, 's.jpg'), 'sandro.jpg')
    const paulPhoto = await uploadImage(path.join(photosDir, 'p.jpg'), 'paul.jpg')
    const lorenaPhoto = await uploadImage(path.join(photosDir, 'l.jpg'), 'lorena.jpg')
    
    const teamDoc = {
      _id: 'team-document',
      _type: 'team',
      title: 'Our Team',
      lead: 'Leaders, educators, and innovators shaping the new era of capital, strategy, and creativity.',
      
      founder: {
        photo: founderPhoto,
        name: 'Victoria Silchenko Robbins, PhD',
        role: 'Founder & CEO | Economist | Entrepreneurial Finance Strategist',
        bio: [
          {
            _type: 'block',
            children: [
              {_type: 'span', text: 'Victoria Silchenko Robbins is an economist, educator, and founder with over two decades of experience at the intersection of finance, entrepreneurship, and innovation. She is widely recognized for advising startups, investors, and organizations globally on funding strategies, valuation, and capital structuring.'}
            ],
            style: 'normal',
          },
          {
            _type: 'block',
            children: [
              {_type: 'span', text: 'Before launching Metropole Capital Group, Victoria worked with leading financial institutions in California, including the Milken Institute and Laffer Investments. She teaches MBA and PhD students as a visiting professor, focusing on entrepreneurial finance and new funding models. Dr. Silchenko has served on the board of the Los Angeles Venture Association (LAVA), where she launched the GLOBAL LAVA chapter, and currently sits on the board of the California Stock Xchange.'}
            ],
            style: 'normal',
          },
          {
            _type: 'block',
            children: [
              {_type: 'span', text: 'Victoria is the creator of '},
              {_type: 'span', marks: ['strong'], text: 'The Venture Triad of Trade-offs™'},
              {_type: 'span', text: ', a strategic framework helping founders navigate key decisions on growth, IP, and capital. She has advised international forums, accelerators, and universities, and authored '},
              {_type: 'span', marks: ['em'], text: 'Raise and Rise: Funding Sources for Your Startup in the Era of Digital Transformation & Blockchain.'},
            ],
            style: 'normal',
          },
        ],
        linkedin: 'https://www.linkedin.com/in/victoriametropolecapital/',
      },
      
      advisoryTitle: 'Advisory Board',
      
      advisoryMembers: [
        {
          _key: 'sandro',
          photo: sandroPhoto,
          name: 'Sandro Monetti',
          role: 'Entertainment Industry Expert | Journalist | COO, Big Screen Entertainment Group',
          bio: 'Sandro Monetti is an internationally recognized entertainment industry expert, journalist, and author with extensive experience in global media and culture. He is a regular contributor to CNN and BBC, and currently serves as COO of Big Screen Entertainment Group in Los Angeles.',
          linkedin: 'https://www.linkedin.com/in/sandro-monetti/',
        },
        {
          _key: 'paul',
          photo: paulPhoto,
          name: 'Dr. Paul Thurman',
          role: 'Professor | Global Strategy & Data Analytics Expert | Author',
          bio: 'Dr. Paul Thurman is a professor, advisor, and author with extensive global experience in strategy, analytics, and innovation. He has advised clients on six continents and teaches at Columbia University and London Business School.',
          linkedin: 'https://www.linkedin.com/in/paul-thurman-dba-80433/',
        },
        {
          _key: 'lorena',
          photo: lorenaPhoto,
          name: 'Lorena Welch',
          role: 'Founder & CEO, Dreamscapers Publishing | Creative Technologist | Visionary Storyteller',
          bio: 'Lorena Welch is a visionary entrepreneur and creative technologist dedicated to inspiring young people to nurture their talents and channel creativity into impact. As CEO of Dreamscapers Publishing, she pioneered HoloNovels™ — XR/4D physical books with immersive augmented illustrations.',
          linkedin: 'https://www.linkedin.com/in/lorena-welch/',
        },
      ],
    }
    
    await client.createOrReplace(teamDoc)
    
    console.log('\n✅ Team импортирован!')
    console.log('👤 Founder: Victoria Silchenko Robbins')
    console.log('👥 Advisory Board: 3 члена')
    
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

importTeam()

