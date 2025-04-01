import styles from './styles.module.css';

export default function CubeInstruction({
  title,
  src,
  hold,
  children,
}: {
  title: string;
  src: string;
  hold: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.instructions__block}>
      <p className={styles.instructions__title}>{title}</p>
      <img
        src={src}
        width="225"
        height="225"
        alt=""
        className={styles.instructions__image}
      />
      <p>
        <span className={styles.instructions__hold}>{hold}</span><br />
        {children}
      </p>
    </div>
  );
}
