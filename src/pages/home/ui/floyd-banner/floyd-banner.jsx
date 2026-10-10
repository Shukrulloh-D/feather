import { useFetch } from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import styles from './floyd-banner.module.css'

export function FloydBanner() {
  // Запрос к json-server: GET /floyd
  const { data: floyd, isLoading, error } = useFetch('/floyd')

  if (isLoading) return <Loader minHeight={343} />
  if (error) return <ErrorMessage message={error} />

  return (
    <section className={styles.banner}>
      <div className={styles.images}>
        {floyd.images.map((img) => (
          <img key={img.id} className={styles.image} src={img.src} alt={img.alt} loading="lazy" />
        ))}
      </div>
      <div className={styles.content}>
        <p className={styles.brand}>{floyd.brand}</p>
        <h2 className={styles.title}>{floyd.title}</h2>
        <Button variant="light" href={floyd.buttonHref}>{floyd.buttonLabel}</Button>
      </div>
    </section>
  )
}
