import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";

const financeNotices = [
  {
    id: 1,
    day: "05",
    month: "MAY",
    title:
      "Creating a Roadmap for the Development of the Department of Finance: Workshop on Documentation and Evidences",
    link: "/academic/department/finance/notices/1",
  },
  {
    id: 2,
    day: "24",
    month: "FEB",
    title: "উপ- রেজিস্ট্রার মো. বোরহান উদ্দিন এর বিদায় সংর্বধনা",
    link: "/academic/department/finance/notices/2",
  },
  {
    id: 3,
    day: "23",
    month: "DEC",
    title: "সম্পদ বিবরণী দাখিল করার নির্দেশ",
    link: "/academic/department/finance/notices/3",
  },
];

const financeEvents = [
  {
    id: 1,
    date: "15-07-2026",
    title: "ড. রশীদুল আলম স্মরণে দোয়া ও স্মরণসভা",
    image:
      "https://www.ru.ac.bd/finance/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-15-at-10.54.26.jpeg",
    link: "/academic/department/finance/events/1",
  },
  {
    id: 2,
    date: "09-07-2026",
    title: "মানসিক সাস্থ্য বিষয়ক সেমিনার",
    image:
      "https://www.ru.ac.bd/finance/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-12-at-13.35.15.jpeg",
    link: "/academic/department/finance/events/2",
  },
  {
    id: 3,
    date: "18-06-2026",
    title: "নবীনবরণ ও বিদায় সংবর্ণানা- 2026",
    image:
      "https://www.ru.ac.bd/finance/wp-content/uploads/sites/13/2026/07/cWvcWzeWc.jpeg",
    link: "/academic/department/finance/events/3",
  },
];

const financeFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message", url: "/academic/department/finance/message" },
      {
        text: "Vision, Mission & Objective",
        url: "/academic/department/finance/vision",
      },
      {
        text: "List of Ex-Chairman",
        url: "/academic/department/finance/ex-chairmans",
      },
      { text: "About", url: "/academic/department/finance/about" },
      { text: "Contact", url: "/academic/department/finance/contact" },
      { text: "Admissions", url: "/admissions" },
      { text: "Student Insurance", url: "#" },
      { text: "IQAC/PSAC/FQAC", url: "/academic/department/finance/iqac" },
      { text: "Thesis", url: "/academic/department/finance/thesis" },
      { text: "Committee", url: "/academic/department/finance/committee" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Faculty Members",
        url: "/academic/department/finance/faculty-members",
      },
      { text: "Officers", url: "/academic/department/finance/officers" },
      { text: "Staff List", url: "/academic/department/finance/staff" },
      {
        text: "Research Journal",
        url: "/academic/department/finance/journal",
      },
      { text: "Alumni", url: "/academic/department/finance/alumni" },
      { text: "Rules & Forms", url: "/academic/department/finance/forms" },
      {
        text: "Extra Curriculum",
        url: "/academic/department/finance/extra-curriculum",
      },
      {
        text: "Publications",
        url: "/academic/department/finance/publications",
      },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { text: "Notices", url: "/academic/department/finance/notices" },
      { text: "Events", url: "/academic/department/finance/events" },
      { text: "Programs", url: "/academic/department/finance/programs" },
      { text: "Photo Gallery", url: "/academic/department/finance/gallery" },
      {
        text: "Exam Notice",
        url: "/academic/department/finance/exam-notice",
      },
      {
        text: "Citizen Charter",
        url: "/academic/department/finance/citizen-charter",
      },
      {
        text: "Renu Srity Turst",
        url: "/academic/department/finance/renu-srity-trust",
      },
      {
        text: "Class Time Table",
        url: "/academic/department/finance/routine",
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

export default function FinanceDepartmentPage() {
  return (
    <DepartmentSubPageTemplate
      pageTitle="Welcome to the Department of Finance"
      officialName="PROFESSOR DR. MD. ARIFUL ISLAM"
      officialTitle="Chairman"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/finance/wp-content/uploads/sites/13/2025/11/ch.jpg"
      profileLink="/academic/department/finance/profile"
      notices={financeNotices}
      events={financeEvents}
      departmentName="Department of Finance"
      footerColumns={financeFooterColumns}
      // Added multiple images to demonstrate the slider functionality
      sliderImages={[
        "https://www.ru.ac.bd/finance/wp-content/uploads/sites/13/2026/05/WhatsApp-Image-2026-05-06-at-14.21.59.jpeg",
        "https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg",
      ]}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            This Department of Finance is one of the oldest departments in
            the University of Rajshahi. We have been trying to create a
            congenial atmosphere for the students of finance to express their
            views regarding the origin and development of life and the universe.
            As Finance is called the love of wisdom, students should enquire
            into the meaning and truth hidden in nature and natural objects.
          </p>
          <p>
            The department of finance has an excellent faculty strength
            specialized in the various fields of finance. With their
            exceptional academic acumen, the department of finance has been
            rendering a wonderful service to the pursuit of knowledge.
          </p>
          <p>
            The department offers four year honours and one year M. A. courses
            which cover ancient, medieval, modern and contemporary western
            finance as well as logic, psychology, moral finance, Muslim
            finance, Indian finance, political finance, finance of
            education, finance of religion, comparative religion etc. In the
            department, we have offered all types of finance like theistic,
            atheistic, polytheistic, monistic, dualistic, pluralistic etc. to
            enrich and broaden their mental horizon. We want to acquaint
            students with the contemporary financeical development so that
            they may become curious to know the real significance of ultimate
            reality. We are trying to make our students competent to serve our
            motherland sincerely and selflessly.
          </p>
        </div>
      }
    />
  );
}
