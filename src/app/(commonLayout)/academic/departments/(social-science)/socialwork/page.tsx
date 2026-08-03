import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";

const socialworkNotices = [
  {
    id: 1,
    day: "05",
    month: "MAY",
    title:
      "Creating a Roadmap for the Development of the Department of Social Work: Workshop on Documentation and Evidences",
    link: "/academic/department/socialwork/notices/1",
  },
  {
    id: 2,
    day: "24",
    month: "FEB",
    title: "উপ- রেজিস্ট্রার মো. বোরহান উদ্দিন এর বিদায় সংর্বধনা",
    link: "/academic/department/socialwork/notices/2",
  },
  {
    id: 3,
    day: "23",
    month: "DEC",
    title: "সম্পদ বিবরণী দাখিল করার নির্দেশ",
    link: "/academic/department/socialwork/notices/3",
  },
];

const socialworkEvents = [
  {
    id: 1,
    date: "15-07-2026",
    title: "ড. রশীদুল আলম স্মরণে দোয়া ও স্মরণসভা",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-15-at-10.54.26.jpeg",
    link: "/academic/department/socialwork/events/1",
  },
  {
    id: 2,
    date: "09-07-2026",
    title: "মানসিক সাস্থ্য বিষয়ক সেমিনার",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-12-at-13.35.15.jpeg",
    link: "/academic/department/socialwork/events/2",
  },
  {
    id: 3,
    date: "18-06-2026",
    title: "নবীনবরণ ও বিদায় সংবর্ণানা- 2026",
    image:
      "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/07/cWvcWzeWc.jpeg",
    link: "/academic/department/socialwork/events/3",
  },
];

const socialworkFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message", url: "/academic/department/socialwork/message" },
      {
        text: "Vision, Mission & Objective",
        url: "/academic/department/socialwork/vision",
      },
      {
        text: "List of Ex-Chairman",
        url: "/academic/department/socialwork/ex-chairmans",
      },
      { text: "About", url: "/academic/department/socialwork/about" },
      { text: "Contact", url: "/academic/department/socialwork/contact" },
      { text: "Admissions", url: "/admissions" },
      { text: "Student Insurance", url: "#" },
      { text: "IQAC/PSAC/FQAC", url: "/academic/department/socialwork/iqac" },
      { text: "Thesis", url: "/academic/department/socialwork/thesis" },
      { text: "Committee", url: "/academic/department/socialwork/committee" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Faculty Members",
        url: "/academic/department/socialwork/faculty-members",
      },
      { text: "Officers", url: "/academic/department/socialwork/officers" },
      { text: "Staff List", url: "/academic/department/socialwork/staff" },
      {
        text: "Research Journal",
        url: "/academic/department/socialwork/journal",
      },
      { text: "Alumni", url: "/academic/department/socialwork/alumni" },
      { text: "Rules & Forms", url: "/academic/department/socialwork/forms" },
      {
        text: "Extra Curriculum",
        url: "/academic/department/socialwork/extra-curriculum",
      },
      {
        text: "Publications",
        url: "/academic/department/socialwork/publications",
      },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { text: "Notices", url: "/academic/department/socialwork/notices" },
      { text: "Events", url: "/academic/department/socialwork/events" },
      { text: "Programs", url: "/academic/department/socialwork/programs" },
      { text: "Photo Gallery", url: "/academic/department/socialwork/gallery" },
      {
        text: "Exam Notice",
        url: "/academic/department/socialwork/exam-notice",
      },
      {
        text: "Citizen Charter",
        url: "/academic/department/socialwork/citizen-charter",
      },
      {
        text: "Renu Srity Turst",
        url: "/academic/department/socialwork/renu-srity-trust",
      },
      {
        text: "Class Time Table",
        url: "/academic/department/socialwork/routine",
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

export default function SocialWorkDepartmentPage() {
  return (
    <DepartmentSubPageTemplate
      pageTitle="Welcome to the Department of Social Work"
      officialName="PROFESSOR DR. MD. ARIFUL ISLAM"
      officialTitle="Chairman"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2025/11/ch.jpg"
      profileLink="/academic/department/socialwork/profile"
      notices={socialworkNotices}
      events={socialworkEvents}
      departmentName="Department of Social Work"
      footerColumns={socialworkFooterColumns}
      // Added multiple images to demonstrate the slider functionality
      sliderImages={[
        "https://www.ru.ac.bd/philosophy/wp-content/uploads/sites/13/2026/05/WhatsApp-Image-2026-05-06-at-14.21.59.jpeg",
        "https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg",
      ]}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            This Department of Social Work is one of the oldest departments in
            the University of Rajshahi. We have been trying to create a
            congenial atmosphere for the students of philosophy to express their
            views regarding the origin and development of life and the universe.
            As Philosophy is called the love of wisdom, students should enquire
            into the meaning and truth hidden in nature and natural objects.
          </p>
          <p>
            The department of social work has an excellent faculty strength
            specialized in the various fields of philosophy. With their
            exceptional academic acumen, the department of philosophy has been
            rendering a wonderful service to the pursuit of knowledge.
          </p>
          <p>
            The department offers four year honours and one year M. A. courses
            which cover ancient, medieval, modern and contemporary western
            philosophy as well as logic, psychology, moral philosophy, Muslim
            philosophy, Indian philosophy, political philosophy, philosophy of
            education, philosophy of religion, comparative religion etc. In the
            department, we have offered all types of philosophy like theistic,
            atheistic, polytheistic, monistic, dualistic, pluralistic etc. to
            enrich and broaden their mental horizon. We want to acquaint
            students with the contemporary philosophical development so that
            they may become curious to know the real significance of ultimate
            reality. We are trying to make our students competent to serve our
            motherland sincerely and selflessly.
          </p>
        </div>
      }
    />
  );
}
