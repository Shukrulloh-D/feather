import styles from './room-card.module.css'

// Карточка комнаты. Цвета рамки и тени приходят из db.json через CSS-переменные
export function RoomCard({ room }) {
  const style = { '--border': room.border, '--shadow': room.shadow }

  return (
    <a className={styles.card} href="#furniture" style={style}>
      <img className={styles.image} src={room.image} alt={room.name} loading="lazy" />
      <span className={styles.name}>{room.name}</span>
    </a>
  )
}
