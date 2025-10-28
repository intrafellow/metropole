/**
 * Исправление галереи Events - правильная структура данных
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

const photosDir = path.join(process.cwd(), '..', 'src', 'assets', 'events')

const photoFiles = [
  '1е.jpg', '3е.jpg', '6.jpg', '4е.jpg', '6е.jpg',
  '7.jpg', '7е.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg', '12.jpg', '13.jpg', '14.jpg', '16.jpg', '17.jpg'
]

async function fixGallery() {
  console.log('🔧 Исправляю галерею Events...')
  
  const galleryItems = []
  
  for (const filename of photoFiles) {
    const filePath = path.join(photosDir, filename)
    
    try {
      if (fs.existsSync(filePath)) {
        console.log(`📤 Загружаю: ${filename}`)
        
        const buffer = fs.readFileSync(filePath)
        
        const asset = await client.assets.upload('image', buffer, {
          filename: filename,
        })
        
        // Правильная структура для Sanity
        galleryItems.push({
          _key: filename.replace(/[^a-zA-Z0-9]/g, '_'),
          _type: 'galleryItem',
          image: {
            _type: 'image',
            asset: {
              _ref: asset._id,
              _type: 'reference',
            },
          },
          alt: `Event ${galleryItems.length + 1}`,
        })
        
        console.log(`✅ ${filename}`)
      }
    } catch (error) {
      console.error(`❌ ${filename}:`, error)
    }
  }
  
  console.log(`\n💾 Обновляю документ Events...`)
  
  try {
    // Получаем текущий документ
    const currentDoc = await client.getDocument('events-document')
    
    if (!currentDoc) {
      console.log('❌ Документ не найден!')
      return
    }
    
    // Обновляем с правильной структурой
    await client.patch('events-document')
      .set({
        galleryItems: galleryItems
      })
      .commit()
    
    console.log('✅ Галерея обновлена!')
    console.log(`📸 Загружено ${galleryItems.length} фото`)
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

fixGallery()

