export interface FooterLink {
  title: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerData: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { title: "Vision and Mission", href: "/vision-mission" },
      { title: "Web Mail", href: "https://mail.ru.ac.bd", isExternal: true },
      { title: "ICT Center", href: "/facilities/ict-center" },
      { title: "Public Relations", href: "/administration/publicrelation" },
      {
        title: "Student Insurance",
        href: "https://www.zenithlifebd.com/",
        isExternal: true,
      },
    ],
  },
  {
    title: "Additional Links",
    links: [
      { title: "APA", href: "/apa" },
      { title: "NOC", href: "/noc" },
      {
        title: "CCDC",
        href: "/facilities/career-counselling-center",
      },
      { title: "SHEPP", href: "/shepp" },
      { title: "Smart ID Card Cell, RU", href: "/smart-id-cell" },
      { title: "Central Library", href: "https://library.ru.ac.bd", isExternal: true },
      { title: "Exam Controller", href: "/administration/exam-controller" },
    ],
  },
  {
    title: "Important Links",
    links: [
      { title: "Notices", href: "/notices" },
      { title: "Events", href: "/events" },
      { title: "Conferences", href: "/conferences" },
      { title: "Form Download", href: "/form-download" },
      { title: "Convocation", href: "/convocation" },
      { title: "Tender Notice", href: "/tender-notice" },
    ],
  },
  {
    title: "Footer Menu",
    links: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Sitemap", href: "/sitemap" },
      { title: "RU Contacts App", href: "/contacts-app" },
      {
        title: "BdREN vSession Login",
        href: "https://vsession.bdren.net.bd",
        isExternal: true,
      },
      {
        title: "BdREN vSession tutorial",
        href: "https://tutorial.bdren.net.bd",
        isExternal: true,
      },
      {
        title: "M.Phil/Ph.D/Special Courses",
        href: "/academic/special-courses",
      },
      { title: "International Students", href: "/international-students" },
      { title: "Contact", href: "/contact" },
    ],
  },
];
