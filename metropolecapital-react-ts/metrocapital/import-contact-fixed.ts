/**
 * Импорт Contact БЕЗ email
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

async function importContact() {
  console.log('🚀 Импортирую Contact (исправленный)...')
  
  try {
    // Загружаем фото офиса
    const photoPath = path.join(process.cwd(), '..', 'src', 'assets', 'events', '2е.jpg')
    let officePhoto = null
    
    if (fs.existsSync(photoPath)) {
      console.log('📸 Загружаю фото офиса...')
      const buffer = fs.readFileSync(photoPath)
      const asset = await client.assets.upload('image', buffer, {
        filename: 'office.jpg',
      })
      
      officePhoto = {
        _type: 'image',
        asset: {
          _ref: asset._id,
          _type: 'reference',
        },
      }
      console.log('✅ Фото загружено')
    }
    
    const contactDoc = {
      _id: 'contact-document',
      _type: 'contact',
      title: 'Contact Us',
      lead: 'Let\'s build your next big move together. Whether you\'re raising capital, refining your growth strategy, or exploring alternative funding models — we\'d love to hear from you.',
      formTitle: 'Send us a message',
      officeTitle: 'Phone',
      companyName: 'Metropole Capital Group',
      phone: '+1 (310) 464-1575',
      officePhoto,
    }
    
    await client.createOrReplace(contactDoc)
    
    console.log('✅ Contact исправлен!')
    console.log('❌ Email удалён (его нет на странице)')
    
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

importContact()

