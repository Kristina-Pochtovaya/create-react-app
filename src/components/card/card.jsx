import styles from './card.module.scss';

export function Card({ title, price, currency, description }) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>
        {price} {currency}
      </p>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>
        <p className={styles.buttonTitle}>Оставить заявку</p>
      </button>
    </div>
  );
}
