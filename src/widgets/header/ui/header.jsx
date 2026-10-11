import { useState, useEffect } from 'react'
import { useFetch } from '@/shared/api'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import styles from './header.module.css'

export function Header({ cartCount }) {
  // Запрос данных: /api/header.json
  const { data: header, isLoading, error } = useFetch('/header')
  const [isOpen, setIsOpen] = useState(false) // открыто ли мобильное меню
  const [isScrolled, setIsScrolled] = useState(false) // прокручена ли страница

  // Слушаем скролл: когда страница ушла вниз, добавляем тень шапке
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) return <Loader minHeight={80} />
  if (error) return <ErrorMessage message={error} />

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Слева основное меню, справа сервисное. Клик по ссылке закрывает мобильное меню */}
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(false)}>
          {header.navLeft.map((item) => (
            <a key={item.id} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className={styles.logo} href="#top">{header.logo}</a>

        <nav className={`${styles.nav} ${styles.right} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(false)}>
          {header.navRight.map((item) => (
            <a key={item.id} href={item.href}>{item.label}</a>
          ))}
          <a className={styles.cart} href="#cart" aria-label={`Cart, ${cartCount} items`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 3h3l2.5 12h11L21 7H6" />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
            </svg>
            {/* Бейдж со счётчиком показываем, только если в корзине что-то есть */}
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </a>
        </nav>
      </div>
    </header>
  )
}
