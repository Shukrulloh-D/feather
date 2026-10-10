import { useFetch } from '@/shared/api'
import { SectionTitle } from '@/shared/ui/section-title'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import { ReviewCard } from '@/entities/review'
import styles from './reviews.module.css'

export function Reviews() {
  // Заголовок секции + отзывы из ресурса /reviews
  const { data: section, isLoading: isSectionLoading, error: sectionError } = useFetch('/reviewsSection')
  const { data: reviews, isLoading: isReviewsLoading, error: reviewsError } = useFetch('/reviews')

  if (isSectionLoading || isReviewsLoading) return <Loader />
  if (sectionError || reviewsError) return <ErrorMessage message={sectionError || reviewsError} />

  return (
    <section className={styles.section}>
      <SectionTitle>{section.title}</SectionTitle>
      {/* Горизонтальный скролл со scroll-snap, без слайдер-библиотек */}
      <div className={styles.track}>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  )
}
