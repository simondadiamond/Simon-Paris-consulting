import React from 'react';
import { useLanguage } from '../LanguageProvider';

interface LeadMagnetProps {
  title: string;
  subtitle?: string;
  bullets: string[];
  imageSrc: string;
  consent: React.ReactNode;
  ctaText: string;
  person: {
    name: string;
    title: string;
    imageSrc: string;
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
  };
  recommended: string;
}

const LeadMagnet: React.FC<LeadMagnetProps> = ({
  title,
  subtitle,
  bullets,
  imageSrc,
  consent,
  ctaText,
  person,
  form,
  recommended,
}) => {
  const { lang } = useLanguage();
  const altLink =
    lang === 'fr'
      ? '/en/resources/compliance-checklist-law25-96'
      : '/fr/ressources/liste-conformite-loi25-96';
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white lg:grid lg:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden relative">
          <div className="absolute top-2 right-2 text-xs text-gray-500">
            <a href={altLink} className="underline hover:text-teal-400">
              {lang === 'fr' ? 'EN' : 'FR'}
            </a>
          </div>
          <div className="hidden lg:block relative">
            <img src={imageSrc} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12">
            <div className="lg:hidden mb-6">
              <img
                src={imageSrc}
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-[#121C2D] leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
            )}
            <ul className="mt-6 space-y-3 text-gray-500">
              {bullets.map(item => (
                <li key={item} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-teal-400 flex-shrink-0 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <form action="#" method="POST">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      {form.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={form.namePlaceholder}
                      className="block w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      {form.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={form.emailPlaceholder}
                      className="block w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-teal-400 border-gray-300 rounded focus:ring-teal-400 mt-0.5"
                    />
                    <span className="ml-3 text-xs text-gray-500">{consent}</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-teal-400 hover:bg-[#108482] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 transition duration-150 ease-in-out"
                >
                  {ctaText}
                </button>
              </form>
              <p className="mt-5 text-center text-sm font-medium text-gray-500">
                {recommended}
              </p>
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center">
                <img
                  src={person.imageSrc}
                  alt={person.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-bold text-[#121C2D]">{person.name}</p>
                  <p className="text-sm text-gray-500">{person.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnet;
