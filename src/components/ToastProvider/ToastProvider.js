import React from 'react';

import { useEscapeKey } from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  const dismissToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  const addToast = function({variant, message}) {
    const newToast = {
      id: crypto.randomUUID(),
      variant,
      message,
    };

    setToasts([...toasts, newToast]);
  }

  const data = {
    toasts,
    addToast,
    dismissToast,
    VARIANT_OPTIONS,
  };

  return <ToastContext.Provider value={data}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
