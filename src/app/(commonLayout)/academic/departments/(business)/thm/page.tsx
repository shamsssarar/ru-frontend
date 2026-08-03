import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";

const thmNotices = [
  {
    id: 1,
    day: "05",
    month: "MAY",
    title:
      "Creating a Roadmap for the Development of the Department of Tourism and Hospitality Management: Workshop on Documentation and Evidences",
    link: "/academic/department/thm/notices/1",
  },
  {
    id: 2,
    day: "24",
    month: "FEB",
    title: "উপ- রেজিস্ট্রার মো. বোরহান উদ্দিন এর বিদায় সংর্বধনা",
    link: "/academic/department/thm/notices/2",
  },
  {
    id: 3,
    day: "23",
    month: "DEC",
    title: "সম্পদ বিবরণী দাখিল করার নির্দেশ",
    link: "/academic/department/thm/notices/3",
  },
];

const thmEvents = [
  {
    id: 1,
    date: "15-07-2026",
    title: "ড. রশীদুল আলম স্মরণে দোয়া ও স্মরণসভা",
    image:
      "https://www.ru.ac.bd/thm/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-15-at-10.54.26.jpeg",
    link: "/academic/department/thm/events/1",
  },
  {
    id: 2,
    date: "09-07-2026",
    title: "মানসিক সাস্থ্য বিষয়ক সেমিনার",
    image:
      "https://www.ru.ac.bd/thm/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-12-at-13.35.15.jpeg",
    link: "/academic/department/thm/events/2",
  },
  {
    id: 3,
    date: "18-06-2026",
    title: "নবীনবরণ ও বিদায় সংবর্ণানা- 2026",
    image:
      "https://www.ru.ac.bd/thm/wp-content/uploads/sites/13/2026/07/cWvcWzeWc.jpeg",
    link: "/academic/department/thm/events/3",
  },
];

const thmFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message", url: "/academic/department/thm/message" },
      {
        text: "Vision, Mission & Objective",
        url: "/academic/department/thm/vision",
      },
      {
        text: "List of Ex-Chairman",
        url: "/academic/department/thm/ex-chairmans",
      },
      { text: "About", url: "/academic/department/thm/about" },
      { text: "Contact", url: "/academic/department/thm/contact" },
      { text: "Admissions", url: "/admissions" },
      { text: "Student Insurance", url: "#" },
      { text: "IQAC/PSAC/FQAC", url: "/academic/department/thm/iqac" },
      { text: "Thesis", url: "/academic/department/thm/thesis" },
      { text: "Committee", url: "/academic/department/thm/committee" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Faculty Members",
        url: "/academic/department/thm/faculty-members",
      },
      { text: "Officers", url: "/academic/department/thm/officers" },
      { text: "Staff List", url: "/academic/department/thm/staff" },
      {
        text: "Research Journal",
        url: "/academic/department/thm/journal",
      },
      { text: "Alumni", url: "/academic/department/thm/alumni" },
      { text: "Rules & Forms", url: "/academic/department/thm/forms" },
      {
        text: "Extra Curriculum",
        url: "/academic/department/thm/extra-curriculum",
      },
      {
        text: "Publications",
        url: "/academic/department/thm/publications",
      },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { text: "Notices", url: "/academic/department/thm/notices" },
      { text: "Events", url: "/academic/department/thm/events" },
      { text: "Programs", url: "/academic/department/thm/programs" },
      { text: "Photo Gallery", url: "/academic/department/thm/gallery" },
      {
        text: "Exam Notice",
        url: "/academic/department/thm/exam-notice",
      },
      {
        text: "Citizen Charter",
        url: "/academic/department/thm/citizen-charter",
      },
      {
        text: "Renu Srity Turst",
        url: "/academic/department/thm/renu-srity-trust",
      },
      {
        text: "Class Time Table",
        url: "/academic/department/thm/routine",
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

export default function TourismandHospitalityManagementDepartmentPage() {
  return (
    <DepartmentSubPageTemplate
      pageTitle="Welcome to the Department of Tourism and Hospitality Management"
      officialName="PROFESSOR DR. MD. ARIFUL ISLAM"
      officialTitle="Chairman"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/thm/wp-content/uploads/sites/13/2025/11/ch.jpg"
      profileLink="/academic/department/thm/profile"
      notices={thmNotices}
      events={thmEvents}
      departmentName="Department of Tourism and Hospitality Management"
      footerColumns={thmFooterColumns}
      // Added multiple images to demonstrate the slider functionality
      sliderImages={[
        "https://www.ru.ac.bd/thm/wp-content/uploads/sites/13/2026/05/WhatsApp-Image-2026-05-06-at-14.21.59.jpeg",
        "https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg",
      ]}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            This Department of Tourism and Hospitality Management is one of the oldest departments in
            the University of Rajshahi. We have been trying to create a
            congenial atmosphere for the students of thm to express their
            views regarding the origin and development of life and the universe.
            As Tourism and Hospitality Management is called the love of wisdom, students should enquire
            into the meaning and truth hidden in nature and natural objects.
          </p>
          <p>
            The department of thm has an excellent faculty strength
            specialized in the various fields of thm. With their
            exceptional academic acumen, the department of thm has been
            rendering a wonderful service to the pursuit of knowledge.
          </p>
          <p>
            The department offers four year honours and one year M. A. courses
            which cover ancient, medieval, modern and contemporary western
            thm as well as logic, psychology, moral thm, Muslim
            thm, Indian thm, political thm, thm of
            education, thm of religion, comparative religion etc. In the
            department, we have offered all types of thm like theistic,
            atheistic, polytheistic, monistic, dualistic, pluralistic etc. to
            enrich and broaden their mental horizon. We want to acquaint
            students with the contemporary thmical development so that
            they may become curious to know the real significance of ultimate
            reality. We are trying to make our students competent to serve our
            motherland sincerely and selflessly.
          </p>
        </div>
      }
    />
  );
}
