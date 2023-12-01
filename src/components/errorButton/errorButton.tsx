import { useEffect, useState } from 'react';
import './errorButton.css';

const ErrorButton = () => {
  const [hasError, setHasError] = useState(false);
  const createError = () => {
    setHasError(true);
  };

  useEffect(() => {
    if (hasError) {
      throw new Error('This is a test error');
    }
  }, [hasError]);

  return (
    <button className="btn_error" onClick={createError}>
      Create Error
    </button>
  );
};

export default ErrorButton;
