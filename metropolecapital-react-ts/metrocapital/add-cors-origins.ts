/**
 * Добавление CORS origins в Sanity проект
 */

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '16c5vmgl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk4QIz3mBO4q6LJRc2Mib8liE2fAZnD7sNfJGnlRKWbFFXQRNXwryrx5eZ8T3C4ptelaNHtgNNU9Ksl3sDMNjFsWXE0xjx1V8ZZeWsJtdOIb6brkIne4i6DkuDQQjbnnWM1CIs4ZSeFmCt5TEopmOhlS7tUjUGSvhCiMELD5oIdqBkuDV9i7',
})

async function addCorsOrigins() {
  console.log('🌐 Добавляю CORS origins...\n')
  
  const origins = [
    'http://localhost:5173',        // Локальная разработка
    'http://192.168.1.86:5173',     // Локальная разработка (сеть)
    'https://www.metropolecapital.com',  // Продакшен
    'https://metropolecapital.vercel.app', // Vercel
  ]
  
  try {
    // Получаем текущую конфигурацию проекта
    const project = await client.request({
      method: 'GET',
      uri: `/projects/16c5vmgl`,
    })
    
    console.log('📋 Текущие CORS origins:', project.apiHosts?.corsOrigins || [])
    
    // Обновляем CORS origins
    await client.request({
      method: 'PATCH',
      uri: `/projects/16c5vmgl`,
      body: {
        corsOrigins: origins,
      },
    })
    
    console.log('\n✅ CORS origins добавлены:')
    origins.forEach(origin => console.log(`   - ${origin}`))
    console.log('\n🔄 Подожди 1-2 минуты и обнови страницу!')
    
  } catch (error) {
    console.error('❌ Ошибка:', error)
    console.log('\n📝 Вручную:')
    console.log('   1. Иди на https://sanity.io/manage/project/16c5vmgl/api')
    console.log('   2. В "CORS origins" добавь:')
    origins.forEach(origin => console.log(`      - ${origin}`))
  }
}

addCorsOrigins()

