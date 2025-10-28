import { useState, useEffect, useRef } from 'react'

/**
 * Хук для загрузки контента из Sanity с автообновлением через polling
 * @param fetchFn - функция для загрузки данных
 */
export function useSanityContent<T>(
  fetchFn: () => Promise<T | null>,
  pollInterval: number = 30000 // 30 секунд
) {
  const [content, setContent] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const lastContentRef = useRef<string>('')

  useEffect(() => {
    async function loadContent() {
      try {
        const data = await fetchFn()
        setContent(data)
        setLoading(false)

        // Проверяем изменился ли контент
        const currentContent = JSON.stringify(data)
        if (lastContentRef.current && lastContentRef.current !== currentContent) {
          // Контент изменился - перезагружаем страницу
          console.log('Content changed, reloading...')
          window.location.reload()
        }
        lastContentRef.current = currentContent
      } catch (error) {
        console.error('Error loading content:', error)
      }
    }

    loadContent()

    // Polling каждые N секунд
    const interval = setInterval(loadContent, pollInterval)

    return () => clearInterval(interval)
  }, [fetchFn, pollInterval])

  return {
    content,
    loading,
    error: null,
  }
}

