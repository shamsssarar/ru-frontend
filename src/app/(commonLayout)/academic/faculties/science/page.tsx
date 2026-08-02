import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const scienceNotices = [
  {
    id: 1,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "/academic/faculties/science/notices/1",
  },
  {
    id: 2,
    day: "27",
    month: "FEB",
    title:
      "২০২২-২০২৩ শিক্ষাবর্ষে এম. ফিল. ও পিএইচ.ডি. প্রোগ্রামে ভর্তি বিজ্ঞপ্তি, পরিবেশ বিজ্ঞান ইনস্টিটিউট",
    link: "/academic/faculties/science/notices/2",
  },
  {
    id: 3,
    day: "25",
    month: "FEB",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের অনুষদভুক্ত বিভাগসমূহে ২০২২-২০২৩ শিক্ষাবর্ষে এম.ফিল. ও পিএইচ.ডি. কোর্সে ভর্তি বিজ্ঞপ্তি",
    link: "/academic/faculties/science/notices/3",
  },
];

const scienceDepartments = [
  { name: "Mathematics", link: "/academic/department/math" },
  { name: "Physics", link: "/academic/department/physics" },
  { name: "Chemistry", link: "/academic/department/chemistry" },
  { name: "Statistics", link: "/academic/department/stat" },
  { name: "Pharmacy", link: "/academic/department/pharmacy" },
  { name: "Applied Mathematics", link: "/academic/department/appmath" },
  {
    name: "Biochemistry & Molecular Biology",
    link: "/academic/department/biochemistry",
  },
  {
    name: "Physical Education and Sports Sciences",
    link: "/academic/department/physicaledu",
  },
  {
    name: "Population Science & Human Resource Development",
    link: "/academic/department/populationsc",
  },
];

const standardFooterColumns = [
  /* ... Use the same structure as above, just change the base URLs ... */
];

export default function FacultyOfSciencePage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Science"
      bannerImage="https://www.ru.ac.bd/science/wp-content/uploads/sites/63/2022/02/Administration-Building.jpg"
      deanName="Dr. Mamunur Rashid"
      deanImage="https://www.ru.ac.bd/science/wp-content/uploads/sites/63/2026/06/Dr.-Mamunur-Rashid.jpg"
      deanProfileLink="/academic/faculties/science/message"
      notices={scienceNotices}
      events={[]}
      departments={scienceDepartments}
      footerColumns={[]} // Pass your footer array here
      deanMessage={
        <p className="mb-4">
          Welcome to the Faculty of Science at the University of Rajshahi. We
          are dedicated to providing excellent education and fostering
          innovative research across our various departments.
        </p>
      }
    />
  );
}
