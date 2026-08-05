import Link from "next/link";
import { Network, ChevronRight } from "lucide-react";

const sitemapData = [
  {
    category: "Main Navigation",
    links: [
      { title: "Home", href: "/" },
      { title: "Governance", href: "/governance" },
      { title: "Administration", href: "/administration" },
      { title: "IQAC", href: "/iqac" },
      { title: "Library", href: "/facilities/central-library" },
    ],
  },
  {
    category: "Academic",
    links: [
      { title: "Faculties", href: "/academic/faculties" },
      { title: "Departments", href: "/academic/departments" },
      { title: "Institutes", href: "/academic/institutes" },
      { title: "Special Courses", href: "/academic/special-courses" },
    ],
  },
  {
    category: "Facilities",
    links: [
      { title: "ICT Center", href: "/facilities/ict-center" },
      { title: "Transport", href: "/facilities/transport" },
      { title: "Medical Center", href: "/facilities/medical-center" },
      { title: "Residence Halls", href: "/facilities/residence-halls" },
    ],
  },
  {
    category: "Quick Links",
    links: [
      { title: "Web Mail", href: "https://mail.ru.ac.bd" },
      { title: "APA", href: "/apa" },
      { title: "Notices", href: "/notices" },
      { title: "Contact", href: "/contact" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300 font-roboto pb-16">
      <div className="h-[70px] bg-[#002147] w-full shrink-0"></div>

      <section className="relative w-full h-[200px] md:h-[250px] flex items-center justify-center overflow-hidden bg-[#002147] dark:bg-slate-950">
        <div className="relative z-10 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Network className="w-12 h-12 text-[#6EC1E4] mb-3" />
          <h1 className="text-white text-[28px] md:text-[36px] font-bold uppercase tracking-wide">
            Website Sitemap
          </h1>
        </div>
      </section>

      <section className="container mx-auto max-w-[1140px] px-4 md:px-0 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sitemapData.map((section, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-950 border border-[#dddddd] dark:border-slate-800 rounded-sm shadow-sm p-6 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{
                animationDelay: `${idx * 150}ms`,
                animationFillMode: "both",
              }}
            >
              <h3 className="text-[20px] font-bold text-[#002147] dark:text-[#6EC1E4] mb-4 border-b border-gray-200 dark:border-slate-800 pb-2">
                {section.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#337ab7] dark:text-slate-400 shrink-0 mt-[2px]" />
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#333333] dark:text-slate-300 hover:text-[#337ab7] dark:hover:text-[#6EC1E4] transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
