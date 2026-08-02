import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const artsNotices = [
  {
    id: 1,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "/academic/faculties/arts/notices/1",
  },
  {
    id: 2,
    day: "27",
    month: "FEB",
    title:
      "২০২২-২০২৩ শিক্ষাবর্ষে এম. ফিল. ও পিএইচ.ডি. প্রোগ্রামে ভর্তি বিজ্ঞপ্তি, পরিবেশ বিজ্ঞান ইনস্টিটিউট",
    link: "/academic/faculties/arts/notices/2",
  },
  {
    id: 3,
    day: "25",
    month: "FEB",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের অনুষদভুক্ত বিভাগসমূহে ২০২২-২০২৩ শিক্ষাবর্ষে এম.ফিল. ও পিএইচ.ডি. কোর্সে ভর্তি বিজ্ঞপ্তি",
    link: "/academic/faculties/arts/notices/3",
  },
  {
    id: 4,
    day: "27",
    month: "JAN",
    title: "চিত্রাংকন ও বাংলা হস্তলিপি প্রতিযোগিতা",
    link: "/academic/faculties/arts/notices/4",
  },
  {
    id: 5,
    day: "25",
    month: "JAN",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের সকল বর্ষের ক্লাস ও অফিসসমূহ আগামী ২২ ফেব্রুয়ারি, ২০২২ তারিখ মঙ্গলবার থেকে স্বাস্থ্যবিধি অনুসরণ করে যথারীতি চালু থাকবে।",
    link: "/academic/faculties/arts/notices/5",
  },
];

const artsDepartments = [
  { name: "Philosophy", link: "/academic/department/philosophy" },
  { name: "History", link: "/academic/department/history" },
  { name: "English", link: "/academic/department/english" },
  { name: "Bangla", link: "/academic/department/bangla" },
  { name: "Islamic History & Culture", link: "/academic/department/ihc" },
  { name: "Arabic", link: "/academic/department/arabic" },
  { name: "Islamic Studies", link: "/academic/department/islamic-studies" },
  { name: "Theatre", link: "/academic/department/theatre" },
  { name: "Music", link: "/academic/department/music" },
  {
    name: "Persian language and literature",
    link: "/academic/department/persian",
  },
  { name: "Sanskrit", link: "/academic/department/sanskrit" },
  { name: "Urdu", link: "/academic/department/urdu" },
];

const artsFooterColumns = [
  {
    title: "Footer Menu",
    links: [
      { text: "Message from Dean", url: "/academic/faculties/arts/message" },
      { text: "List of the Deans", url: "/academic/faculties/arts/deans" },
      { text: "Department", url: "/academic/department" },
      { text: "Faculty Meeting", url: "/academic/faculties/arts/meetings" },
      { text: "Admissions", url: "/admissions" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { text: "Officers", url: "/academic/faculties/arts/officers" },
      { text: "Staff List", url: "/academic/faculties/arts/staff" },
      { text: "Conferences", url: "/academic/faculties/arts/conferences" },
      { text: "Publications", url: "/publications" },
      { text: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Additional Links",
    links: [
      { text: "Notices", url: "/academic/faculties/arts/notices" },
      { text: "Events", url: "/academic/faculties/arts/events" },
      { text: "Faculty Meeting", url: "/academic/faculties/arts/meetings" },
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
      { text: "Google Meet – Online Video Meetings and Calls", url: "#" },
      { text: "Plagiarism Detection Software | iThenticate", url: "#" },
    ],
  },
];

export default function FacultyOfArtsPage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Arts"
      bannerImage="https://www.ru.ac.bd/arts/wp-content/uploads/sites/61/2022/02/Administration-Building.jpg"
      deanName="DR. MUHAMMAD BELAL HOSSAIN"
      deanImage="https://www.ru.ac.bd/arts/wp-content/uploads/sites/61/2026/05/Photo-Update.jpg"
      deanProfileLink="/academic/faculties/arts/message"
      notices={artsNotices}
      events={[]} // Empty array based on the screenshot provided
      departments={artsDepartments}
      footerColumns={artsFooterColumns}
      deanMessage={
        <>
          <p className="mb-4">
            The Faculty of Arts of Rajshahi University started its journey along
            with the establishment of the university itself in 1953. Professor
            Dr. Muhammad Shahidullah was appointed the first Dean of the faculty
            in 1955. Initially the faculty comprised seven departments.
          </p>
          <p>
            These departments were Bangla, English, Philosophy, History, Islamic
            History, Psychology and Commerce. But currently it has emerged as
            the biggest faculty consisting of as many as twelve departments.
          </p>
        </>
      }
    />
  );
}
