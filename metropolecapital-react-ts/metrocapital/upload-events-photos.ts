/**
 * Загрузка фотографий Events в Sanity
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

// Путь к фото
const photosDir = path.join(process.cwd(), '..', 'src', 'assets', 'events')

// Список фото
const photoFiles = [
  '1е.jpg', '3е.jpg', '6.jpg', '4е.jpg', '6е.jpg',
  '7.jpg', '7е.jpg', '8.jpg', '9.jpg', '10.jpg',
  '11.jpg', '12.jpg', '13.jpg', '14.jpg', '16.jpg', '17.jpg'
]

async function uploadPhotos() {
  console.log('📸 Загружаю фотографии Events в Sanity...')
  
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
        
        galleryItems.push({
          _type: 'galleryItem',
          _key: `photo-${Date.now()}-${Math.random().toString(36).substring(7)}`,
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: asset._id,
            },
          },
          alt: `Event photo ${galleryItems.length + 1}`,
        })
        
        console.log(`✅ ${filename} загружен`)
      } else {
        console.log(`⚠️  Файл не найден: ${filename}`)
      }
    } catch (error) {
      console.error(`❌ Ошибка при загрузке ${filename}:`, error)
    }
  }
  
  if (galleryItems.length > 0) {
    console.log(`\n💾 Обновляю документ Events с ${galleryItems.length} фото...`)
    
    try {
      await client.patch('events-document').set({galleryItems}).commit()
      console.log('✅ Фотографии добавлены в Events!')
      console.log('📸 Обнови Studio - фото будут видны!')
    } catch (error) {
      console.error('❌ Ошибка при обновлении документа:', error)
    }
  } else {
    console.log('❌ Ни одна фотография не загружена')
  }
}

uploadPhotos()
