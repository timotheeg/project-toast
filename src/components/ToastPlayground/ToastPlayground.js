import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  const dismissToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (!message) return;

    const newToast = {
      id: crypto.randomUUID(),
      variant,
      message,
    };

    setToasts([...toasts, newToast]);
    setMessage('');
    setVariant('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && <ToastShelf toasts={toasts} dismiss={dismissToast} />}

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} onChange={(event) => setMessage(event.target.value)} value={message} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(type => (<label htmlFor={`variant-${type}`}>
              <input
                id={`variant-${type}`}
                key={`variant-${type}`}
                type="radio"
                name="variant"
                value={type}
                checked={type === variant}
                onChange={(event) => setVariant(event.target.value)}
              />
              {type}
            </label>))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
