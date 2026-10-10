import { useFetch } from '@/shared/api'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import { PromoBlock } from '@/entities/promo-block'
import styles from './promo-sections.module.css'

// Четыре блока «текст + картинка» из макета (Enjoy, Garage Sale, Business, Never assemble)
export function PromoSections() {
  // Запрос к json-server: GET /promoBlocks (массив блоков)
  const { data: blocks, isLoading, error } = useFetch('/promoBlocks')

  if (isLoading) return <Loader minHeight={400} />
  if (error) return <ErrorMessage message={error} />

  return (
    <div className={styles.wrapper} id="business">
      {blocks.map((block) => (
        <PromoBlock key={block.id} block={block} />
      ))}
    </div>
  )
}
