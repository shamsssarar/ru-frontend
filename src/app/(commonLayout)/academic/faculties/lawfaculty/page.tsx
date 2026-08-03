import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const lawNotices = [
  {
    id: 1,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "/academic/faculties/lawfaculty/notices/1",
  },
  {
    id: 2,
    day: "27",
    month: "FEB",
    title:
      "২০২২-২০২৩ শিক্ষাবর্ষে এম. ফিল. ও পিএইচ.ডি. প্রোগ্রামে ভর্তি বিজ্ঞপ্তি, পরিবেশ বিজ্ঞান ইনস্টিটিউট",
    link: "/academic/faculties/lawfaculty/notices/2",
  },
  {
    id: 3,
    day: "25",
    month: "FEB",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের অনুষদভুক্ত বিভাগসমূহে ২০২২-২০২৩ শিক্ষাবর্ষে এম.ফিল. ও পিএইচ.ডি. কোর্সে ভর্তি বিজ্ঞপ্তি",
    link: "/academic/faculties/lawfaculty/notices/3",
  },
  {
    id: 4,
    day: "27",
    month: "JAN",
    title: "চিত্রাংকন ও বাংলা হস্তলিপি প্রতিযোগিতা",
    link: "/academic/faculties/lawfaculty/notices/4",
  },
  {
    id: 5,
    day: "25",
    month: "JAN",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের সকল বর্ষের ক্লাস ও অফিসসমূহ আগামী ২২ ফেব্রুয়ারি, ২০২২ তারিখ মঙ্গলবার থেকে স্বাস্থ্যবিধি অনুসরণ করে যথারীতি চালু থাকবে।",
    link: "/academic/faculties/lawfaculty/notices/5",
  },
];

const lawDepartments = [
  { name: "Law", link: "/academic/departments/law" },
  {
    name: "Law and Land Administration",
    link: "/academic/departments/lawadmin",
  },
];

const lawFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      {
        text: "Message from Dean",
        url: "/academic/faculties/lawfaculty/message",
      },
      {
        text: "List of the Deans",
        url: "/academic/faculties/lawfaculty/deans",
      },
      { text: "Department", url: "/academic/departments" },
      {
        text: "Faculty Meeting",
        url: "/academic/faculties/lawfaculty/meetings",
      },
      { text: "Admissions", url: "/admissions" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { text: "Officers", url: "/academic/faculties/lawfaculty/officers" },
      { text: "Staff List", url: "/academic/faculties/lawfaculty/staff" },
      {
        text: "Conferences",
        url: "/academic/faculties/lawfaculty/conferences",
      },
      { text: "Publications", url: "/publications" },
      { text: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Additional Links",
    links: [
      { text: "Notices", url: "/academic/faculties/lawfaculty/notices" },
      { text: "Events", url: "/academic/faculties/lawfaculty/events" },
      { text: "Photo Gallery", url: "/gallery" },
      { text: "Ordinance", url: "/ordinance" },
    ],
  },
  {
    title: "Important Links",
    links: [
      { text: "University Grants Commission (UGC)", url: "#" },
      { text: "Bangladesh Research and Education Network (BdREN)", url: "#" },
      { text: "BdREN ZOOM", url: "#" },
      { text: "Google Classroom", url: "#" },
    ],
  },
];

export default function FacultyOfLawPage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Law"
      bannerImage="https://www.ru.ac.bd/lawfaculty/wp-content/uploads/sites/62/2022/02/Administration-Building.jpg"
      deanName="Dr. Md. Faridul Islam"
      deanImage="https://www.ru.ac.bd/lawfaculty/wp-content/uploads/sites/62/2026/06/Dr.-Md.-Faridul-Islam.jpg"
      deanProfileLink="/academic/faculties/lawfaculty/message"
      notices={lawNotices}
      events={[]}
      departments={lawDepartments}
      footerColumns={lawFooterColumns}
      deanMessage={
        <p className="mb-4">
          Welcome to the University of Rajshahi Faculty of Law. RU Faculty of
          Law is widely recognized for educating practice-ready judges and
          lawyers, and our LLM programme received a grade for the excellent Law
          Faculty Experience it provides. The faculty offers a wide range of
          nationally-ranked programmes, taught by faculty experts in their
          fields, including our Lawyering program and our LLM specialised
          courses. ...
        </p>
      }
    />
  );
}
