import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { initLenis } from './lib/lenis';

// Initialize Lenis smooth-scrolling before React mounts
if (typeof window !== 'undefined') {
  initLenis();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
