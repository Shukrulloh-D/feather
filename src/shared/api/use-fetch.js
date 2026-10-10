import { useState, useEffect } from 'react'
import { API_URL } from './config'

// Универсальный хук: GET-запрос к json-server с состояниями загрузки и ошибки
export function useFetch(endpoint) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true) // пока идёт запрос — true
  const [error, setError] = useState(null)

  useEffect(() => {
    // AbortController отменяет запрос, если компонент размонтировался
    const controller = new AbortController()

    fetch(`${API_URL}${endpoint}`, { signal: controller.signal })
      .then((response) => {
        // fetch не бросает ошибку на 404/500, поэтому проверяем статус вручную
        if (!response.ok) throw new Error(`Server error: ${response.status}`)
        return response.json()
      })
      .then((json) => {
        setData(json)
        setIsLoading(false)
      })
      .catch((err) => {
        // Отмену запроса ошибкой не считаем
        if (err.name === 'AbortError') return
        // Сервер недоступен: данных нет, секция покажет ошибку
        setData(null)
        setError(err.message)
        setIsLoading(false)
      })

    // Cleanup: отменяем незавершённый запрос
    return () => controller.abort()
  }, [endpoint])

  return { data, isLoading, error }
}
