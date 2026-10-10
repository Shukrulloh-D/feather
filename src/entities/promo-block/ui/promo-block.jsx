import { Button } from '@/shared/ui/button'
import styles from './promo-block.module.css'

//Универсальный блок «текст + картинки». layout: "text-image" | "image-text"
export function PromoBlock({ block }) {
  // Класс reverse меняет порядок колонок через CSS (order)
  const isReversed = block.layout === 'image-text'
  const frameClass = block.frame === 'lime' ? styles.lime : ''

  return (
    <section className={`${styles.block} ${isReversed ? styles.reverse : ''}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>{block.title}</h2>
        {block.text.map((paragraph) => (
          <p key={paragraph} className={styles.text}>{paragraph}</p>
        ))}
        <Button variant="link" href={block.linkHref}>{block.linkLabel}</Button>
      </div>

      <div className={`${styles.media} ${frameClass}`}>
        {block.images.map((img) => (
          <figure key={img.src} className={styles.figure}>
            <img className={styles.image} src={img.src} alt={img.alt} loading="lazy" />
            {img.label && <figcaption className={styles.label}>{img.label}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  )
}
