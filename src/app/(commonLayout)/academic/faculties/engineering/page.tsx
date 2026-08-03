import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const engNotices = [
  {
    id: 1,
    day: "08",
    month: "JUN",
    title:
      "International Conference on Recent Progresses in Science, Engineering and Technology 2026",
    link: "/academic/faculties/engineering/notices/1",
  },
  {
    id: 2,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "/academic/faculties/engineering/notices/2",
  },
  {
    id: 3,
    day: "27",
    month: "FEB",
    title:
      "২০২২-২০২৩ শিক্ষাবর্ষে এম. ফিল. ও পিএইচ.ডি. প্রোগ্রামে ভর্তি বিজ্ঞপ্তি, পরিবেশ বিজ্ঞান ইনস্টিটিউট",
    link: "/academic/faculties/engineering/notices/3",
  },
  {
    id: 4,
    day: "25",
    month: "FEB",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের অনুষদভুক্ত বিভাগসমূহে ২০২২-২০২৩ শিক্ষাবর্ষে এম.ফিল. ও পিএইচ.ডি. কোর্সে ভর্তি বিজ্ঞপ্তি",
    link: "/academic/faculties/engineering/notices/4",
  },
  {
    id: 5,
    day: "27",
    month: "JAN",
    title: "চিত্রাংকন ও বাংলা হস্তলিপি প্রতিযোগিতা",
    link: "/academic/faculties/engineering/notices/5",
  },
];

const engDepartments = [
  { name: "Computer Science & Engineering", link: "/academic/departments/cse" },
  {
    name: "Electrical and Electronic Engineering",
    link: "/academic/departments/eee",
  },
  {
    name: "Materials Science and Engineering",
    link: "/academic/departments/mse",
  },
  {
    name: "Applied Chemistry & Chemical Engineering",
    link: "/academic/departments/acce",
  },
  {
    name: "Information & Communication Engineering",
    link: "/academic/departments/ice",
  },
];

export default function FacultyOfEngineeringPage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Engineering"
      bannerImage="https://www.ru.ac.bd/engineering/wp-content/uploads/sites/68/2022/02/Administration-Building.jpg"
      deanName="Dr. Mamunur Rashid"
      deanImage="https://www.ru.ac.bd/engineering/wp-content/uploads/sites/68/2026/06/Dr.-Mamunur-Rashid.jpg"
      deanProfileLink="/academic/faculties/engineering/message"
      notices={engNotices}
      events={[]}
      departments={engDepartments}
      footerColumns={[]} // Pass shared footer columns here
      deanMessage={
        <p className="mb-4">
          It’s a great time for students to pursue an engineering education at
          University of Rajshahi. Established in 2010, our Faculty has over 123
          academic staffs (including 50 Professors) and over 60 technical,
          administrative and supporting staffs. With five departments of
          studies, our Faculty offers undergraduate courses leading to Bachelor
          of Science in Engineering degree in Electrical and Electronic
          Engineering, Computer Science and Engineering, Information and
          Communication Engineering, Applied Chemistry and Chemical Engineering,
          Materials Science and Engineering.
        </p>
      }
    />
  );
}
