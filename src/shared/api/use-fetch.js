   import { useState, useEffect } from 'react'
   import { API_URL } from './config'

   // Хук: загружает public/api/db.json и достаёт из него нужный раздел
   // Например, useFetch('/hero') берёт из файла поле "hero"
   export function useFetch(endpoint) {
     const [data, setData] = useState(null)
     const [isLoading, setIsLoading] = useState(true) // пока идёт запрос — true
     const [error, setError] = useState(null)

     useEffect(() => {
       // AbortController отменяет запрос, если компонент размонтировался
       const controller = new AbortController()

       fetch(`${API_URL}/db.json`, { signal: controller.signal })
         .then((response) => {
           // fetch не бросает ошибку на 404/500, поэтому проверяем статус вручную
           if (!response.ok) throw new Error(`Server error: ${response.status}`)
           return response.json()
         })
         .then((db) => {
           // '/hero' -> 'hero': берём из общего файла только нужный раздел
           const section = db[endpoint.slice(1)]
           if (section === undefined) throw new Error(`No data for ${endpoint}`)
           setData(section)
           setIsLoading(false)
         })
         .catch((err) => {
           // Отмену запроса ошибкой не считаем
           if (err.name === 'AbortError') return
           setData(null)
           setError(err.message)
           setIsLoading(false)
         })

       // Cleanup: отменяем незавершённый запрос
       return () => controller.abort()
     }, [endpoint])

     return { data, isLoading, error }
   }