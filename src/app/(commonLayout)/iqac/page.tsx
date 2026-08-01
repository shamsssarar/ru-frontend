import AdministrationSubPageTemplate from "@/components/layout/AdministrationSubPageTemplate";

const iqacNotices = [
  {
    id: 1,
    day: "15",
    month: "JUL",
    title:
      "Seminar on “Research Publications, International Collaboration and Higher Studies for Early Career Researchers”",
    link: "/iqac/notices/research-publications-seminar",
  },
  {
    id: 2,
    day: "19",
    month: "MAY",
    title:
      "Seminar on “Creating, Protecting, and Commercializing Intellectual Property: A Roadmap for Bangladesh Universities”",
    link: "/iqac/notices/intellectual-property-seminar",
  },
  {
    id: 3,
    day: "30",
    month: "APR",
    title: "World IP Day 2026",
    link: "/iqac/notices/world-ip-day-2026",
  },
];

const iqacEvents = [
  {
    id: 1,
    date: "30-07-2026",
    title:
      "“Workshop on Enhancing Administrative and Professional Efficiency of Non Academic Staff”",
    image:
      "https://www.ru.ac.bd/iqac/wp-content/uploads/sites/133/2026/07/IMG_3137-scaled.jpg",
    link: "/iqac/events/enhancing-administrative-efficiency-workshop",
  },
  {
    id: 2,
    date: "30-07-2026",
    title:
      "Seminar on “Research Publications, International Collaboration and Higher Studies for Early Career Researchers”",
    image:
      "https://www.ru.ac.bd/iqac/wp-content/uploads/sites/133/2026/07/1-3.jpeg",
    link: "/iqac/events/research-publications-seminar",
  },
];

export default function IQACPage() {
  return (
    <AdministrationSubPageTemplate
      pageTitle="Welcome to Institutional Quality Assurance Cell"
      officialName="Professor Dr. Md. Abu Reza"
      officialTitle="Director"
      officialSubtitle="Institutional Quality Assurance Cell"
      officialImage="https://www.ru.ac.bd/iqac/wp-content/uploads/sites/133/2025/06/Director-Image-Final.png"
      profileLink="/iqac/director-profile"
      footerEntityName="Institutional Quality Assurance Cell"
      notices={iqacNotices}
      events={iqacEvents}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            As a continuing process of quality assurance the UGC recommended the
            institutionalization of internal system of quality assurance at
            University of Rajshahi through Institutional Quality Assurance Cell
            (IQAC) at University level. University of Rajshahi being fully aware
            of a high-quality learning experience for students immediately
            addressed the UGCs directive and established the IQAC.
          </p>
          <p>
            The IQAC is expected to work closely with academic and
            administrative units across the University in maintaining internal
            as well as external quality assurance. In carrying out these
            responsibilities IQAC will facilitate the academic and
            administrative units of University of Rajshahi in program planning,
            development and review, and disseminate information and guidance on
            quality assurance through various means such as offering training
            and advice to faculty members and administrative staffs on the
            different processes. The IQAC is also responsible for ascertaining
            that the University’s quality assurance policies and procedures are
            robust and effective in maintaining and monitoring the standards of
            its academic degrees and in supporting the enhancement of the
            students’ learning experience.
          </p>
          <p>
            Quality assurance is a team work and IQAC alone cannot implement it.
            The desired result of quality assurance at University of Rajshahi
            can only be achieved through the effective participation of all the
            stake holders.
          </p>
          <p>I seek whole hearted and enthusiastic support from all.</p>
        </div>
      }
    />
  );
}
