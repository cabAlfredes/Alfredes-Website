import styles from './heroDivider.module.scss';

import React from 'react';

const index = ({ children }) => {
  return (
    <div className={styles.videoBottomFrame}>
        {children}
    </div>
  );
};

export default index;