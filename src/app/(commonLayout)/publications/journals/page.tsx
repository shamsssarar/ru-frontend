import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronRight } from "lucide-react";

// Mock Data for the 4 Main Journals
const mainJournals = [
  {
    title: "Rajshahi University Journal of Arts & Law",
    image: "/logo/ru-logo.png", // Replace with actual RUJAL cover
    description:
      "Rajshahi University Journal of Arts & Law is an official journal of the University of Rajshahi that publishes research articles by teachers and researchers of the faculties/institutes (Arts, Law and Fine Arts) concerned as well as those from outside of the University.",
    issn: "2408-8773 (Online) and 2309-0898 (Print)",
    policy: "Open Access, Peer Reviewed",
    policyLink: "https://journal.ru.ac.bd/rujal/about",
    cost: "No publication fee.",
    issue: "3 issues in a year (April, August, and December)",
    editorialLink: "https://journal.ru.ac.bd/rujal/about/editorialTeam",
    webLink: "https://journal.ru.ac.bd/rujal/index",
    doiPrefix: "10.64102",
    doiSuffix: "/rujal.0...",
    links: {
      home: "https://journal.ru.ac.bd/rujal/index",
      submit: "https://journal.ru.ac.bd/rujal/about/submissions",
      current: "https://journal.ru.ac.bd/rujal/issue/current",
      guideline: "https://journal.ru.ac.bd/rujal/about/submissions",
    },
  },
  {
    title: "Rajshahi University Journal of Science and Engineering",
    image: "/logo/ru-logo.png", // Replace with actual RUJSE cover
    description:
      "Rajshahi University Journal of Science and Engineering is one of the official journals of the University of Rajshahi that publishes research works of original nature in science and engineering, by the teachers and researchers of the faculties/institutes concerned as well as those from outside of the university.",
    issn: "(Online) and (Print)",
    policy: "Open Access, Peer Reviewed, online first",
    policyLink: "https://journal.ru.ac.bd/rujse/about",
    cost: "No publication fee.",
    issue:
      "3 issues in a year (April, August, and December), accepted articles are published online as online first and included in the current or forthcoming issue.",
    editorialLink: "https://journal.ru.ac.bd/rujse/about/editorialTeam",
    webLink: "https://journal.ru.ac.bd/rujse/index",
    doiPrefix: "10.64102",
    doiSuffix: "/rujse.0...",
    links: {
      home: "https://journal.ru.ac.bd/rujse/index",
      submit: "https://journal.ru.ac.bd/rujse/about/submissions",
      current: "https://journal.ru.ac.bd/rujse/issue/current",
      guideline: "https://journal.ru.ac.bd/rujse/about/submissions",
    },
  },
  {
    title: "Rajshahi University Journal of Social Science and Business Studies",
    image: "/logo/ru-logo.png", // Replace with actual RUJSSBS cover
    description:
      "Rajshahi University Journal of Social Science and Business Studies is an official journal of the University of Rajshahi. It publishes research works of original nature in Social Sciences and Business Studies, by the teachers and researchers of the faculties/institutes concerned as well as those from outside of the University.",
    issn: "2408-8811 (Online) and 2309-0944 (Print)",
    policy: "Open Access, Peer Reviewed, online first",
    policyLink: "https://journal.ru.ac.bd/rujssbs/about",
    cost: "No publication fee.",
    issue:
      "3 issues in a year (April, August, and December), accepted articles are published online as online first and included in the current or forthcoming issue.",
    editorialLink: "https://journal.ru.ac.bd/rujssbs/about/editorialTeam",
    webLink: "https://journal.ru.ac.bd/rujssbs/index",
    doiPrefix: "10.64102",
    doiSuffix: "/rujssbs.0...",
    links: {
      home: "https://journal.ru.ac.bd/rujssbs",
      submit: "https://journal.ru.ac.bd/rujssbs/about/submissions",
      current: "https://journal.ru.ac.bd/rujssbs/issue/view/3",
      guideline: "https://journal.ru.ac.bd/rujssbs/about/submissions",
    },
  },
  {
    title:
      "Rajshahi University Journal of Life & Earth and Agricultural Sciences",
    image: "/logo/ru-logo.png", // Replace with actual RUJLEAS cover
    description:
      "Rajshahi University Journal of Life & Earth and Agricultural Sciences is an official journal of the University of Rajshahi. It publishes research works of original nature in life & earth and agricultural sciences, by the teachers and researchers of the faculties/institutes concerned as well as those from outside of the university.",
    issn: "(Online) and (Print)",
    policy: "Open Access, Peer Reviewed, online first",
    policyLink: "https://journal.ru.ac.bd/rujleas/about",
    cost: "No publication fee.",
    issue:
      "3 issues in a year (April, August, and December), accepted articles are published online as online first and included in the current or forthcoming issue.",
    editorialLink: "https://journal.ru.ac.bd/rujleas/about/editorialTeam",
    webLink: "https://journal.ru.ac.bd/rujleas/index",
    doiPrefix: "10.64102",
    doiSuffix: "/rujleas.0...",
    links: {
      home: "https://journal.ru.ac.bd/rujleas/index",
      submit: "https://journal.ru.ac.bd/rujleas/about/submissions",
      current: "https://journal.ru.ac.bd/rujleas/issue/current",
      guideline: "https://journal.ru.ac.bd/rujleas/about/submissions",
    },
  },
];

// Mock Data for Other Journals
const otherJournals = [
  {
    title: "International Journal of Statistical Science (IJSS)",
    href: "https://www.banglajol.info/index.php/ijss/index",
  },
  {
    title: "Bangladesh Journal of Educational Research",
    href: "https://www.ru.ac.bd/ier/ier-journal",
  },
  {
    title: "Journal of Business Studies (JBS-ISSN 2303-9884)",
    href: "https://www.ru.ac.bd/business/journal/",
  },
  { title: "Rajshahi University Law Journal, Volume XI", href: "#" },
  { title: "Rajshahi University Law Journal, Volume X", href: "#" },
  {
    title: "Praxis, Journal of the Department of English, Volume 13, 2022",
    href: "#",
  },
  { title: "Journal of Bio-Science (IBSc)", href: "#" },
  {
    title:
      "Bangladesh Journal of Agriculture and Life Science (ISSN: 2709-8702)",
    href: "http://csa.ru.ac.bd/bjals/",
  },
];

export default function RUJournalsPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* 1. Spacer for Absolute Navbar */}
      <div className="h-[70px] bg-[#002147] w-full shrink-0"></div>

      {/* 2. Secondary Top Navbar (Consistent with Publications Office) */}
      <div className="w-full bg-[#002147] shadow-md">
        <div className="container mx-auto max-w-[1140px] px-4 md:px-0">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3 md:py-4">
            {[
              "HOME",
              "ANNUAL REPORT",
              "বার্ষিক প্রতিবেদনের তথ্যছক",
              "RU JOURNALS",
              "CALL FOR PAPERS",
              "GUIDELINES FOR AUTHORS",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center">
                <Link
                  href="#"
                  className="text-[12px] md:text-[14px] font-roboto font-semibold text-white hover:text-[#6EC1E4] uppercase tracking-wider transition-colors"
                >
                  {item}
                </Link>
                {idx < 5 && (
                  <span className="text-white/50 ml-6 hidden md:inline-block">
                    |
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <main className="container mx-auto max-w-[1140px] px-4 md:px-0 py-12 flex flex-col gap-16">
        {/* 3. Main Journals Sections */}
        {mainJournals.map((journal, index) => (
          <section
            key={index}
            className="flex flex-col gap-6 border-b border-[#dddddd] dark:border-slate-800 pb-12 last:border-0"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Journal Cover Image */}
              <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <div className="relative w-full max-w-[280px] aspect-[1/1.4] rounded-sm overflow-hidden bg-gray-100 dark:bg-slate-800 shadow-md border border-[#dddddd] dark:border-slate-700">
                  <Image
                    src={journal.image}
                    alt={journal.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Journal Details */}
              <div className="w-full md:w-2/3 flex flex-col">
                <h2 className="text-2xl md:text-3xl font-bold text-[#002147] dark:text-[#6EC1E4] mb-4">
                  {journal.title}
                </h2>
                <p className="text-base text-[#333333] dark:text-slate-300 leading-relaxed mb-6 italic">
                  {journal.description}
                </p>

                <ul className="space-y-3 text-base text-[#333333] dark:text-slate-300">
                  <li>
                    <strong className="text-[#002147] dark:text-slate-200">
                      ISSN:
                    </strong>{" "}
                    {journal.issn}
                  </li>
                  <li>
                    <strong className="text-[#002147] dark:text-slate-200">
                      Journal Policy:
                    </strong>{" "}
                    {journal.policy}{" "}
                    <Link
                      href={journal.policyLink}
                      target="_blank"
                      className="text-[#337ab7] dark:text-[#6EC1E4] hover:underline font-bold inline-flex items-center gap-1 ml-1"
                    >
                      [Details] <ExternalLink className="w-3 h-3" />
                    </Link>
                  </li>
                  <li>
                    <strong className="text-[#002147] dark:text-slate-200">
                      Article Publishing Cost:
                    </strong>{" "}
                    {journal.cost}
                  </li>
                  <li>
                    <strong className="text-[#002147] dark:text-slate-200">
                      Journal Issue:
                    </strong>{" "}
                    {journal.issue}
                  </li>
                  <li>
                    <strong className="text-[#002147] dark:text-slate-200">
                      Editorial Team:
                    </strong>
                    <Link
                      href={journal.editorialLink}
                      target="_blank"
                      className="text-[#337ab7] dark:text-[#6EC1E4] hover:underline font-bold inline-flex items-center gap-1 ml-2"
                    >
                      [Details] <ExternalLink className="w-3 h-3" />
                    </Link>
                  </li>
                  <li>
                    <strong className="text-[#002147] dark:text-slate-200">
                      Web:
                    </strong>{" "}
                    <Link
                      href={journal.webLink}
                      target="_blank"
                      className="text-[#337ab7] dark:text-[#6EC1E4] hover:underline font-bold break-all"
                    >
                      {journal.webLink}
                    </Link>
                  </li>
                  <li>
                    <strong className="text-[#002147] dark:text-slate-200">
                      DOI Prefix:
                    </strong>{" "}
                    {journal.doiPrefix}
                  </li>
                  <li>
                    <strong className="text-[#002147] dark:text-slate-200">
                      DOI Suffix:
                    </strong>{" "}
                    {journal.doiSuffix}
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4">
              <Link
                href={journal.links.home}
                target="_blank"
                className="bg-[#5cb85c] dark:bg-teal-700 hover:bg-[#449d44] dark:hover:bg-teal-600 text-white text-center px-4 py-3 rounded-sm shadow-sm text-sm font-bold uppercase transition-transform hover:scale-105"
              >
                RUJAL HOME
              </Link>
              <Link
                href={journal.links.submit}
                target="_blank"
                className="bg-[#5bc0de] dark:bg-sky-700 hover:bg-[#31b0d5] dark:hover:bg-sky-600 text-white text-center px-4 py-3 rounded-sm shadow-sm text-sm font-bold uppercase transition-transform hover:scale-105"
              >
                SUBMIT ARTICLE ONLINE
              </Link>
              <Link
                href={journal.links.current}
                target="_blank"
                className="bg-[#f0ad4e] dark:bg-amber-700 hover:bg-[#ec971f] dark:hover:bg-amber-600 text-white text-center px-4 py-3 rounded-sm shadow-sm text-sm font-bold uppercase transition-transform hover:scale-105"
              >
                CURRENT ISSUE
              </Link>
              <Link
                href={journal.links.guideline}
                target="_blank"
                className="bg-[#d9534f] dark:bg-rose-700 hover:bg-[#c9302c] dark:hover:bg-rose-600 text-white text-center px-4 py-3 rounded-sm shadow-sm text-sm font-bold uppercase transition-transform hover:scale-105"
              >
                GUIDELINE FOR AUTHORS
              </Link>
            </div>
          </section>
        ))}

        {/* 4. Other Journals Section */}
        <section className="bg-[#f9f9f9] dark:bg-slate-950 border border-[#dddddd] dark:border-slate-800 rounded-md p-8 shadow-sm">
          <div className="mb-6 border-b border-[#dddddd] dark:border-slate-700 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002147] dark:text-[#6EC1E4] uppercase mb-2">
              OTHER JOURNALS
            </h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-slate-400 font-bold uppercase tracking-wider">
              FACULTIES || DEPARTMENTS || INSTITUTES
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {otherJournals.map((oj, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 text-[#337ab7] dark:text-[#6EC1E4] shrink-0 mt-0.5" />
                <Link
                  href={oj.href}
                  target="_blank"
                  className="text-[#333333] dark:text-slate-300 hover:text-[#337ab7] dark:hover:text-[#6EC1E4] font-medium transition-colors hover:underline"
                >
                  {oj.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
