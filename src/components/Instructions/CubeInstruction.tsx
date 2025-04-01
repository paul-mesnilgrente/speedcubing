import styles from './styles.module.css';

export default function CubeInstruction({
  title,
  imagePath,
  hold,
  children,
}: {
  title: string;
  imagePath: string;
  hold: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.instructions__block}>
      <p className={styles.instructions__title}>{title}</p>
      <img
        src={imagePath}
        width="225"
        height="225"
        alt=""
        className="mx-auto"
      />
      <p>
        <span className={styles.instructions__hold}>{hold}</span><br />
        {children}
      </p>
    </div>
  );
}
