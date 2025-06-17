import { Button } from './components/button/buton';
import styles from './App.module.scss';
import { buttons_data } from './mocks/buttons_data';
import { cards_data } from './mocks/cards_data';
import { Card } from './components/card/card';

export function App() {
  return (
    <div className={styles.app}>
      <div className={styles.contanier}>
        <div className={styles.content}>
          <div className={styles.buttons}>
            {buttons_data &&
              buttons_data.length > 0 &&
              buttons_data.map((button, index) => (
                <Button key={index} title={button.title} />
              ))}
          </div>
          <div className={styles.cards}>
            {cards_data &&
              cards_data.length > 0 &&
              cards_data.map((card, index) => (
                <Card key={index} {...card} className={styles.card} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
