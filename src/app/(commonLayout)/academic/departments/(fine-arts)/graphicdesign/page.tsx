import DepartmentSubPageTemplate from "@/components/layout/DepartmentSubPageTemplate";

const graphicdesignNotices = [
  {
    id: 1,
    day: "05",
    month: "MAY",
    title:
      "Creating a Roadmap for the Development of the Department of Graphic Design, Crafts and History of Art: Workshop on Documentation and Evidences",
    link: "/academic/department/graphicdesign/notices/1",
  },
  {
    id: 2,
    day: "24",
    month: "FEB",
    title: "উপ- রেজিস্ট্রার মো. বোরহান উদ্দিন এর বিদায় সংর্বধনা",
    link: "/academic/department/graphicdesign/notices/2",
  },
  {
    id: 3,
    day: "23",
    month: "DEC",
    title: "সম্পদ বিবরণী দাখিল করার নির্দেশ",
    link: "/academic/department/graphicdesign/notices/3",
  },
];

const graphicdesignEvents = [
  {
    id: 1,
    date: "15-07-2026",
    title: "ড. রশীদুল আলম স্মরণে দোয়া ও স্মরণসভা",
    image:
      "https://www.ru.ac.bd/graphicdesign/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-15-at-10.54.26.jpeg",
    link: "/academic/department/graphicdesign/events/1",
  },
  {
    id: 2,
    date: "09-07-2026",
    title: "মানসিক সাস্থ্য বিষয়ক সেমিনার",
    image:
      "https://www.ru.ac.bd/graphicdesign/wp-content/uploads/sites/13/2026/07/WhatsApp-Image-2026-07-12-at-13.35.15.jpeg",
    link: "/academic/department/graphicdesign/events/2",
  },
  {
    id: 3,
    date: "18-06-2026",
    title: "নবীনবরণ ও বিদায় সংবর্ণানা- 2026",
    image:
      "https://www.ru.ac.bd/graphicdesign/wp-content/uploads/sites/13/2026/07/cWvcWzeWc.jpeg",
    link: "/academic/department/graphicdesign/events/3",
  },
];

const graphicdesignFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message", url: "/academic/department/graphicdesign/message" },
      {
        text: "Vision, Mission & Objective",
        url: "/academic/department/graphicdesign/vision",
      },
      {
        text: "List of Ex-Chairman",
        url: "/academic/department/graphicdesign/ex-chairmans",
      },
      { text: "About", url: "/academic/department/graphicdesign/about" },
      { text: "Contact", url: "/academic/department/graphicdesign/contact" },
      { text: "Admissions", url: "/admissions" },
      { text: "Student Insurance", url: "#" },
      { text: "IQAC/PSAC/FQAC", url: "/academic/department/graphicdesign/iqac" },
      { text: "Thesis", url: "/academic/department/graphicdesign/thesis" },
      { text: "Committee", url: "/academic/department/graphicdesign/committee" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        text: "Faculty Members",
        url: "/academic/department/graphicdesign/faculty-members",
      },
      { text: "Officers", url: "/academic/department/graphicdesign/officers" },
      { text: "Staff List", url: "/academic/department/graphicdesign/staff" },
      {
        text: "Research Journal",
        url: "/academic/department/graphicdesign/journal",
      },
      { text: "Alumni", url: "/academic/department/graphicdesign/alumni" },
      { text: "Rules & Forms", url: "/academic/department/graphicdesign/forms" },
      {
        text: "Extra Curriculum",
        url: "/academic/department/graphicdesign/extra-curriculum",
      },
      {
        text: "Publications",
        url: "/academic/department/graphicdesign/publications",
      },
    ],
  },
  {
    title: "Student Corner",
    links: [
      { text: "Notices", url: "/academic/department/graphicdesign/notices" },
      { text: "Events", url: "/academic/department/graphicdesign/events" },
      { text: "Programs", url: "/academic/department/graphicdesign/programs" },
      { text: "Photo Gallery", url: "/academic/department/graphicdesign/gallery" },
      {
        text: "Exam Notice",
        url: "/academic/department/graphicdesign/exam-notice",
      },
      {
        text: "Citizen Charter",
        url: "/academic/department/graphicdesign/citizen-charter",
      },
      {
        text: "Renu Srity Turst",
        url: "/academic/department/graphicdesign/renu-srity-trust",
      },
      {
        text: "Class Time Table",
        url: "/academic/department/graphicdesign/routine",
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

export default function GraphicDesignCraftsandHistoryofArtDepartmentPage() {
  return (
    <DepartmentSubPageTemplate
      pageTitle="Welcome to the Department of Graphic Design, Crafts and History of Art"
      officialName="PROFESSOR DR. MD. ARIFUL ISLAM"
      officialTitle="Chairman"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/graphicdesign/wp-content/uploads/sites/13/2025/11/ch.jpg"
      profileLink="/academic/department/graphicdesign/profile"
      notices={graphicdesignNotices}
      events={graphicdesignEvents}
      departmentName="Department of Graphic Design, Crafts and History of Art"
      footerColumns={graphicdesignFooterColumns}
      // Added multiple images to demonstrate the slider functionality
      sliderImages={[
        "https://www.ru.ac.bd/graphicdesign/wp-content/uploads/sites/13/2026/05/WhatsApp-Image-2026-05-06-at-14.21.59.jpeg",
        "https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg",
      ]}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            This Department of Graphic Design, Crafts and History of Art is one of the oldest departments in
            the University of Rajshahi. We have been trying to create a
            congenial atmosphere for the students of graphicdesign to express their
            views regarding the origin and development of life and the universe.
            As Graphic Design, Crafts and History of Art is called the love of wisdom, students should enquire
            into the meaning and truth hidden in nature and natural objects.
          </p>
          <p>
            The department of graphicdesign has an excellent faculty strength
            specialized in the various fields of graphicdesign. With their
            exceptional academic acumen, the department of graphicdesign has been
            rendering a wonderful service to the pursuit of knowledge.
          </p>
          <p>
            The department offers four year honours and one year M. A. courses
            which cover ancient, medieval, modern and contemporary western
            graphicdesign as well as logic, psychology, moral graphicdesign, Muslim
            graphicdesign, Indian graphicdesign, political graphicdesign, graphicdesign of
            education, graphicdesign of religion, comparative religion etc. In the
            department, we have offered all types of graphicdesign like theistic,
            atheistic, polytheistic, monistic, dualistic, pluralistic etc. to
            enrich and broaden their mental horizon. We want to acquaint
            students with the contemporary graphicdesignical development so that
            they may become curious to know the real significance of ultimate
            reality. We are trying to make our students competent to serve our
            motherland sincerely and selflessly.
          </p>
        </div>
      }
    />
  );
}
