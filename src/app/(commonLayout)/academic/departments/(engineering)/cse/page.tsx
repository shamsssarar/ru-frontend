import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";

const cseNotices = [
  {
    id: 1,
    day: "05",
    month: "MAY",
    title:
      "Creating a Roadmap for the Development of the Department of Computer Science and Engineering: Workshop on Documentation and Evidences",
    link: "/academic/department/cse/notices/1",
  },
  {
    id: 2,
    day: "24",
    month: "FEB",
    title: "উপ- রেজিস্ট্রার মো. বোরহান উদ্দিন এর বিদায় সংর্বধনা",
    link: "/academic/department/cse/notices/2",
  },
  {
    id: 3,
    day: "23",
    month: "DEC",
    title: "সম্পদ বিবরণী দাখিল করার নির্দেশ",
    link: "/academic/department/cse/notices/3",
  },
];

const cseEvents = [
  {
    id: 1,
    date: "15-07-2026",
    title: "ড. রশীদুল আলম স্মরণে দোয়া ও স্মরণসভা",
    image:
      "https://www.ru.ac.bd/cse/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-15-at-10.54.26.jpeg",
    link: "/academic/department/cse/events/1",
  },
  {
    id: 2,
    date: "09-07-2026",
    title: "মানসিক সাস্থ্য বিষয়ক সেমিনার",
    image:
      "https://www.ru.ac.bd/cse/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-12-at-13.35.15.jpeg",
    link: "/academic/department/cse/events/2",
  },
  {
    id: 3,
    date: "18-06-2026",
    title: "নবীনবরণ ও বিদায় সংবর্ণানা- 2026",
    image:
      "https://www.ru.ac.bd/cse/wp-content/uploads/sites/13/2026/07/cWvcWzeWc.jpeg",
    link: "/academic/department/cse/events/3",
  },
];

const cseFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message", url: "/academic/department/cse/message" },
      {
        text: "Vision, Mission & Objective",
        url: "/academic/department/cse/vision",
      },
      {
        text: "List of Ex-Chairman",
        url: "/academic/department/cse/ex-chairmans",
      },
      { text: "About", url: "/academic/department/cse/about" },
      { text: "Contact", url: "/academic/department/cse/contact" },
      { text: "Admissions", url: "/admissions" },
      { text: "Student Insurance", url: "#" },
      { text: "IQAC/PSAC/FQAC", url: "/academic/department/cse/iqac" },
      { text: "Thesis", url: "/academic/department/cse/thesis" },
      { text: "Committee", url: "/academic/department/cse/committee" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Faculty Members",
        url: "/academic/department/cse/faculty-members",
      },
      { text: "Officers", url: "/academic/department/cse/officers" },
      { text: "Staff List", url: "/academic/department/cse/staff" },
      {
        text: "Research Journal",
        url: "/academic/department/cse/journal",
      },
      { text: "Alumni", url: "/academic/department/cse/alumni" },
      { text: "Rules & Forms", url: "/academic/department/cse/forms" },
      {
        text: "Extra Curriculum",
        url: "/academic/department/cse/extra-curriculum",
      },
      {
        text: "Publications",
        url: "/academic/department/cse/publications",
      },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { text: "Notices", url: "/academic/department/cse/notices" },
      { text: "Events", url: "/academic/department/cse/events" },
      { text: "Programs", url: "/academic/department/cse/programs" },
      { text: "Photo Gallery", url: "/academic/department/cse/gallery" },
      {
        text: "Exam Notice",
        url: "/academic/department/cse/exam-notice",
      },
      {
        text: "Citizen Charter",
        url: "/academic/department/cse/citizen-charter",
      },
      {
        text: "Renu Srity Turst",
        url: "/academic/department/cse/renu-srity-trust",
      },
      {
        text: "Class Time Table",
        url: "/academic/department/cse/routine",
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

export default function ComputerScienceandEngineeringDepartmentPage() {
  return (
    <DepartmentSubPageTemplate
      pageTitle="Welcome to the Department of Computer Science and Engineering"
      officialName="PROFESSOR DR. MD. ARIFUL ISLAM"
      officialTitle="Chairman"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/cse/wp-content/uploads/sites/13/2025/11/ch.jpg"
      profileLink="/academic/department/cse/profile"
      notices={cseNotices}
      events={cseEvents}
      departmentName="Department of Computer Science and Engineering"
      footerColumns={cseFooterColumns}
      // Added multiple images to demonstrate the slider functionality
      sliderImages={[
        "https://www.ru.ac.bd/cse/wp-content/uploads/sites/13/2026/05/WhatsApp-Image-2026-05-06-at-14.21.59.jpeg",
        "https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg",
      ]}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            This Department of Computer Science and Engineering is one of the oldest departments in
            the University of Rajshahi. We have been trying to create a
            congenial atmosphere for the students of cse to express their
            views regarding the origin and development of life and the universe.
            As Computer Science and Engineering is called the love of wisdom, students should enquire
            into the meaning and truth hidden in nature and natural objects.
          </p>
          <p>
            The department of cse has an excellent faculty strength
            specialized in the various fields of cse. With their
            exceptional academic acumen, the department of cse has been
            rendering a wonderful service to the pursuit of knowledge.
          </p>
          <p>
            The department offers four year honours and one year M. A. courses
            which cover ancient, medieval, modern and contemporary western
            cse as well as logic, psychology, moral cse, Muslim
            cse, Indian cse, political cse, cse of
            education, cse of religion, comparative religion etc. In the
            department, we have offered all types of cse like theistic,
            atheistic, polytheistic, monistic, dualistic, pluralistic etc. to
            enrich and broaden their mental horizon. We want to acquaint
            students with the contemporary cseical development so that
            they may become curious to know the real significance of ultimate
            reality. We are trying to make our students competent to serve our
            motherland sincerely and selflessly.
          </p>
        </div>
      }
    />
  );
}
