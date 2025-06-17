import styles from './butons.module.scss';

export function Button({ title }) {
  return (
    <button className={styles.button}>
      <p className={styles.title}>{title}</p>
    </button>
  );
}
