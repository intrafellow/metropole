/**
 * Синхронизация Draft с Published
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

async function syncDraft() {
  console.log('🔄 Синхронизирую Draft с Published...\n')
  
  try {
    // Получаем Published версию
    const publishedDoc = await client.getDocument('insights-document')
    
    console.log(`📄 В Published ${publishedDoc.articles?.length} статей`)
    
    // Обновляем Draft версию до текущей Published
    const draftDoc = {
      _id: 'drafts.insights-document',
      ...publishedDoc,
    }
    
    await client.createOrReplace(draftDoc)
    
    console.log(`✅ Draft обновлён! Теперь в Draft тоже ${publishedDoc.articles?.length} статей`)
    console.log('🎯 Теперь можно редактировать все 27 статей в Draft!')
    
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

syncDraft()

