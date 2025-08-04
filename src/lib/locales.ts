export const localeMetadata: Record<
  string,
  { name: string; emoji: string; flagUrl: string }
> = {
  en: {
    name: "English",
    emoji: "🇺🇸",
    flagUrl: "https://flagcdn.com/us.svg",
  },
  bn: {
    name: "বাংলা",
    emoji: "🇧🇩",
    flagUrl: "https://flagcdn.com/bd.svg",
  },
};

export const availableLocales = Object.keys(localeMetadata);
