import { useFetch } from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import styles from './hero.module.css'

export function Hero() {
  // Запрос к json-server: GET /hero
  const { data: hero, isLoading, error } = useFetch('/hero')

  if (isLoading) return <Loader minHeight={320} />
  if (error) return <ErrorMessage message={error} />

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.text}>{hero.text}</p>
        <Button href={hero.buttonHref}>{hero.buttonLabel}</Button>
      </div>
      <img className={styles.image} src={hero.image} alt={hero.imageAlt} />
    </section>
  )
}
