import { Button } from '@/shared/ui/button'
import styles from './promo-block.module.css'

// Универсальный блок «текст + картинки». layout: "text-image" | "image-text"
export function PromoBlock({ block }) {
  // reverse меняет колонки местами через CSS (order)
  const isReversed = block.layout === 'image-text'
  // Если картинок две (Residential / Office) — показываем их рядом одинаковой высоты
  const isPair = block.images.length > 1
  const isLime = block.frame === 'lime'

  const mediaClass = `${styles.media} ${isPair ? styles.pair : ''} ${isLime ? styles.lime : ''}`

  return (
    <section className={`${styles.block} ${isReversed ? styles.reverse : ''}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>{block.title}</h2>
        {block.text.map((paragraph) => (
          <p key={paragraph} className={styles.text}>{paragraph}</p>
        ))}
        <Button variant="link" href={block.linkHref}>{block.linkLabel}</Button>
      </div>

      <div className={mediaClass}>
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
