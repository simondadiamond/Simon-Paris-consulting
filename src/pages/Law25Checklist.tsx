import React from 'react';
import LeadMagnet from '../components/LeadMagnet';
import { useLanguage } from '../LanguageProvider';

const heroImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBEhtKecyFcExEW7tPdHHPhRyttcqxBIYtE6viQ9uYtSl0f6YjUYjrn4U-' +
  '3H8ltPS8C5HxGMj987DgDTv5F7CAnEYTKidkOWY4XmuKiY7gYFGEDoRBq5IQXmBHdMOGMSnCenxaKqWFyifcQZZq-ae0Fzl-X8-UkO5krlwNKYJ1SmU56KH30Oj77qf1' +
  'JAw8x2e9SK2WPfEZFxyq6QNwy5usrRnb2pjdTBHAR6P1zeWr1r9LyAuAKlg46JGdFkUJUPbGtbNM7u1lhWEw';

const avatarImg =
  'https://raw.githubusercontent.com/simondadiamond/Simon-Paris-consulting/eae08774e1af7cdb40b14cfb3dfe16b961b0a763/public/simon-xs.jpg';

const Law25Checklist: React.FC = () => {
  const { t } = useLanguage();
  const c = t.law25Checklist;
  return (
    <LeadMagnet
      title={c.title}
      bullets={c.bullets}
      imageSrc={heroImg}
      ctaText={c.cta}
      consent={c.consent}
      form={c.form}
      recommended={c.recommended}
      person={{
        name: 'Simon Paris',
        title: c.personTitle,
        imageSrc: avatarImg,
      }}
    />
  );
};

export default Law25Checklist;
