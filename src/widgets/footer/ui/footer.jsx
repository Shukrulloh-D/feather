import { useFetch } from '@/shared/api'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import { NewsletterSubscribe } from '@/features/newsletter-subscribe'
import styles from './footer.module.css'

export function Footer() {
  // Запрос к json-server: GET /footer
  const { data: footer, isLoading, error } = useFetch('/footer')

  if (isLoading) return <Loader minHeight={300} />
  if (error) return <ErrorMessage message={error} />

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Колонки ссылок строятся из массива columns */}
        {footer.columns.map((column) => (
          <nav key={column.id} className={styles.column}>
            <h3 className={styles.heading}>{column.title}</h3>
            <ul className={styles.list}>
              {column.links.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className={styles.column}>
          <h3 className={styles.heading}>{footer.socialTitle}</h3>
          <ul className={styles.socials}>
            {footer.socials.map((social) => (
              <li key={social.id}>
                <a className={styles.social} href={social.href} aria-label={social.label}>
                  {social.short}
                </a>
              </li>
            ))}
          </ul>

          <h3 className={`${styles.heading} ${styles.newsletter}`}>{footer.newsletterTitle}</h3>
          <NewsletterSubscribe />
        </div>
      </div>
    </footer>
  )
}
