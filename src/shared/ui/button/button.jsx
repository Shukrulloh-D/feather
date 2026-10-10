import styles from './button.module.css'

// variant: primary (оранжевая таблетка), light (белая таблетка), link (оранжевый текст)
// Если передан href — рендерим <a>, иначе <button>
export function Button({ variant = 'primary', href, children, ...props }) {
  const className = `${styles.button} ${styles[variant]}`

  if (href) {
    return (
      <a className={className} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
