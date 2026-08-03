import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const fishNotices = [
  {
    id: 1,
    day: "01",
    month: "OCT",
    title:
      "International Fisheries Summit and Expo, 22th November 2025, Saturday (Updated Date)",
    link: "/academic/faculties/fisheries/notices/1",
  },
  {
    id: 2,
    day: "31",
    month: "JUL",
    title:
      "Seminar on “Aquaculture Future: Advancing Sustainable Enterprises in Bangladesh”...",
    link: "/academic/faculties/fisheries/notices/2",
  },
  {
    id: 3,
    day: "26",
    month: "NOV",
    title:
      "ফিশারীজ অনুষদে জানুয়ারী-জুন ২০২৪ সেশনে এম. এস. (বহিরাগত শিক্ষার্থী) ভর্তি বিজ্ঞপ্তি",
    link: "/academic/faculties/fisheries/notices/3",
  },
  {
    id: 4,
    day: "04",
    month: "MAY",
    title:
      "International Fisheries and Aquaculture Conference, 2024” will be held on 08-09th June, 2024",
    link: "/academic/faculties/fisheries/notices/4",
  },
  {
    id: 5,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "/academic/faculties/fisheries/notices/5",
  },
];

const fishDepartments = [
  { name: "Fisheries", link: "/academic/departments/fisheries" },
];

export default function FacultyOfFisheriesPage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Fisheries"
      bannerImage="https://www.ru.ac.bd/facultyfisheries/wp-content/uploads/sites/147/2022/02/Administration-Building.jpg"
      deanName="Prof. Dr. Md. Mostafizur Rahman Mondol"
      deanImage="https://www.ru.ac.bd/facultyfisheries/wp-content/uploads/sites/147/2023/12/Mostafizur-Rahman.png"
      deanProfileLink="/academic/faculties/fisheries/message"
      notices={fishNotices}
      events={[]}
      departments={fishDepartments}
      footerColumns={[]}
      deanMessage={
        <div className="flex flex-col gap-4">
          <p>
            The Faculty of Fisheries, University of Rajshahi started its
            glorious journey on December, 2020. Presently the faculty is
            comprised of one Department (Department of Fisheries) and offering
            undergraduate and postgraduate degrees. The course curricula in both
            undergraduate and postgraduate levels are updated with the current
            burning issues of the world.
          </p>
          <p>
            The faculty takes effort to produce competent and world-class
            graduates as well as to conduct need based research programs under
            collaboration with national and international organizations. The
            faculty is also very active to explore the potentials of fisheries
            sector and identifies the research and extension needs accordingly
            through organizing different information sharing events.
          </p>
          <p>
            Being a dean, I do strongly believe that the students of this
            faculty will successfully undergo in any national and international
            research & extension oriented activities with the assistance of the
            world class faculty members and sophisticated lab facilities.
          </p>
          <p>
            I personally belief that the graduates of this faculty are capable
            enough to bring prosperity of the society in terms healthy animal
            protein demand and sustainable livelihood development of the people.
          </p>
          <p>
            Finally, I would also like to express my gratitude to all sorts of
            stakeholders and wellwishers supporting us in numerous activities of
            the faculty.
          </p>
        </div>
      }
    />
  );
}
