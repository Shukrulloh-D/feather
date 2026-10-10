import { useFetch } from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { SectionTitle } from '@/shared/ui/section-title'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import { ProductCard } from '@/entities/product'
import styles from './bestsellers.module.css'

export function Bestsellers() {
  // Заголовок секции + список товаров из ресурса /products
  const { data: section, isLoading: isSectionLoading, error: sectionError } = useFetch('/bestsellers')
  const { data: products, isLoading: isProductsLoading, error: productsError } = useFetch('/products')

  if (isSectionLoading || isProductsLoading) return <Loader />
  if (sectionError || productsError) return <ErrorMessage message={sectionError || productsError} />

  return (
    <section className={styles.section}>
      <SectionTitle>{section.title}</SectionTitle>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.more}>
        <Button variant="link" href={section.linkHref}>{section.linkLabel}</Button>
      </div>
    </section>
  )
}
