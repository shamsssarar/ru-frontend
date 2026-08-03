import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const bioNotices = [
  {
    id: 1,
    day: "19",
    month: "MAY",
    title:
      "২০২৪-২০২৫ শিক্ষাবর্ষের এম. এস. ভর্তি বিজ্ঞপ্তি, জীববিজ্ঞান অনুষদ (সংশোধিত বিজ্ঞপ্তি)",
    link: "/academic/faculties/biosciences/notices/1",
  },
  {
    id: 2,
    day: "18",
    month: "MAY",
    title: "২০২৪-২০২৫ শিক্ষাবর্ষের এম. এস. ভর্তি বিজ্ঞপ্তি, জীববিজ্ঞান অনুষদ",
    link: "/academic/faculties/biosciences/notices/2",
  },
  {
    id: 3,
    day: "01",
    month: "SEP",
    title: "2023-2024 শিক্ষাবর্ষের এম. এস ভর্তি বিজ্ঞপ্তি, জীববিজ্ঞান অনুষদ",
    link: "/academic/faculties/biosciences/notices/3",
  },
  {
    id: 4,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "/academic/faculties/biosciences/notices/4",
  },
  {
    id: 5,
    day: "27",
    month: "FEB",
    title:
      "২০২২-২০২৩ শিক্ষাবর্ষে এম. ফিল. ও পিএইচ.ডি. প্রোগ্রামে ভর্তি বিজ্ঞপ্তি",
    link: "/academic/faculties/biosciences/notices/5",
  },
];

const bioDepartments = [
  { name: "Psychology", link: "/academic/departments/psychology" },
  { name: "Botany", link: "/academic/departments/botany" },
  { name: "Zoology", link: "/academic/departments/zoology" },
  {
    name: "Genetic Engineering & Biotechnology",
    link: "/academic/departments/geb",
  },
  { name: "Clinical Psychology", link: "/academic/departments/clinicalpsy" },
  { name: "Microbiology", link: "/academic/departments/microbiology" },
];

export default function FacultyOfBiologicalSciencesPage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Biological Sciences"
      bannerImage="https://www.ru.ac.bd/lifeearth/wp-content/uploads/sites/66/2022/02/Administration-Building.jpg"
      deanName="Prof. M. Golam Mortuza"
      deanImage="https://www.ru.ac.bd/lifeearth/wp-content/uploads/sites/66/2023/12/Golam-Mortuza.jpg"
      deanProfileLink="/academic/faculties/biosciences/message"
      notices={bioNotices}
      events={[]}
      departments={bioDepartments}
      footerColumns={[]}
      deanMessage={
        <p className="mb-4">
          The Faculty of Biological Sciences at the University of Rajshahi
          offers the learners to study for BSc, MS, MPhil and PhD degrees in
          biological disciplines. The Faculty endows its students with a rich
          scientific background, aspires to challenge them, sparks their
          imagination, and cultivates their intellectual and cultural evolvement
          so that they can go on to become socially conscience, responsible
          professionals as teachers, scientists, and researchers.
        </p>
      }
    />
  );
}
