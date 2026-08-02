import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const agriNotices = [
  {
    id: 1,
    day: "18",
    month: "OCT",
    title: "sample page",
    link: "/academic/faculties/agriculture/notices/1",
  },
  {
    id: 2,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "/academic/faculties/agriculture/notices/2",
  },
  {
    id: 3,
    day: "27",
    month: "FEB",
    title:
      "২০২২-২০২৩ শিক্ষাবর্ষে এম. ফিল. ও পিএইচ.ডি. প্রোগ্রামে ভর্তি বিজ্ঞপ্তি",
    link: "/academic/faculties/agriculture/notices/3",
  },
];

const agriDepartments = [
  {
    name: "Agronomy and Agricultural Extension",
    link: "/academic/department/agronomy",
  },
  { name: "Crop Science and Technology", link: "/academic/department/cropsc" },
];

export default function FacultyOfAgriculturalPage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Agricultural"
      bannerImage="https://www.ru.ac.bd/agriculture/wp-content/uploads/sites/67/2022/02/Administration-Building.jpg"
      deanName="Dr. Md. Arifur Rahman"
      deanImage="https://www.ru.ac.bd/agriculture/wp-content/uploads/sites/67/2023/12/Arifur-Rahman.png"
      deanProfileLink="/academic/faculties/agriculture/message"
      notices={agriNotices}
      events={[]}
      departments={agriDepartments}
      footerColumns={[]}
      deanMessage={
        <p className="mb-4">
          Welcome to the Faculty of Agricultural. We focus on modern
          agricultural research and education to advance sustainable practices
          and crop sciences.
        </p>
      }
    />
  );
}
