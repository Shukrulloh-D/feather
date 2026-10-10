import styles from './error-message.module.css'

// Блок ошибки: показывается вместо секции, если запрос не удался
export function ErrorMessage({ message }) {
  return (
    <div className={styles.box} role="alert">
      <p className={styles.title}>Failed to load data</p>
      <p className={styles.details}>{message}</p>
    </div>
  )
}
