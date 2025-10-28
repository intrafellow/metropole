/**
 * Просмотр всего документа Insights
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

async function viewDoc() {
  const doc = await client.getDocument('insights-document')
  
  console.log('Статей в массиве articles:', doc.articles?.length || 0)
  console.log('\nСодержимое массива:')
  console.log(JSON.stringify(doc.articles, null, 2))
}

viewDoc()

