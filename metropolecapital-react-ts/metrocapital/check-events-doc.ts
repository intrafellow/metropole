/**
 * Проверка текущего состояния документа Events
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

async function checkDoc() {
  console.log('🔍 Проверяю документ Events...')
  
  try {
    const doc = await client.getDocument('events-document')
    console.log('\n📄 Текущий документ:')
    console.log(JSON.stringify(doc, null, 2))
    
    if (doc.galleryItems) {
      console.log(`\n📸 Галерея содержит ${doc.galleryItems.length} элементов`)
    } else {
      console.log('\n❌ Поле galleryItems отсутствует или пустое')
    }
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

checkDoc()

