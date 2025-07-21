import en from './en';
import fr from './fr';

export const translations = { en, fr } as const;
export type Language = keyof typeof translations;
export type Translation = typeof en;
