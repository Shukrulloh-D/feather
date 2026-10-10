import styles from './section-title.module.css'

// Заголовок секции (Shop by Room, Shop our Bestsellers и т.д.)
export function SectionTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>
}
