import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './normalize.css';
import './index.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
