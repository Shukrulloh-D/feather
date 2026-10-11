import { useFetch } from '@/shared/api'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import styles from './mission.module.css'

export function Mission() {
  // Запрос данных: /api/mission.json
  const { data: mission, isLoading, error } = useFetch('/mission')

  if (isLoading) return <Loader minHeight={160} />
  if (error) return <ErrorMessage message={error} />

  return (
    // section на всю ширину (белый фон), текст внутри ограничен по ширине
    <section className={styles.section} id="why-feather">
      <div className={styles.inner}>
        <h2 className={styles.quote}>{mission.quote}</h2>
        <p className={styles.text}>{mission.text}</p>
      </div>
    </section>
  )
}
