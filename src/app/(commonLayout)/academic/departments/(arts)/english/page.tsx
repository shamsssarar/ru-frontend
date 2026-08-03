import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";

const englishNotices = [
  {
    id: 1,
    day: "05",
    month: "MAY",
    title:
      "Creating a Roadmap for the Development of the Department of English: Workshop on Documentation and Evidences",
    link: "/academic/department/english/notices/1",
  },
  {
    id: 2,
    day: "24",
    month: "FEB",
    title: "উপ- রেজিস্ট্রার মো. বোরহান উদ্দিন এর বিদায় সংর্বধনা",
    link: "/academic/department/english/notices/2",
  },
  {
    id: 3,
    day: "23",
    month: "DEC",
    title: "সম্পদ বিবরণী দাখিল করার নির্দেশ",
    link: "/academic/department/english/notices/3",
  },
];

const englishEvents = [
  {
    id: 1,
    date: "15-07-2026",
    title: "ড. রশীদুল আলম স্মরণে দোয়া ও স্মরণসভা",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-15-at-10.54.26.jpeg",
    link: "/academic/department/english/events/1",
  },
  {
    id: 2,
    date: "09-07-2026",
    title: "মানসিক সাস্থ্য বিষয়ক সেমিনার",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-12-at-13.35.15.jpeg",
    link: "/academic/department/english/events/2",
  },
  {
    id: 3,
    date: "18-06-2026",
    title: "নবীনবরণ ও বিদায় সংবর্ণানা- 2026",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/cWvcWzeWc.jpeg",
    link: "/academic/department/english/events/3",
  },
];

const englishFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message", url: "/academic/department/english/message" },
      {
        text: "Vision, Mission & Objective",
        url: "/academic/department/english/vision",
      },
      {
        text: "List of Ex-Chairman",
        url: "/academic/department/english/ex-chairmans",
      },
      { text: "About", url: "/academic/department/english/about" },
      { text: "Contact", url: "/academic/department/english/contact" },
      { text: "Admissions", url: "/admissions" },
      { text: "Student Insurance", url: "#" },
      { text: "IQAC/PSAC/FQAC", url: "/academic/department/english/iqac" },
      { text: "Thesis", url: "/academic/department/english/thesis" },
      { text: "Committee", url: "/academic/department/english/committee" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Faculty Members",
        url: "/academic/department/english/faculty-members",
      },
      { text: "Officers", url: "/academic/department/english/officers" },
      { text: "Staff List", url: "/academic/department/english/staff" },
      {
        text: "Research Journal",
        url: "/academic/department/english/journal",
      },
      { text: "Alumni", url: "/academic/department/english/alumni" },
      { text: "Rules & Forms", url: "/academic/department/english/forms" },
      {
        text: "Extra Curriculum",
        url: "/academic/department/english/extra-curriculum",
      },
      {
        text: "Publications",
        url: "/academic/department/english/publications",
      },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { text: "Notices", url: "/academic/department/english/notices" },
      { text: "Events", url: "/academic/department/english/events" },
      { text: "Programs", url: "/academic/department/english/programs" },
      { text: "Photo Gallery", url: "/academic/department/english/gallery" },
      {
        text: "Exam Notice",
        url: "/academic/department/english/exam-notice",
      },
      {
        text: "Citizen Charter",
        url: "/academic/department/english/citizen-charter",
      },
      {
        text: "Renu Srity Turst",
        url: "/academic/department/english/renu-srity-trust",
      },
      {
        text: "Class Time Table",
        url: "/academic/department/english/routine",
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

export default function EnglishDepartmentPage() {
  return (
    <DepartmentSubPageTemplate
      pageTitle="Welcome to the Department of English"
      officialName="PROFESSOR DR. MD. ARIFUL ISLAM"
      officialTitle="Chairman"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2025/11/ch.jpg"
      profileLink="/academic/department/english/profile"
      notices={englishNotices}
      events={englishEvents}
      departmentName="Department of English"
      footerColumns={englishFooterColumns}
      // Added multiple images to demonstrate the slider functionality
      sliderImages={[
        "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/05/WhatsApp-Image-2026-05-06-at-14.21.59.jpeg",
        "https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg",
      ]}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            This Department of English is one of the oldest departments in
            the University of Rajshahi. We have been trying to create a
            congenial atmosphere for the students of english to express their
            views regarding the origin and development of life and the universe.
            As English is called the love of wisdom, students should enquire
            into the meaning and truth hidden in nature and natural objects.
          </p>
          <p>
            The department of english has an excellent faculty strength
            specialized in the various fields of english. With their
            exceptional academic acumen, the department of english has been
            rendering a wonderful service to the pursuit of knowledge.
          </p>
          <p>
            The department offers four year honours and one year M. A. courses
            which cover ancient, medieval, modern and contemporary western
            english as well as logic, psychology, moral english, Muslim
            english, Indian english, political english, english of
            education, english of religion, comparative religion etc. In the
            department, we have offered all types of english like theistic,
            atheistic, polytheistic, monistic, dualistic, pluralistic etc. to
            enrich and broaden their mental horizon. We want to acquaint
            students with the contemporary englishical development so that
            they may become curious to know the real significance of ultimate
            reality. We are trying to make our students competent to serve our
            motherland sincerely and selflessly.
          </p>
        </div>
      }
    />
  );
}
