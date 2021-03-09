import { useSpring, animated } from 'react-spring';
import styles from './CardWithRotation.module.css';

const CardWithRotation = ({ children }) => {
  const [effect, set, stop] = useSpring(() => ({
    transform: 'rotate(355deg)',
  }));

  return (
    <div
      className={styles.card}
      onMouseEnter={() => set({ transform: 'rotate(365deg)' })}
      onMouseLeave={() => set({ transform: 'rotate(355deg)' })}
    >
      <div className={styles.content}>{children}</div>
      <animated.div style={effect} className={styles.rotator} />
    </div>
  );
};

export default CardWithRotation;
