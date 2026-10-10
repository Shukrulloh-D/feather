import styles from './review-card.module.css'

// Карточка отзыва со звёздами; цвета берём из данных
export function ReviewCard({ review }) {
  const style = {
    '--border': review.border,
    '--shadow': review.shadow,
    '--star': review.star,
  }

  return (
    <article className={styles.card} style={style}>
      {/* Количество звёзд = rating */}
      <p className={styles.stars} aria-label={`Rating: ${review.rating} of 5`}>
        {'★'.repeat(review.rating)}
      </p>
      <p className={styles.text}>{review.text}</p>
      <p className={styles.author}>- {review.author}</p>
    </article>
  )
}
