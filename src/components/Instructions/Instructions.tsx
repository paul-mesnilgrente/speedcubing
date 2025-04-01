import styles from './styles.module.css';

export default function Instructions({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.instructions}>
      {children}
    </div>
  )
}
