import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";

const gebNotices = [
  {
    id: 1,
    day: "05",
    month: "MAY",
    title:
      "Creating a Roadmap for the Development of the Department of Genetic Engineering and Biotechnology: Workshop on Documentation and Evidences",
    link: "/academic/department/geb/notices/1",
  },
  {
    id: 2,
    day: "24",
    month: "FEB",
    title: "উপ- রেজিস্ট্রার মো. বোরহান উদ্দিন এর বিদায় সংর্বধনা",
    link: "/academic/department/geb/notices/2",
  },
  {
    id: 3,
    day: "23",
    month: "DEC",
    title: "সম্পদ বিবরণী দাখিল করার নির্দেশ",
    link: "/academic/department/geb/notices/3",
  },
];

const gebEvents = [
  {
    id: 1,
    date: "15-07-2026",
    title: "ড. রশীদুল আলম স্মরণে দোয়া ও স্মরণসভা",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-15-at-10.54.26.jpeg",
    link: "/academic/department/geb/events/1",
  },
  {
    id: 2,
    date: "09-07-2026",
    title: "মানসিক সাস্থ্য বিষয়ক সেমিনার",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-12-at-13.35.15.jpeg",
    link: "/academic/department/geb/events/2",
  },
  {
    id: 3,
    date: "18-06-2026",
    title: "নবীনবরণ ও বিদায় সংবর্ণানা- 2026",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/cWvcWzeWc.jpeg",
    link: "/academic/department/geb/events/3",
  },
];

const gebFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message", url: "/academic/department/geb/message" },
      {
        text: "Vision, Mission & Objective",
        url: "/academic/department/geb/vision",
      },
      {
        text: "List of Ex-Chairman",
        url: "/academic/department/geb/ex-chairmans",
      },
      { text: "About", url: "/academic/department/geb/about" },
      { text: "Contact", url: "/academic/department/geb/contact" },
      { text: "Admissions", url: "/admissions" },
      { text: "Student Insurance", url: "#" },
      { text: "IQAC/PSAC/FQAC", url: "/academic/department/geb/iqac" },
      { text: "Thesis", url: "/academic/department/geb/thesis" },
      { text: "Committee", url: "/academic/department/geb/committee" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Faculty Members",
        url: "/academic/department/geb/faculty-members",
      },
      { text: "Officers", url: "/academic/department/geb/officers" },
      { text: "Staff List", url: "/academic/department/geb/staff" },
      {
        text: "Research Journal",
        url: "/academic/department/geb/journal",
      },
      { text: "Alumni", url: "/academic/department/geb/alumni" },
      { text: "Rules & Forms", url: "/academic/department/geb/forms" },
      {
        text: "Extra Curriculum",
        url: "/academic/department/geb/extra-curriculum",
      },
      {
        text: "Publications",
        url: "/academic/department/geb/publications",
      },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { text: "Notices", url: "/academic/department/geb/notices" },
      { text: "Events", url: "/academic/department/geb/events" },
      { text: "Programs", url: "/academic/department/geb/programs" },
      { text: "Photo Gallery", url: "/academic/department/geb/gallery" },
      {
        text: "Exam Notice",
        url: "/academic/department/geb/exam-notice",
      },
      {
        text: "Citizen Charter",
        url: "/academic/department/geb/citizen-charter",
      },
      {
        text: "Renu Srity Turst",
        url: "/academic/department/geb/renu-srity-trust",
      },
      {
        text: "Class Time Table",
        url: "/academic/department/geb/routine",
      },
    ],
  },
  {
    title: "Important Links",
    links: [
      { text: "University Grants Commission (UGC)", url: "#" },
      { text: "Bangladesh Research and Education Network (BdREN)", url: "#" },
      { text: "BdREN ZOOM", url: "#" },
      { text: "Google Classroom", url: "#" },
      { text: "Google Meet – Online Video Meetings and Calls", url: "#" },
      { text: "Plagiarism Detection Software | iThenticate", url: "#" },
    ],
  },
];

export default function GEBDepartmentPage() {
  return (
    <DepartmentSubPageTemplate
      pageTitle="Welcome to the Department of Genetic Engineering and Biotechnology"
      officialName="PROFESSOR DR. MD. ARIFUL ISLAM"
      officialTitle="Chairman"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2025/11/ch.jpg"
      profileLink="/academic/department/geb/profile"
      notices={gebNotices}
      events={gebEvents}
      departmentName="Department of Genetic Engineering and Biotechnology"
      footerColumns={gebFooterColumns}
      // Added multiple images to demonstrate the slider functionality
      sliderImages={[
        "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/05/WhatsApp-Image-2026-05-06-at-14.21.59.jpeg",
        "https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg",
      ]}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            This Department of Genetic Engineering and Biotechnology is one of the oldest departments in
            the University of Rajshahi. We have been trying to create a
            congenial atmosphere for the students of genetic engineering and biotechnology to express their
            views regarding the origin and development of life and the universe.
            As Genetic Engineering and Biotechnology is called the love of wisdom, students should enquire
            into the meaning and truth hidden in nature and natural objects.
          </p>
          <p>
            The department of genetic engineering and biotechnology has an excellent faculty strength
            specialized in the various fields of genetic engineering and biotechnology. With their
            exceptional academic acumen, the department of genetic engineering and biotechnology has been
            rendering a wonderful service to the pursuit of knowledge.
          </p>
          <p>
            The department offers four year honours and one year M. A. courses
            which cover ancient, medieval, modern and contemporary western
            genetic engineering and biotechnology as well as logic, psychology, moral genetic engineering and biotechnology, Muslim
            genetic engineering and biotechnology, Indian genetic engineering and biotechnology, political genetic engineering and biotechnology, genetic engineering and biotechnology of
            education, genetic engineering and biotechnology of religion, comparative religion etc. In the
            department, we have offered all types of genetic engineering and biotechnology like theistic,
            atheistic, polytheistic, monistic, dualistic, pluralistic etc. to
            enrich and broaden their mental horizon. We want to acquaint
            students with the contemporary genetic engineering and biotechnologyical development so that
            they may become curious to know the real significance of ultimate
            reality. We are trying to make our students competent to serve our
            motherland sincerely and selflessly.
          </p>
        </div>
      }
    />
  );
}
