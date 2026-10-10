import { useFetch } from '@/shared/api'
import { SectionTitle } from '@/shared/ui/section-title'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/error-message'
import { RoomCard } from '@/entities/room'
import styles from './shop-by-room.module.css'

export function ShopByRoom() {
  // Два независимых запроса: заголовок секции и список комнат
  const { data: section, isLoading: isSectionLoading, error: sectionError } = useFetch('/shopByRoom')
  const { data: rooms, isLoading: isRoomsLoading, error: roomsError } = useFetch('/rooms')

  // Секция готова, когда завершились оба запроса
  if (isSectionLoading || isRoomsLoading) return <Loader />
  if (sectionError || roomsError) return <ErrorMessage message={sectionError || roomsError} />

  return (
    <section className={styles.section} id="furniture">
      <SectionTitle>{section.title}</SectionTitle>
      <div className={styles.grid}>
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  )
}
