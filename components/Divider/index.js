import styles from './divider.module.css';

function Divider() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.divider} `} />
    </div>
  );
}

export default Divider;
