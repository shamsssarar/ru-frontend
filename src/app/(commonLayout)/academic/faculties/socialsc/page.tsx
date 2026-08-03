import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const socialNotices = [
  { id: 1, day: "06", month: "MAY", title: "সান্ধ্য মাষ্টার্স (EMSS) প্রোগ্রামে ভর্তি বিজ্ঞপ্তি, সামাজিক বিজ্ঞান অনুষদ", link: "/academic/faculties/socialsc/notices/1" },
  { id: 2, day: "21", month: "MAY", title: "Abstract Submission Deadline Extended! 3rd International Conference...", link: "/academic/faculties/socialsc/notices/2" },
  { id: 3, day: "07", month: "MAY", title: "Call for Conference Papers", link: "/academic/faculties/socialsc/notices/3" },
  { id: 4, day: "15", month: "APR", title: "সান্ধ্য মাস্টার্স (ঊগঝঝ) প্রোগ্রামে ভর্তি বিজ্ঞপ্তি, সামাজিক বিজ্ঞান অনুষদ", link: "/academic/faculties/socialsc/notices/4" },
  { id: 5, day: "24", month: "DEC", title: "সান্ধ্য মাস্টার্স () প্রোগ্রামে ভর্তির সময় বৃদ্ধি সংক্রান্ত বিজ্ঞপ্তি", link: "/academic/faculties/socialsc/notices/5" },
];

const socialDepartments = [
  { name: "Economics", link: "/academic/departments/economics" },
  { name: "Political Science", link: "/academic/departments/politicalsc" },
  { name: "Social Work", link: "/academic/departments/socialwork" },
  { name: "Sociology", link: "/academic/departments/sociology" },
  { name: "Folklore & Social Development studies", link: "/academic/departments/folklore" },
  { name: "Anthropology", link: "/academic/departments/anthropology" },
  { name: "Public Administration", link: "/academic/departments/publicadmin" },
  { name: "International Relations", link: "/academic/departments/interrelations" },
  { name: "Mass Communication and Journalism", link: "/academic/departments/mcj" },
  { name: "Information Science & Library Management", link: "/academic/departments/islm" },
];

export default function FacultyOfSocialSciencePage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Social Science"
      bannerImage="https://www.ru.ac.bd/socialsc/wp-content/uploads/sites/65/2022/02/Administration-Building.jpg"
      deanName="Dr. Md. Abdul Alim"
      deanImage="https://www.ru.ac.bd/socialsc/wp-content/uploads/sites/65/2026/06/Dr.-Md.-Abdul-Alim.jpg"
      deanProfileLink="/academic/faculties/socialsc/message"
      notices={socialNotices}
      events={[]} 
      departments={socialDepartments}
      footerColumns={[]} 
      deanMessage={
        <p className="mb-4">
          I feel honored to take up the position of the 16th Dean of the Faculty of Social Science, University of Rajshahi in its 33nd year. Beginning with only four, it is now home to as many as ten departments—Economics, Political Science, Social Work, Sociology, Mass Communication and Journalism, Information Science and Library Management, Public Administration, Anthropology, Folklore and International Relations.
        </p>
      }
    />
  );
}