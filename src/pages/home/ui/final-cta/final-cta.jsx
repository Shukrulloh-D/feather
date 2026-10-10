import { useFetch } from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import styles from './final-cta.module.css'

export function FinalCta() {
  // Запрос к json-server: GET /finalCta
  const { data: cta, isLoading, error } = useFetch('/finalCta')

  if (isLoading) return <Loader minHeight={200} />
  if (error) return <ErrorMessage message={error} />

  return (
    <section className={styles.section}>
      <p className={styles.text}>{cta.text}</p>
      <Button href={cta.buttonHref}>{cta.buttonLabel}</Button>
    </section>
  )
}
