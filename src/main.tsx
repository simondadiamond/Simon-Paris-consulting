/* eslint-disable react-refresh/only-export-components */
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import { LandingEN, LandingFR } from './pages/SpeedToLead';
import { NewsletterEN, NewsletterFR } from './pages/NewsletterPage';
import NewsletterConfirmation from './pages/NewsletterConfirmation';
import ProjectDetail from './pages/ProjectDetail';
import { LanguageProvider } from './LanguageProvider';
import './index.css';

// Normalize path to handle optional trailing slashes
const path = decodeURI(window.location.pathname).replace(/\/+$/, '') || '/';
let Component: React.ComponentType = App;
if (path === '/privacy') {
  Component = PrivacyPolicy;
} else if (path === '/fr/politique-confidentialite') {
  Component = PolitiqueConfidentialite;
} else if (path === '/never-miss-a-patient') {
  Component = LandingEN;
} else if (path === '/fr/ne-manquez-aucun-patient') {
  Component = LandingFR;
} else if (path === '/fr/newsletter') {
  Component = NewsletterFR;
} else if (path === '/en/newsletter') {
  Component = NewsletterEN;
} else if (path === '/newsletter/confirmation') {
  Component = NewsletterConfirmation;
} else if (path === '/en') {
  Component = App;
} else {
  const projectMatch = path.match(/^\/project\/([^/]+)$/);
  if (projectMatch) {
    const slug = projectMatch[1];
    Component = () => <ProjectDetail slug={slug} />;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Component />
    </LanguageProvider>
  </StrictMode>,
);
