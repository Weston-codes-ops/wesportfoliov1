import aboutFaqJson from "../data/local.json";
import portfolioJson from "../data/portfolio.json";

export const aboutMeta = {
  title: "About FAQ",
  description: "Questions and answers shown on the About page accordion.",
};
export const aboutFaq = aboutFaqJson;

export const techProjectsMeta = {
  title: "Portfolio - Tech Projects",
  description: "Technical work showcased on the Portfolio page.",
};
export const techProjects = portfolioJson.filter(
  (item) => item.category === "tech"
);

export const creativeProjectsMeta = {
  title: "Portfolio - Creative Projects",
  description: "Creative work showcased on the Portfolio page.",
};
export const creativeProjects = portfolioJson.filter(
  (item) => item.category === "creative"
);
