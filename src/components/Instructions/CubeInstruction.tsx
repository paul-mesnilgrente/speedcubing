import styles from './styles.module.css';
import { Fragment } from 'react';

export default function CubeInstruction({
  title,
  link,
  src,
  hold,
  children,
}: {
  title: string;
  link: string | undefined;
  src: string;
  hold: string;
  children: React.ReactNode;
}) {
  const TitleTag = link ? 'a' : Fragment;
  const titleProps = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <div className={styles.instructions__block}>
      <p className={styles.instructions__title}>
        <TitleTag {...titleProps}>{title}</TitleTag>
      </p>
      <img
        src={src}
        width="225"
        height="225"
        alt=""
        className={styles.instructions__image}
      />
      <p>
        <span className={styles.instructions__hold}>{hold}</span><br />
      </p>
      {children}
    </div>
  );
}
