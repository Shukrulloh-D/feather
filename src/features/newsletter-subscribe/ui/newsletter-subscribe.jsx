import { useState } from 'react'
import { API_URL } from '@/shared/api'
import styles from './newsletter-subscribe.module.css'

// Форма подписки: POST-запрос в json-server (ресурс /subscribers)
export function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('loading') // блокируем поле на время запроса

    fetch(`${API_URL}/subscribers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Request failed')
        setEmail('')
        setStatus('success')
      })
      // Нет сети или сервер упал — показываем ошибку пользователю
      .catch(() => setStatus('error'))
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        aria-label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
        required
      />
      {status === 'loading' && <p className={styles.message}>Sending...</p>}
      {status === 'success' && <p className={styles.message}>Thank you!</p>}
      {status === 'error' && <p className={styles.message}>Something went wrong</p>}
    </form>
  )
}
