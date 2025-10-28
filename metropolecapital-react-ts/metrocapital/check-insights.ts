/**
 * Проверка Insights в базе
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

async function checkInsights() {
  console.log('🔍 Проверяю Insights в базе...')
  
  try {
    const doc = await client.getDocument('insights-document')
    
    if (doc.articles) {
      console.log(`\n📰 В базе ${doc.articles.length} статей`)
      console.log('\nПервые 5:')
      doc.articles.slice(0, 5).forEach((article, i) => {
        console.log(`${i + 1}. ${article.title?.substring(0, 60)}...`)
      })
    } else {
      console.log('\n❌ Поле articles отсутствует')
    }
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

checkInsights()

