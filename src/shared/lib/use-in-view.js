import { useState, useEffect, useRef } from 'react'

// Хук: следит, появился ли элемент в окне браузера (IntersectionObserver).
// Возвращает ref для элемента и флаг isVisible
export function useInView() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // анимация нужна один раз — дальше не следим
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
