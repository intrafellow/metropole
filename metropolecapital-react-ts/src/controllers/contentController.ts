// Контент 1:1 из Wayback (снимок 2025-02-15). Не меняем текст/символы.
import type { HomeContent } from "@models/Page";
const WB = "https://web.archive.org/web/20250215031504/https://www.metropolecapital.com";
export function getHomeContent(): HomeContent {
  return {
    heroImages: [
      { alt: "Hero 1", src: `${WB}/` },
      { alt: "Hero 2", src: `${WB}/` }
    ],
    attentionTitle: "Attention Founders in Search of Seed or Growth Capital",
    heroLines: [
      "Welcome to our on-demand, next generation venture",
      "financing and capital formation marketplace.",
      "-Made by Entrepreneurs for Entrepreneurs-"
    ],
    compassTitle: "Funding Compass",
    compassSup: "™",
    compassCta: "LEARN MORE",
    saveTheDateTitle: "Save the Date",
    saveTheDateLines: [
      "N ovember 11, 2016, Los Angeles, CA",
      "5th annual Global Alternative Funding Forum"
    ],
    saveTheDateCta: "LEARN MORE",
    partnersTitle: "PARTNERS",
    partnersImages: [ { alt: "Partners banner", src: `${WB}/` } ],
    partnersCountries: [
      "RUSSIA","FRANCE","CHINA","ARGENTINA","UK","LUXEMBOURG","CANADA","INDIA","HONG KONG","USA"
    ],
    services: [ "FUNDING COMPASS","GLOBAL FORUM","EDUCATION","RESEARCH","CONSULTING","SPEAKING" ],
    info: [ "ABOUT US","PARTNERS","TESTIMONIALS","ARTICLES","IN THE MEDIA","TERMS" ],
    contact: { phone: "Ph: 310.464.1575", fax: "Fax: 888.816.2740", email: "info@metrocapitalgroup.com" },
    disclaimer: [
      "DISCLAIMER: We are not a law firm, provider of capital, accounting firm, or registered broker. Our reports and any suggestions are provided for general informational and educational purposes only. Your use of any of our documents is at your own risk, and you should not use any of these materials without first seeking legal or other professional advice.
The provision of our reports, documents, and seminars does not constitute legal advice or opinions of any kind, nor does it constitute advertising or solicitation. No lawyer-client, advisory, fiduciary, or other relationship is created between Metropole Capital Group and any person accessing or using our documents or informational material.
Metropole Capital Group, its partners, and its affiliates (including their respective directors, officers, agents, contractors, interns, suppliers, and employees) will not be liable for any damages, losses, or causes of action of any nature arising from the use of any reports, informational documents, or seminars.    ],
    copyright: "© 2025 METROPOLE CAPITAL GROUP"
  };
}
