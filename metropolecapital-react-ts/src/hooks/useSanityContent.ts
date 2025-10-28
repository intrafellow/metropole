import { useState, useEffect } from 'react'

/**
 * Хук для загрузки контента из Sanity с real-time обновлениями через WebSocket
 * @param fetchFn - функция для загрузки данных
 * @param query - GROQ запрос для подписки на изменения
 */
export function useSanityContent<T>(
  fetchFn: () => Promise<T | null>,
  query?: string,
  params?: Record<string, any>
) {
  const [content, setContent] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let subscription: any = null

    async function loadInitialData() {
      const data = await fetchFn()
      setContent(data)
      setLoading(false)
    }

    async function setupRealtime() {
      await loadInitialData()

      // Если есть query - подписываемся на real-time изменения
      if (query) {
        const { sanityClient } = await import('../services/sanityService')
        
        subscription = sanityClient
          .listen(query, params)
          .subscribe((update) => {
            // Когда контент меняется в Sanity, обновляем локальное состояние
            if (update.type === 'mutation') {
              loadInitialData() // Перезагружаем данные
            }
          })
      }
    }

    setupRealtime()

    return () => {
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [])

  return {
    content,
    loading,
    error: null,
  }
}

