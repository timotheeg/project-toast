import React from 'react';

export function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.code !== 'Escape') return;

      callback();
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, [callback]);
}

