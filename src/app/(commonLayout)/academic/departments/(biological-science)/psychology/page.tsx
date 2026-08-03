import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";

const psychologyNotices = [
  {
    id: 1,
    day: "05",
    month: "MAY",
    title:
      "Creating a Roadmap for the Development of the Department of Psychology: Workshop on Documentation and Evidences",
    link: "/academic/department/psychology/notices/1",
  },
  {
    id: 2,
    day: "24",
    month: "FEB",
    title: "উপ- রেজিস্ট্রার মো. বোরহান উদ্দিন এর বিদায় সংর্বধনা",
    link: "/academic/department/psychology/notices/2",
  },
  {
    id: 3,
    day: "23",
    month: "DEC",
    title: "সম্পদ বিবরণী দাখিল করার নির্দেশ",
    link: "/academic/department/psychology/notices/3",
  },
];

const psychologyEvents = [
  {
    id: 1,
    date: "15-07-2026",
    title: "ড. রশীদুল আলম স্মরণে দোয়া ও স্মরণসভা",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-15-at-10.54.26.jpeg",
    link: "/academic/department/psychology/events/1",
  },
  {
    id: 2,
    date: "09-07-2026",
    title: "মানসিক সাস্থ্য বিষয়ক সেমিনার",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-12-at-13.35.15.jpeg",
    link: "/academic/department/psychology/events/2",
  },
  {
    id: 3,
    date: "18-06-2026",
    title: "নবীনবরণ ও বিদায় সংবর্ণানা- 2026",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/cWvcWzeWc.jpeg",
    link: "/academic/department/psychology/events/3",
  },
];

const psychologyFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message", url: "/academic/department/psychology/message" },
      {
        text: "Vision, Mission & Objective",
        url: "/academic/department/psychology/vision",
      },
      {
        text: "List of Ex-Chairman",
        url: "/academic/department/psychology/ex-chairmans",
      },
      { text: "About", url: "/academic/department/psychology/about" },
      { text: "Contact", url: "/academic/department/psychology/contact" },
      { text: "Admissions", url: "/admissions" },
      { text: "Student Insurance", url: "#" },
      { text: "IQAC/PSAC/FQAC", url: "/academic/department/psychology/iqac" },
      { text: "Thesis", url: "/academic/department/psychology/thesis" },
      { text: "Committee", url: "/academic/department/psychology/committee" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Faculty Members",
        url: "/academic/department/psychology/faculty-members",
      },
      { text: "Officers", url: "/academic/department/psychology/officers" },
      { text: "Staff List", url: "/academic/department/psychology/staff" },
      {
        text: "Research Journal",
        url: "/academic/department/psychology/journal",
      },
      { text: "Alumni", url: "/academic/department/psychology/alumni" },
      { text: "Rules & Forms", url: "/academic/department/psychology/forms" },
      {
        text: "Extra Curriculum",
        url: "/academic/department/psychology/extra-curriculum",
      },
      {
        text: "Publications",
        url: "/academic/department/psychology/publications",
      },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { text: "Notices", url: "/academic/department/psychology/notices" },
      { text: "Events", url: "/academic/department/psychology/events" },
      { text: "Programs", url: "/academic/department/psychology/programs" },
      { text: "Photo Gallery", url: "/academic/department/psychology/gallery" },
      {
        text: "Exam Notice",
        url: "/academic/department/psychology/exam-notice",
      },
      {
        text: "Citizen Charter",
        url: "/academic/department/psychology/citizen-charter",
      },
      {
        text: "Renu Srity Turst",
        url: "/academic/department/psychology/renu-srity-trust",
      },
      {
        text: "Class Time Table",
        url: "/academic/department/psychology/routine",
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

export default function PsychologyDepartmentPage() {
  return (
    <DepartmentSubPageTemplate
      pageTitle="Welcome to the Department of Psychology"
      officialName="PROFESSOR DR. MD. ARIFUL ISLAM"
      officialTitle="Chairman"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2025/11/ch.jpg"
      profileLink="/academic/department/psychology/profile"
      notices={psychologyNotices}
      events={psychologyEvents}
      departmentName="Department of Psychology"
      footerColumns={psychologyFooterColumns}
      // Added multiple images to demonstrate the slider functionality
      sliderImages={[
        "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/05/WhatsApp-Image-2026-05-06-at-14.21.59.jpeg",
        "https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg",
      ]}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            This Department of Psychology is one of the oldest departments in
            the University of Rajshahi. We have been trying to create a
            congenial atmosphere for the students of psychology to express their
            views regarding the origin and development of life and the universe.
            As Psychology is called the love of wisdom, students should enquire
            into the meaning and truth hidden in nature and natural objects.
          </p>
          <p>
            The department of psychology has an excellent faculty strength
            specialized in the various fields of psychology. With their
            exceptional academic acumen, the department of psychology has been
            rendering a wonderful service to the pursuit of knowledge.
          </p>
          <p>
            The department offers four year honours and one year M. A. courses
            which cover ancient, medieval, modern and contemporary western
            psychology as well as logic, psychology, moral psychology, Muslim
            psychology, Indian psychology, political psychology, psychology of
            education, psychology of religion, comparative religion etc. In the
            department, we have offered all types of psychology like theistic,
            atheistic, polytheistic, monistic, dualistic, pluralistic etc. to
            enrich and broaden their mental horizon. We want to acquaint
            students with the contemporary psychologyical development so that
            they may become curious to know the real significance of ultimate
            reality. We are trying to make our students competent to serve our
            motherland sincerely and selflessly.
          </p>
        </div>
      }
    />
  );
}
