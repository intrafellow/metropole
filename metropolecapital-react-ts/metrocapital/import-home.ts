/**
 * Импорт Home
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

async function importHome() {
  console.log('🚀 Импортирую Home...\n')
  
  try {
    // Загружаем изображения
    const assetsDir = path.join(process.cwd(), '..', 'src', 'assets')
    
    const logo = await uploadImage(path.join(assetsDir, '99.png'), 'logo.png')
    const map = await uploadImage(path.join(assetsDir, 'world-map-purple.png'), 'world-map.png')
    
    const homeDoc = {
      _id: 'home-document',
      _type: 'home',
      logo,
      heroTitle: 'We help founders master capital',
      heroLine: 'Strategic guidance, investor-ready financial models, and smart funding strategies',
      heroLineSmall: 'Built by entrepreneurs, for entrepreneurs',
      mapTitle: 'Our network is worldwide:',
      mapImage: map,
    }
    
    await client.createOrReplace(homeDoc)
    
    console.log('✅ Home импортирован!')
    console.log('📸 Logo загружено')
    console.log('🌍 Карта мира загружена')
    
  } catch (error) {
    console.error('❌ Ошибка:', error)
  }
}

importHome()

