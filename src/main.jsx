import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { loadLanguage } from './i18n';

// The visitor's language file loads first (nothing to wait for in Spanish), then the app,
// so every text in it is already in that language.
loadLanguage()
  .then(() => import('./App.jsx'))
  .then(({ default: App }) => {
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
