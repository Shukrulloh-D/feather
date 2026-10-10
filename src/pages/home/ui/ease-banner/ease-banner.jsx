import { useFetch } from '@/shared/api'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import styles from './ease-banner.module.css'

export function EaseBanner() {
  // Запрос к json-server: GET /ease
  const { data: ease, isLoading, error } = useFetch('/ease')

  if (isLoading) return <Loader minHeight={300} />
  if (error) return <ErrorMessage message={error} />

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{ease.title}</h2>
      {/* Логотипы прессы выводим текстом, чтобы не зависеть от картинок */}
      <ul className={styles.press}>
        {ease.press.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </section>
  )
}
