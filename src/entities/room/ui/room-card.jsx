import styles from './room-card.module.css'

export function RoomCard({ room }) {
  const style = { '--border': room.border, '--shadow': room.shadow }

  return (
    <a className={styles.card} href="#furniture" style={style}>
      <img className={styles.image} src={room.image} alt={room.name} loading="lazy" />
      <span className={styles.name}>{room.name}</span>
    </a>
  )
}
