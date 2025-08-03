import React from 'react';
import { Header, Footer } from '../App';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="fixed top-4 right-4 z-50">
        <a href="/fr/politique-confidentialite" className="text-[#2ED3CF] hover:text-[#2280FF] font-semibold">FR</a>
      </div>
      <main className="max-w-[800px] mx-auto p-8 pt-32">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy (Law 25 &amp; CASL Compliance)</h1>
        <p className="mb-6">
          Welcome to Simon Paris Consulting. We respect your privacy and are committed to protecting your personal information under Quebec’s Law 25 and Canada’s Anti-Spam Legislation (CASL). This policy explains how we collect, use, disclose, and safeguard your data.
        </p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">1. Data Controller</h2>
        <p className="mb-6">
          <strong>Controller:</strong> Simon Paris (sole proprietor)<br />
          <strong>Address:</strong> 1234 Rue Exemple, Québec (QC) G1A 0A0<br />
          <strong>Email:</strong> <a href="mailto:privacy@simonparis.ca" className="text-[#2ED3CF] hover:text-[#2280FF]">privacy@simonparis.ca</a>
        </p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">2. Personal Data We Collect</h2>
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Data Element</th>
              <th className="border px-4 py-2 text-left">Source</th>
              <th className="border px-4 py-2 text-left">Purpose</th>
              <th className="border px-4 py-2 text-left">Legal Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">First Name</td>
              <td className="border px-4 py-2">Opt-in form</td>
              <td className="border px-4 py-2">Personalization, outreach</td>
              <td className="border px-4 py-2">Consent</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Email</td>
              <td className="border px-4 py-2">Opt-in form</td>
              <td className="border px-4 py-2">Newsletter, updates</td>
              <td className="border px-4 py-2">Consent</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">3. Storage &amp; Security</h2>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Locations:</strong> Systeme.io, Airtable (encrypted at rest)</li>
          <li><strong>Access:</strong> Simon Paris, designated assistant, CRM</li>
          <li><strong>Security:</strong> HTTPS, strong passwords, periodic access reviews</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">4. Retention &amp; Destruction</h2>
        <p className="mb-6">
          <strong>Retention period:</strong> 24 months from last interaction.<br />
          <strong>Destruction:</strong> Secure deletion logged in our register.
        </p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">5. Your Rights</h2>
        <p className="mb-6">
          You may request to access, correct, or erase your data at any time. To exercise your rights, contact <a href="mailto:privacy@simonparis.ca" className="text-[#2ED3CF] hover:text-[#2280FF]">privacy@simonparis.ca</a>. You may also file a complaint with the Commission d’accès à l’information du Québec.
        </p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">6. Cookies &amp; Tracking</h2>
        <p className="mb-6">We use only essential cookies after consent. No marketing or analytics cookies fire before opt-in.</p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">7. Third-Party Sharing</h2>
        <p className="mb-6">We share data only with systeme.io and Airtable under Law 25-equivalent agreements.</p>

        <h2 className="text-2xl font-semibold text-[#2ED3CF] mb-4">8. Changes to this Policy</h2>
        <p>Last updated: August 5, 2025. We will email you if there’s a material change.</p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
