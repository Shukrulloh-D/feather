import { Button } from '@/shared/ui/button'
import styles from './product-card.module.css'

export function ProductCard({ product, onAddToCart }) {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={product.image} alt={product.name} loading="lazy" />
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.line}>
        Rent for <span className={styles.rent} >${product.rent}</span>/mo
      </p>
      <p className={styles.line}>
        or buy for <span className={styles.old}>${product.buyOld}</span>
      </p>
      <p className={styles.line}>${product.buy}</p>
      <div className={styles.action}>
        <Button variant="link" onClick={onAddToCart}>Add to cart</Button>
      </div>
    </article>
  )
}
