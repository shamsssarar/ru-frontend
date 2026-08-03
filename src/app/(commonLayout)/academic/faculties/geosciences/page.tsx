import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const geoNotices = [
  {
    id: 1,
    day: "02",
    month: "OCT",
    title:
      "1st International Conference for Achieving Geosciences for Sustainable Development Goals (ICGSDG2025)",
    link: "/academic/faculties/geosciences/notices/1",
  },
  {
    id: 2,
    day: "18",
    month: "SEP",
    title:
      "জুলাই ২০২৪ – জুন ২০২৫ সেশনে এম. এস. প্রোগ্রামে বহিরাগত শিক্ষার্থী ভর্তি বিজ্ঞপ্তির সময়সীমা বৃদ্ধি",
    link: "/academic/faculties/geosciences/notices/2",
  },
  {
    id: 3,
    day: "08",
    month: "SEP",
    title:
      "জুলাই ২০২৪ – জুন ২০২৫ সেশনে এম. এস. প্রোগ্রামে বহিরাগত শিক্ষার্থী ভর্তি বিজ্ঞপ্তি, ভূ-বিজ্ঞান অনুষদ",
    link: "/academic/faculties/geosciences/notices/3",
  },
  {
    id: 4,
    day: "30",
    month: "JUL",
    title: "Date Extension : Faculty of Geo Sciences",
    link: "/academic/faculties/geosciences/notices/4",
  },
  {
    id: 5,
    day: "06",
    month: "MAY",
    title:
      "1st International Conference on Geosciences for Achieving Sustainable Development Goals (ICGSDG)",
    link: "/academic/faculties/geosciences/notices/5",
  },
];

const geoDepartments = [
  {
    name: "Geography & Environmental Studies",
    link: "/academic/departments/geography",
  },
  { name: "Geology & Mining", link: "/academic/departments/geologymin" },
];

export default function FacultyOfGeosciencesPage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Geosciences"
      bannerImage="https://www.ru.ac.bd/geosciences/wp-content/uploads/sites/145/2022/02/Administration-Building.jpg"
      deanName="Dr. Md. Abdul Alim"
      deanImage="https://www.ru.ac.bd/geosciences/wp-content/uploads/sites/145/2026/06/Dr.-Md.-Abdul-Alim.jpg"
      deanProfileLink="/academic/faculties/geosciences/message"
      notices={geoNotices}
      events={[]}
      departments={geoDepartments}
      footerColumns={[]}
      deanMessage={
        <p className="mb-4">
          The Faculty of Geosciences at the University of Rajshahi offers the
          learners to study for BSc, MS, MPhil and PhD degrees in geoscience
          discipline. The Faculty endows its students with a rich scientific
          background, aspires to challenge them, sparks their imagination, and
          cultivates their intellectual and cultural evolvement so that they can
          go on to become socially conscience, responsible professionals as
          teachers, scientists, and researchers.
        </p>
      }
    />
  );
}
