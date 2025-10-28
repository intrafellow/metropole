/**
 * Полная проверка Insights
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

async function debug() {
  console.log('🔍 Полная проверка Insights...\n')
  
  try {
    const doc = await client.getDocument('insights-document')
    
    console.log('📄 Документ:', doc._id)
    console.log('📝 _rev:', doc._rev)
    console.log('📅 Updated:', doc._updatedAt)
    
    if (doc.articles) {
      console.log(`\n📰 Статей в базе: ${doc.articles.length}\n`)
      
      console.log('Первые 10 статей:')
      doc.articles.slice(0, 10).forEach((article, i) => {
        console.log(`${i + 1}. ${article.title}`)
      })
      
      if (doc.articles.length > 10) {
        console.log(`... и ещё ${doc.articles.length - 10} статей`)
      }
      
      // Проверка структуры первой статьи
      if (doc.articles[0]) {
        console.log('\n📋 Структура первой статьи:')
        console.log(JSON.stringify(doc.articles[0], null, 2))
      }
    } else {
      console.log('\n❌ Поле articles отсутствует')
    }
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

debug()

