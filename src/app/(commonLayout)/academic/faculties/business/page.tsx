import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const businessDepartments = [
  { name: "Finance", link: "/academic/departments/finance" },
  { name: "Marketing", link: "/academic/departments/marketing" },
  { name: "Banking and Insurance", link: "/academic/departments/bankingins" },
  { name: "Management Studies", link: "/academic/departments/management" },
  {
    name: "Accounting and Information Systems",
    link: "/academic/departments/ais",
  },
  {
    name: "Tourism and Hospitality Management",
    link: "/academic/departments/thm",
  },
];

// Note: Reusing the generic notices block from the extraction for brevity
const businessNotices = [
  {
    id: 1,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "/academic/faculties/business/notices/1",
  },
  {
    id: 2,
    day: "27",
    month: "FEB",
    title:
      "২০২২-২০২৩ শিক্ষাবর্ষে এম. ফিল. ও পিএইচ.ডি. প্রোগ্রামে ভর্তি বিজ্ঞপ্তি",
    link: "/academic/faculties/business/notices/2",
  },
];

export default function FacultyOfBusinessPage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Business Studies"
      bannerImage="https://www.ru.ac.bd/business/wp-content/uploads/sites/64/2022/02/Administration-Building.jpg"
      deanName="Dr. Md. Faridul Islam"
      deanImage="https://www.ru.ac.bd/business/wp-content/uploads/sites/64/2026/06/Dr.-Md.-Faridul-Islam.jpg"
      deanProfileLink="/academic/faculties/business/message"
      notices={businessNotices}
      events={[]}
      departments={businessDepartments}
      footerColumns={[]}
      deanMessage={
        <p className="mb-4">
          Welcome to the Faculty of Business Studies. We aim to shape the future
          of business leadership through comprehensive education and impactful
          research.
        </p>
      }
    />
  );
}
