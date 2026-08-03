import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";

const aisNotices = [
  {
    id: 1,
    day: "05",
    month: "MAY",
    title:
      "Creating a Roadmap for the Development of the Department of Accounting and Information Systems: Workshop on Documentation and Evidences",
    link: "/academic/department/ais/notices/1",
  },
  {
    id: 2,
    day: "24",
    month: "FEB",
    title: "উপ- রেজিস্ট্রার মো. বোরহান উদ্দিন এর বিদায় সংর্বধনা",
    link: "/academic/department/ais/notices/2",
  },
  {
    id: 3,
    day: "23",
    month: "DEC",
    title: "সম্পদ বিবরণী দাখিল করার নির্দেশ",
    link: "/academic/department/ais/notices/3",
  },
];

const aisEvents = [
  {
    id: 1,
    date: "15-07-2026",
    title: "ড. রশীদুল আলম স্মরণে দোয়া ও স্মরণসভা",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-15-at-10.54.26.jpeg",
    link: "/academic/department/ais/events/1",
  },
  {
    id: 2,
    date: "09-07-2026",
    title: "মানসিক সাস্থ্য বিষয়ক সেমিনার",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-12-at-13.35.15.jpeg",
    link: "/academic/department/ais/events/2",
  },
  {
    id: 3,
    date: "18-06-2026",
    title: "নবীনবরণ ও বিদায় সংবর্ণানা- 2026",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/cWvcWzeWc.jpeg",
    link: "/academic/department/ais/events/3",
  },
];

const aisFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message", url: "/academic/department/ais/message" },
      {
        text: "Vision, Mission & Objective",
        url: "/academic/department/ais/vision",
      },
      {
        text: "List of Ex-Chairman",
        url: "/academic/department/ais/ex-chairmans",
      },
      { text: "About", url: "/academic/department/ais/about" },
      { text: "Contact", url: "/academic/department/ais/contact" },
      { text: "Admissions", url: "/admissions" },
      { text: "Student Insurance", url: "#" },
      { text: "IQAC/PSAC/FQAC", url: "/academic/department/ais/iqac" },
      { text: "Thesis", url: "/academic/department/ais/thesis" },
      { text: "Committee", url: "/academic/department/ais/committee" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Faculty Members",
        url: "/academic/department/ais/faculty-members",
      },
      { text: "Officers", url: "/academic/department/ais/officers" },
      { text: "Staff List", url: "/academic/department/ais/staff" },
      {
        text: "Research Journal",
        url: "/academic/department/ais/journal",
      },
      { text: "Alumni", url: "/academic/department/ais/alumni" },
      { text: "Rules & Forms", url: "/academic/department/ais/forms" },
      {
        text: "Extra Curriculum",
        url: "/academic/department/ais/extra-curriculum",
      },
      {
        text: "Publications",
        url: "/academic/department/ais/publications",
      },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { text: "Notices", url: "/academic/department/ais/notices" },
      { text: "Events", url: "/academic/department/ais/events" },
      { text: "Programs", url: "/academic/department/ais/programs" },
      { text: "Photo Gallery", url: "/academic/department/ais/gallery" },
      {
        text: "Exam Notice",
        url: "/academic/department/ais/exam-notice",
      },
      {
        text: "Citizen Charter",
        url: "/academic/department/ais/citizen-charter",
      },
      {
        text: "Renu Srity Turst",
        url: "/academic/department/ais/renu-srity-trust",
      },
      {
        text: "Class Time Table",
        url: "/academic/department/ais/routine",
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

export default function AISDepartmentPage() {
  return (
    <DepartmentSubPageTemplate
      pageTitle="Welcome to the Department of Accounting and Information Systems"
      officialName="PROFESSOR DR. MD. ARIFUL ISLAM"
      officialTitle="Chairman"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2025/11/ch.jpg"
      profileLink="/academic/department/ais/profile"
      notices={aisNotices}
      events={aisEvents}
      departmentName="Department of Accounting and Information Systems"
      footerColumns={aisFooterColumns}
      // Added multiple images to demonstrate the slider functionality
      sliderImages={[
        "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/05/WhatsApp-Image-2026-05-06-at-14.21.59.jpeg",
        "https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg",
      ]}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            This Department of Accounting and Information Systems is one of the oldest departments in
            the University of Rajshahi. We have been trying to create a
            congenial atmosphere for the students of accounting and information systems to express their
            views regarding the origin and development of life and the universe.
            As Accounting and Information Systems is called the love of wisdom, students should enquire
            into the meaning and truth hidden in nature and natural objects.
          </p>
          <p>
            The department of accounting and information systems has an excellent faculty strength
            specialized in the various fields of accounting and information systems. With their
            exceptional academic acumen, the department of accounting and information systems has been
            rendering a wonderful service to the pursuit of knowledge.
          </p>
          <p>
            The department offers four year honours and one year M. A. courses
            which cover ancient, medieval, modern and contemporary western
            accounting and information systems as well as logic, psychology, moral accounting and information systems, Muslim
            accounting and information systems, Indian accounting and information systems, political accounting and information systems, accounting and information systems of
            education, accounting and information systems of religion, comparative religion etc. In the
            department, we have offered all types of accounting and information systems like theistic,
            atheistic, polytheistic, monistic, dualistic, pluralistic etc. to
            enrich and broaden their mental horizon. We want to acquaint
            students with the contemporary accounting and information systemsical development so that
            they may become curious to know the real significance of ultimate
            reality. We are trying to make our students competent to serve our
            motherland sincerely and selflessly.
          </p>
        </div>
      }
    />
  );
}
