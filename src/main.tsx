import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import { LanguageProvider } from './LanguageProvider';
import './index.css';

const path = window.location.pathname;
let Component = App;
if (path === '/privacy') {
  Component = PrivacyPolicy;
} else if (path === '/fr/politique-confidentialite') {
  Component = PolitiqueConfidentialite;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Component />
    </LanguageProvider>
  </StrictMode>,
);
