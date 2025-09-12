/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import { LandingEN, LandingFR } from './pages/SpeedToLead';
import Law25Checklist from './pages/Law25Checklist';
import { LanguageProvider } from './LanguageProvider';
import './index.css';

// Normalize path to handle optional trailing slashes
const path = decodeURI(window.location.pathname).replace(/\/+$/, '') || '/';
let Component = App;
if (path === '/privacy') {
  Component = PrivacyPolicy;
} else if (path === '/fr/politique-confidentialite') {
  Component = PolitiqueConfidentialite;
} else if (path === '/never-miss-a-patient') {
  Component = LandingEN;
} else if (path === '/fr/ne-manquez-aucun-patient') {
  Component = LandingFR;
} else if (
  path === '/fr/ressources/liste-conformite-loi25-96' ||
  path === '/en/resources/compliance-checklist-law25-96'
) {
  Component = Law25Checklist;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Component />
    </LanguageProvider>
  </StrictMode>,
);
