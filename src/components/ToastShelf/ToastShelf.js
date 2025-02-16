import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, dismiss}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => (<li key={toast.id} className={styles.toastWrapper}>
        <Toast id={toast.id} variant={toast.variant} dismiss={() => dismiss(toast.id)}>{toast.message}</Toast>
      </li>))
      }
    </ol>
  );
}

export default ToastShelf;
