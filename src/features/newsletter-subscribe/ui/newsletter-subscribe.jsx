import { useState } from 'react'
import styles from './newsletter-subscribe.module.css'

// Форма подписки
export function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('loading')

    // Имитация ответа сервера через 0.8 секунды
    setTimeout(() => {
      setEmail('')
      setStatus('success')
    }, 800)
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
    </form>
  )
}
