import { useState } from 'react'
import { useFetch } from '@/shared/api'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import styles from './header.module.css'

export function Header() {
  // Запрос к json-server: GET /header
  const { data: header, isLoading, error } = useFetch('/header')
  // Состояние мобильного меню (бургер)
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) return <Loader minHeight={80} />
  if (error) return <ErrorMessage message={error} />

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Слева основное меню, справа сервисное. На мобильном скрываются, пока не открыт бургер */}
        <nav className={`${styles.nav} ${styles.left} ${isOpen ? styles.open : ''}`}>
          {header.navLeft.map((item) => (
            <a key={item.id} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className={styles.logo} href="#top">{header.logo}</a>

        <nav className={`${styles.nav} ${styles.right} ${isOpen ? styles.open : ''}`}>
          {header.navRight.map((item) => (
            <a key={item.id} href={item.href}>{item.label}</a>
          ))}
          <a href="#cart" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 3h3l2.5 12h11L21 7H6" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}
