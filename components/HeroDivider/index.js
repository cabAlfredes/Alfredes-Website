import styles from './heroDivider.module.scss';

import React from 'react';

const HeroDivider = ({ children }) => {
  return (
    <div className={styles.heroDivider}>
        {children}
    </div>
  );
};

export default HeroDivider;