import React from 'react';
import LeadMagnet from '../components/LeadMagnet';

const Loi25Checklist: React.FC = () => {
  return (
    <LeadMagnet
      title="Le guide essentiel pour rester conforme à la Loi 25 — sans perdre de temps."
      subtitle="The essential guide to staying compliant with Law 25 — without wasting time."
      bullets={[
        'Découvrez les 3 obligations clés que chaque PME québécoise doit respecter dès maintenant.',
        'Évitez les amendes coûteuses avec une checklist claire et bilingue.',
        'Gagnez du temps grâce à des actions prêtes à appliquer immédiatement.',
      ]}
      imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBEhtKecyFcExEW7tPdHHPhRyttcqxBIYtE6viQ9uYtSl0f6YjUYjrn4U-3H8ltPS8C5HxGMj987DgDTv5F7CAnEYTKidkOWY4XmuKiY7gYFGEDoRBq5IQXmBHdMOGMSnCenxaKqWFyifcQZZq-ae0Fzl-X8-UkO5krlwNKYJ1SmU56KH30Oj77qf1JAw8x2e9SK2WPfEZFxyq6QNwy5usrRnb2pjdTBHAR6P1zeWr1r9LyAuAKlg46JGdFkUJUPbGtbNM7u1lhWEw"
      ctaText="Télécharger le guide gratuit"
      consent={
        <>
          J’accepte de recevoir aussi des communications par courriel concernant la conformité et l’automatisation (Loi 25). Je peux me désabonner en tout temps.
          <br />
          <span className="italic">
            I also agree to receive follow-up emails about compliance and automation (Law 25). I can unsubscribe at any time.
          </span>
        </>
      }
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
