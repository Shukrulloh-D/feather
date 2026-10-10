import styles from './loader.module.css'

// Индикатор загрузки; minHeight держит место секции, чтобы страница не прыгала
export function Loader({ minHeight = 200 }) {
  return (
    <div className={styles.loader} style={{ minHeight }} role="status" aria-label="Loading">
      <span className={styles.spinner} />
    </div>
  )
}
