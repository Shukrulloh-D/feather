import { useFetch } from '@/shared/api'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import styles from './mission.module.css'

export function Mission() {
  // Запрос к json-server: GET /mission
  const { data: mission, isLoading, error } = useFetch('/mission')

  if (isLoading) return <Loader minHeight={160} />
  if (error) return <ErrorMessage message={error} />

  return (
    <section className={styles.section} id="why-feather">
      <h2 className={styles.quote}>{mission.quote}</h2>
      <p className={styles.text}>{mission.text}</p>
    </section>
  )
}
