import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";

const historyNotices = [
  {
    id: 1,
    day: "05",
    month: "MAY",
    title:
      "Creating a Roadmap for the Development of the Department of History: Workshop on Documentation and Evidences",
    link: "/academic/department/history/notices/1",
  },
  {
    id: 2,
    day: "24",
    month: "FEB",
    title: "উপ- রেজিস্ট্রার মো. বোরহান উদ্দিন এর বিদায় সংর্বধনা",
    link: "/academic/department/history/notices/2",
  },
  {
    id: 3,
    day: "23",
    month: "DEC",
    title: "সম্পদ বিবরণী দাখিল করার নির্দেশ",
    link: "/academic/department/history/notices/3",
  },
];

const historyEvents = [
  {
    id: 1,
    date: "15-07-2026",
    title: "ড. রশীদুল আলম স্মরণে দোয়া ও স্মরণসভা",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-15-at-10.54.26.jpeg",
    link: "/academic/department/history/events/1",
  },
  {
    id: 2,
    date: "09-07-2026",
    title: "মানসিক সাস্থ্য বিষয়ক সেমিনার",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-12-at-13.35.15.jpeg",
    link: "/academic/department/history/events/2",
  },
  {
    id: 3,
    date: "18-06-2026",
    title: "নবীনবরণ ও বিদায় সংবর্ণানা- 2026",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/cWvcWzeWc.jpeg",
    link: "/academic/department/history/events/3",
  },
];

const historyFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message", url: "/academic/department/history/message" },
      {
        text: "Vision, Mission & Objective",
        url: "/academic/department/history/vision",
      },
      {
        text: "List of Ex-Chairman",
        url: "/academic/department/history/ex-chairmans",
      },
      { text: "About", url: "/academic/department/history/about" },
      { text: "Contact", url: "/academic/department/history/contact" },
      { text: "Admissions", url: "/admissions" },
      { text: "Student Insurance", url: "#" },
      { text: "IQAC/PSAC/FQAC", url: "/academic/department/history/iqac" },
      { text: "Thesis", url: "/academic/department/history/thesis" },
      { text: "Committee", url: "/academic/department/history/committee" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Faculty Members",
        url: "/academic/department/history/faculty-members",
      },
      { text: "Officers", url: "/academic/department/history/officers" },
      { text: "Staff List", url: "/academic/department/history/staff" },
      {
        text: "Research Journal",
        url: "/academic/department/history/journal",
      },
      { text: "Alumni", url: "/academic/department/history/alumni" },
      { text: "Rules & Forms", url: "/academic/department/history/forms" },
      {
        text: "Extra Curriculum",
        url: "/academic/department/history/extra-curriculum",
      },
      {
        text: "Publications",
        url: "/academic/department/history/publications",
      },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { text: "Notices", url: "/academic/department/history/notices" },
      { text: "Events", url: "/academic/department/history/events" },
      { text: "Programs", url: "/academic/department/history/programs" },
      { text: "Photo Gallery", url: "/academic/department/history/gallery" },
      {
        text: "Exam Notice",
        url: "/academic/department/history/exam-notice",
      },
      {
        text: "Citizen Charter",
        url: "/academic/department/history/citizen-charter",
      },
      {
        text: "Renu Srity Turst",
        url: "/academic/department/history/renu-srity-trust",
      },
      {
        text: "Class Time Table",
        url: "/academic/department/history/routine",
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

export default function HistoryDepartmentPage() {
  return (
    <DepartmentSubPageTemplate
      pageTitle="Welcome to the Department of History"
      officialName="PROFESSOR DR. MD. ARIFUL ISLAM"
      officialTitle="Chairman"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2025/11/ch.jpg"
      profileLink="/academic/department/history/profile"
      notices={historyNotices}
      events={historyEvents}
      departmentName="Department of History"
      footerColumns={historyFooterColumns}
      // Added multiple images to demonstrate the slider functionality
      sliderImages={[
        "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/05/WhatsApp-Image-2026-05-06-at-14.21.59.jpeg",
        "https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg",
      ]}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            This Department of History is one of the oldest departments in
            the University of Rajshahi. We have been trying to create a
            congenial atmosphere for the students of history to express their
            views regarding the origin and development of life and the universe.
            As History is called the love of wisdom, students should enquire
            into the meaning and truth hidden in nature and natural objects.
          </p>
          <p>
            The department of history has an excellent faculty strength
            specialized in the various fields of history. With their
            exceptional academic acumen, the department of history has been
            rendering a wonderful service to the pursuit of knowledge.
          </p>
          <p>
            The department offers four year honours and one year M. A. courses
            which cover ancient, medieval, modern and contemporary western
            history as well as logic, psychology, moral history, Muslim
            history, Indian history, political history, history of
            education, history of religion, comparative religion etc. In the
            department, we have offered all types of history like theistic,
            atheistic, polytheistic, monistic, dualistic, pluralistic etc. to
            enrich and broaden their mental horizon. We want to acquaint
            students with the contemporary historyical development so that
            they may become curious to know the real significance of ultimate
            reality. We are trying to make our students competent to serve our
            motherland sincerely and selflessly.
          </p>
        </div>
      }
    />
  );
}
