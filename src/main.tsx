import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import { LandingEN, LandingFR } from './pages/SpeedToLead';
import { LanguageProvider } from './LanguageProvider';
import './index.css';

const path = window.location.pathname;
let Component = App;
if (path === '/privacy') {
  Component = PrivacyPolicy;
} else if (path === '/fr/politique-confidentialite') {
  Component = PolitiqueConfidentialite;
} else if (path === '/never-miss-a-patient') {
  Component = LandingEN;
} else if (path === '/fr/ne-manquez-aucun-patient') {
  Component = LandingFR;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Component />
    </LanguageProvider>
  </StrictMode>,
);
