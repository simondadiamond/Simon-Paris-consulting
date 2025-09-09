export const CHECKLIST_PATH = {
  fr: '/fr/ressources/liste-conformite-loi25-96',
  en: '/en/resources/compliance-checklist-law25-96',
} as const;

export type ChecklistLang = keyof typeof CHECKLIST_PATH;
