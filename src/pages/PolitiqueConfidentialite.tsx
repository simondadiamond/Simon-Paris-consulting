import React from 'react';
import { Header, Footer } from '../App';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="fixed top-4 right-4 z-50">
        <a href="/privacy" className="text-[#2ED3CF] hover:text-[#2280FF] font-semibold">EN</a>
      </div>
      <main className="max-w-[800px] mx-auto p-8 pt-32">
        <h1 className="text-3xl font-bold mb-6">Politique de confidentialité (Loi 25 &amp; LCAPC)</h1>
        <p className="mb-6">
          Bienvenue chez Simon Paris Consulting. Nous respectons votre vie privée et nous engageons à protéger vos renseignements personnels conformément à la Loi 25 du Québec et à la Loi canadienne anti-pourriel (LCAPC). Cette politique décrit comment nous collectons, utilisons, divulguons et sécurisons vos données.
        </p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">1. Responsable</h2>
        <p className="mb-6">
          <strong>Responsable:</strong> Simon Paris (entrepreneur individuel)<br />
          <strong>Adresse:</strong> 1234 Rue Exemple, Québec (QC) G1A 0A0<br />
          <strong>Courriel:</strong> <a href="mailto:privacy@simonparis.ca" className="text-[#2ED3CF] hover:text-[#2280FF]">privacy@simonparis.ca</a>
        </p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">2. Données collectées</h2>
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Élément</th>
              <th className="border px-4 py-2 text-left">Source</th>
              <th className="border px-4 py-2 text-left">Finalité</th>
              <th className="border px-4 py-2 text-left">Base légale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Prénom</td>
              <td className="border px-4 py-2">Formulaire</td>
              <td className="border px-4 py-2">Personnalisation, contacts</td>
              <td className="border px-4 py-2">Consentement</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Courriel</td>
              <td className="border px-4 py-2">Formulaire</td>
              <td className="border px-4 py-2">Infolettre, mises à jour</td>
              <td className="border px-4 py-2">Consentement</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">3. Stockage &amp; Sécurité</h2>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Emplacements :</strong> Systeme.io, Airtable (chiffré au repos)</li>
          <li><strong>Accès :</strong> Simon Paris, assistant, CRM</li>
          <li><strong>Sécurité :</strong> HTTPS, mots de passe forts, révisions d’accès</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">4. Conservation &amp; Suppression</h2>
        <p className="mb-6">
          <strong>Durée :</strong> 24 mois après dernière interaction.<br />
          <strong>Suppression :</strong> Destruction sécurisée selon notre registre.
        </p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">5. Vos Droits</h2>
        <p className="mb-6">
          Vous pouvez accéder, corriger ou effacer vos données à tout moment. Pour exercer vos droits : <a href="mailto:privacy@simonparis.ca" className="text-[#2ED3CF] hover:text-[#2280FF]">privacy@simonparis.ca</a>. Vous pouvez aussi déposer une plainte auprès de la CAI QC.
        </p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">6. Cookies &amp; Suivi</h2>
        <p className="mb-6">Nous utilisons uniquement des cookies essentiels après consentement. Aucun cookie marketing ou analytique ne s’active avant.</p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">7. Partage à des tiers</h2>
        <p className="mb-6">Données partagées uniquement avec systeme.io et Airtable sous ententes conformes à la Loi 25.</p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">8. Modifications</h2>
        <p>Dernière mise à jour : 5 août 2025. Nous vous informerons par courriel en cas de changement important.</p>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
