import { useSpring, animated } from 'react-spring';
import styles from './sectionTitle.module.css';

function SectionTitle({ children }) {
  const [effect, set, stop] = useSpring(() => ({
    transform: 'rotate(359deg)',
  }));

  const [rotate, update] = useSpring(() => ({
    transform: 'rotate(361deg)',
  }));

  const handleHover = () => {
    set({ transform: 'rotate(361deg)' });
    update({ transform: 'rotate(360deg)' });
  };
  const handleMouseLeave = () => {
    set({ transform: 'rotate(359deg)' });
    update({ transform: 'rotate(361deg)' });
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <animated.div style={rotate} className={styles.content}>
        <h1 className={styles.children}>{children}</h1>
      </animated.div>
      <animated.div style={effect} className={styles.rotator} />
    </div>
  );
}

export default SectionTitle;
