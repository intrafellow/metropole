export type ImageRef = { alt: string; src: string };
export interface HomeContent {
  heroImages: ImageRef[];
  attentionTitle: string;
  heroLines: string[];
  compassTitle: string;
  compassSup: string;
  compassCta: string;
  saveTheDateTitle: string;
  saveTheDateLines: string[];
  saveTheDateCta: string;
  partnersTitle: string;
  partnersImages: ImageRef[];
  partnersCountries: string[];
  services: string[];
  info: string[];
  contact: { phone: string; fax: string; email: string };
  disclaimer: string[];
  copyright: string;
}
