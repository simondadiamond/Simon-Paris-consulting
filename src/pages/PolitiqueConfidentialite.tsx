import React, { useEffect } from 'react';
import { Header, Footer } from '../components/Layout';
import { useLanguage } from '../LanguageProvider';

const PolitiqueConfidentialite = () => {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang('fr');
  }, [setLang]);

  return (
    <div className="min-h-screen bg-white">
      <Header langToggleHref="/privacy" langToggleLabel="EN" />
      <main className="max-w-[800px] mx-auto pt-40 p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#121C2D] mb-6">Politique de confidentialité (Loi 25 &amp; LCAPC)</h1>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#121C2D] leading-relaxed">
          Bienvenue chez Simon Paris Consulting. Nous respectons votre vie privée et nous engageons à protéger vos renseignements personnels conformément à la Loi 25 du Québec et à la Loi canadienne anti-pourriel (LCAPC). Cette politique décrit comment nous collectons, utilisons, divulguons et sécurisons vos données.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#121C2D] mb-4 mt-8">1. Responsable</h2>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#121C2D] leading-relaxed">
          <strong>Responsable:</strong> Simon Paris (entrepreneur individuel)<br />
          <strong>Adresse:</strong> 1234 Rue Exemple, Québec (QC) G1A 0A0<br />
          <strong>Courriel:</strong> <a href="mailto:privacy@simonparis.ca" className="text-[#2280FF] hover:underline">privacy@simonparis.ca</a>
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#121C2D] mb-4 mt-8">2. Données collectées</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-[#DDD] border-collapse text-left text-[0.9rem] md:text-base">
            <thead className="bg-[#F7F7F7] text-[#121C2D]">
              <tr>
                <th className="border border-[#DDD] px-4 py-2">Élément</th>
                <th className="border border-[#DDD] px-4 py-2">Source</th>
                <th className="border border-[#DDD] px-4 py-2">Finalité</th>
                <th className="border border-[#DDD] px-4 py-2">Base légale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-[#FCFCFC]">
                <td className="border border-[#DDD] px-4 py-2">Prénom</td>
                <td className="border border-[#DDD] px-4 py-2">Formulaire</td>
                <td className="border border-[#DDD] px-4 py-2">Personnalisation, contacts</td>
                <td className="border border-[#DDD] px-4 py-2">Consentement</td>
              </tr>
              <tr className="even:bg-[#FCFCFC]">
                <td className="border border-[#DDD] px-4 py-2">Courriel</td>
                <td className="border border-[#DDD] px-4 py-2">Formulaire</td>
                <td className="border border-[#DDD] px-4 py-2">Infolettre, mises à jour</td>
                <td className="border border-[#DDD] px-4 py-2">Consentement</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-[#121C2D] mb-4 mt-8">3. Stockage &amp; Sécurité</h2>
        <ul className="list-disc list-inside mb-6 text-[0.9rem] md:text-base text-[#121C2D] leading-relaxed">
          <li><strong>Emplacements :</strong> Systeme.io, Airtable (chiffré au repos)</li>
          <li><strong>Accès :</strong> Simon Paris, assistant, CRM</li>
          <li><strong>Sécurité :</strong> HTTPS, mots de passe forts, révisions d’accès</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold text-[#121C2D] mb-4 mt-8">4. Conservation &amp; Suppression</h2>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#121C2D] leading-relaxed">
          <strong>Durée :</strong> 24 mois après dernière interaction.<br />
          <strong>Suppression :</strong> Destruction sécurisée selon notre registre.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#121C2D] mb-4 mt-8">5. Vos Droits</h2>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#121C2D] leading-relaxed">
          Vous pouvez accéder, corriger ou effacer vos données à tout moment. Pour exercer vos droits : <a href="mailto:privacy@simonparis.ca" className="text-[#2280FF] hover:underline">privacy@simonparis.ca</a>. Vous pouvez aussi déposer une plainte auprès de la CAI QC.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#121C2D] mb-4 mt-8">6. Cookies &amp; Suivi</h2>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#121C2D] leading-relaxed">Nous utilisons uniquement des cookies essentiels après consentement. Aucun cookie marketing ou analytique ne s’active avant.</p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#121C2D] mb-4 mt-8">7. Partage à des tiers</h2>
        <p className="mb-6 text-[0.9rem] md:text-base text-[#121C2D] leading-relaxed">Données partagées uniquement avec systeme.io et Airtable sous ententes conformes à la Loi 25.</p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#121C2D] mb-4 mt-8">8. Modifications</h2>
        <p className="text-[0.9rem] md:text-base text-[#121C2D] leading-relaxed">Dernière mise à jour : 5 août 2025. Nous vous informerons par courriel en cas de changement important.</p>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
