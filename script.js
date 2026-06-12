const siteData = {
  heroText:
    "We build clean, responsive, and easy-to-navigate websites for businesses, creators, and growing brands.",
  aboutText:
    "This studio is focused on building clean, thoughtful websites that help businesses look trustworthy online. The goal is simple: good design, smooth user experience, and a site that helps people understand your value quickly.",
  projects: [
    {
      title: "Business Landing Page",
      type: "Client Website",
      description:
        "A simple business landing page with clear service sections, trust-focused design, and direct contact calls to action.",
      url: "https://example.com/project-one",
      linkLabel: "View Project",
    },
    {
      title: "Portfolio Showcase",
      type: "Creative Portfolio",
      description:
        "A clean portfolio layout designed to highlight visuals, case studies, and selected project work in one place.",
      url: "https://resumepage-2.vercel.app",
      linkLabel: "See Live Work",
    },
    {
      title: "Product Promo Page",
      type: "Campaign Page",
      description:
        "A focused landing page for promoting a product or offer with a sharp hero section and strong conversion flow.",
      url: "https://example.com/project-three",
      linkLabel: "Open Project",
    },
  ],
  contacts: [
    {
      label: "Email",
      value: "contact@webcraftstudio.com",
      href: "mailto:hello@webcraft.site",
      note: "Best for project enquiries and collaborations.",
    },
    {
      label: "Phone",
      value: "+91 8539902011",
      href: "tel:+8539902011",
      note: "For quick discussion or client calls.",
    },
    {
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/8539902011",
      note: "Useful for easy follow-ups and quick responses.",
    },
    {
      label: "More Work",
      value: "View full portfolio",
      href: "https://example.com/portfolio",
      note: "Replace this with your full portfolio or profile link.",
    },
  ],
};

const heroText = document.querySelector("#hero-text");
const aboutText = document.querySelector("#about-text");
const year = document.querySelector("#year");
const projectGrid = document.querySelector("#project-grid");
const contactList = document.querySelector("#contact-list");

heroText.textContent = siteData.heroText;
aboutText.textContent = siteData.aboutText;
year.textContent = new Date().getFullYear();

const createProjectCard = (project) => {
  const article = document.createElement("article");
  article.className = "project-card";

  const meta = document.createElement("div");
  meta.className = "project-meta";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const tag = document.createElement("span");
  tag.className = "project-tag";
  tag.textContent = project.type;

  meta.append(title, tag);

  const description = document.createElement("p");
  description.textContent = project.description;

  const link = document.createElement("a");
  link.className = "project-link";
  link.href = project.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = project.linkLabel;

  article.append(meta, description, link);
  return article;
};

const createContactCard = (contact) => {
  const article = document.createElement("article");
  article.className = "contact-item";

  const heading = document.createElement("h3");
  heading.textContent = contact.label;

  const link = document.createElement("a");
  link.href = contact.href;
  link.target = contact.href.startsWith("http") ? "_blank" : "_self";
  link.rel = contact.href.startsWith("http") ? "noreferrer" : "";
  link.textContent = contact.value;

  const note = document.createElement("p");
  note.textContent = contact.note;

  article.append(heading, link, note);
  return article;
};

siteData.projects.forEach((project) => {
  projectGrid.appendChild(createProjectCard(project));
});

siteData.contacts.forEach((contact) => {
  contactList.appendChild(createContactCard(contact));
});
