import { useInView } from '@/shared/lib'
import styles from './reveal.module.css'

// Обёртка: плавно показывает секцию, когда пользователь докрутил до неё
export function Reveal({ children }) {
  const { ref, isVisible } = useInView()

  return (
    <div ref={ref} className={`${styles.reveal} ${isVisible ? styles.visible : ''}`}>
      {children}
    </div>
  )
}
