export type Lang = "fr" | "en" | "de";

export const LANGS: Lang[] = ["fr", "en", "de"];

export const MESSAGES: Record<Lang, { title: string; body: string; footer: string }> = {
  fr: {
    title: "Bon anniversaire",
    body: "Nous te souhaitons une merveilleuse journée entourée de ceux que tu aimes !",
    footer: "Avec toute notre affection.",
  },
  en: {
    title: "Happy birthday",
    body: "We wish you a wonderful day surrounded by the people you love!",
    footer: "With all our affection.",
  },
  de: {
    title: "Alles Gute zum Geburtstag",
    body: "Wir wünschen dir einen wunderschönen Tag im Kreise deiner Liebsten!",
    footer: "Mit herzlichen Grüßen.",
  },
};
