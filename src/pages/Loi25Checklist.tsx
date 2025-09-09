import React from 'react';
import LeadMagnet from '../components/LeadMagnet';

const Loi25Checklist: React.FC = () => {
  return (
    <LeadMagnet
      title="Le guide essentiel pour rester conforme à la Loi 25 — sans perdre de temps."
      bullets={[
        'Découvrez les 3 obligations clés que chaque PME québécoise doit respecter dès maintenant.',
        'Évitez les amendes coûteuses grâce à une liste de vérification claire.',
        'Gagnez du temps grâce à des actions prêtes à appliquer immédiatement.',
      ]}
      imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDBvThyq2HHeUHfEJ6lHaZM8dDc87KlBDib-FfJs11lqjxqaS7e7qh7nYk15ZDb2bmjCoMWaigvUHezQ19ShmjSPXWHmBq_9ibtrnoVfuqmU_bAR4GjL6ZonoRJBDHvREjB6NdLyW-RaGuCyGOwNvHC5GT0LBi9lFVH0fK3P6WA2CWYaM2M9jKttHs6Go1XMOOr9unF_pB2k2UzCUMM5bXpPRTsd4QR5BDKuvlwdrdzki8lpIefEH9s2D8W-aj6mRzpHft3DI7tmJE"
      ctaText="Télécharger le guide gratuit"
      consent="J’accepte de recevoir aussi des communications par courriel concernant la conformité et l’automatisation (Loi 25). Je peux me désabonner en tout temps."
      person={{
        name: 'Simon Paris',
        title: 'Conseiller en automatisation – Québec',
        imageSrc:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDBvThyq2HHeUHfEJ6lHaZM8dDc87KlBDib-FfJs11lqjxqaS7e7qh7nYk15ZDb2bmjCoMWaigvUHezQ19ShmjSPXWHmBq_9ibtrnoVfuqmU_bAR4GjL6ZonoRJBDHvREjB6NdLyW-RaGuCyGOwNvHC5GT0LBi9lFVH0fK3P6WA2CWYaM2M9jKttHs6Go1XMOOr9unF_pB2k2UzCUMM5bXpPRTsd4QR5BDKuvlwdrdzki8lpIefEH9s2D8W-aj6mRzpHft3DI7tmJE',
      }}
    />
  );
};

export default Loi25Checklist;
