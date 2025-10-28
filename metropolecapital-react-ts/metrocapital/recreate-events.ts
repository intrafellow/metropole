/**
 * Пересоздание документа Events с нуля
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

async function recreateEvents() {
  console.log('🔄 Удаляю старый документ...')
  
  try {
    // Удаляем старый
    await client.delete('events-document')
    console.log('✅ Старый документ удалён')
    
    console.log('\n📝 Создаю новый документ без галереи...')
    
    // Создаём новый БЕЗ галереи
    await client.create({
      _id: 'events-document',
      _type: 'events',
      title: 'Events',
      lead: 'Shaping the Global Funding Conversation Since 2012',
      cardTitle: 'Over a Decade of Global Engagement',
      cardDescription: 'For more than a decade, we\'ve been actively engaged with the global investment and startup community — bringing together visionary founders, investors, policymakers, and thought leaders to explore new models of capital formation.',
      cardItems: [
        'Collaborations: Partnering with LAVA (Los Angeles Venture Association) and other leading organizations to host high-impact seminars on equity crowdfunding and alternative financing strategies.',
        'Thought Leadership: Curating discussions on forward-thinking topics such as the dangers of traditional venture capital dependency and emerging global funding models.',
        'Founder Empowerment: Launching initiatives like The Next Generation Entrepreneurship Forum and the Global Alternative Funding Forum — designed to equip founders and investors with actionable insights.',
        'World Funding Summit: Hosting the flagship annual event at the Los Angeles Convention Center, endorsed by the Mayor of Los Angeles and featuring leading venture funds such as Union Grove Venture Partners ($800M+), Crosscut Ventures ($400M+), and Upfront Ventures ($1B+).',
      ],
      cardFooterTitle: 'Inspiring the next generation of founders to rethink capital and create global impact',
      galleryTitle: 'Highlights & Community',
      galleryDescription: 'Over the years, our events have united innovators, investors, and policymakers across continents. Here\'s a glimpse into the energy, connection, and collaboration that define our global community.',
      galleryItems: [], // Пустая галерея
    })
    
    console.log('✅ Новый документ создан!')
    console.log('\n📝 Теперь открой Studio и добавь фото через "+ Add item" в поле "Фотографии галереи"')
    console.log('   (или я могу загрузить их скриптом, но через UI проще)')
    
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

recreateEvents()

