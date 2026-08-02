import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const vetNotices = [
  {
    id: 1,
    day: "28",
    month: "DEC",
    title: "Veterinary clinics at RU",
    link: "/academic/faculties/fvas/notices/1",
  },
  {
    id: 2,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "/academic/faculties/fvas/notices/2",
  },
  {
    id: 3,
    day: "14",
    month: "FEB",
    title: "KGF Project",
    link: "/academic/faculties/fvas/notices/3",
  },
  {
    id: 4,
    day: "06",
    month: "FEB",
    title: "AI news",
    link: "/academic/faculties/fvas/notices/4",
  },
  {
    id: 5,
    day: "25",
    month: "JAN",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের সকল বর্ষের ক্লাস ও অফিসসমূহ আগামী ২২ ফেব্রুয়ারি...",
    link: "/academic/faculties/fvas/notices/5",
  },
];

const vetEvents = [
  {
    id: 1,
    date: "27-04-2022",
    title: "রাবি বাসে প্রতিবন্ধী আসন সংরক্ষণ কার্যক্রমের উদ্বোধন",
    image:
      "https://www.ru.ac.bd/fvas/wp-content/uploads/sites/146/2022/02/RU-Pic-22022022.jpg",
    link: "/academic/faculties/fvas/events/1",
  },
  {
    id: 2,
    date: "25-03-2022",
    title: "রাবিতে পালিত হচ্ছে শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস",
    image:
      "https://www.ru.ac.bd/fvas/wp-content/uploads/sites/146/2022/02/RU-Pic1-21022022.jpg",
    link: "/academic/faculties/fvas/events/2",
  },
  {
    id: 3,
    date: "19-02-2022",
    title: "রাবি সায়েন্স ক্লাবের গ্রন্থ কুটির উদ্বোধন",
    image:
      "https://www.ru.ac.bd/fvas/wp-content/uploads/sites/146/2022/02/RU-Pic-20022022.jpg",
    link: "/academic/faculties/fvas/events/3",
  },
];

const vetDepartments = [
  {
    name: "Veterinary & Animal Sciences",
    link: "/academic/department/veterinarysc",
  },
];

export default function FacultyOfVeterinaryPage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Veterinary & Animal Sciences"
      bannerImage="https://www.ru.ac.bd/fvas/wp-content/uploads/sites/146/2022/02/Administration-Building.jpg"
      deanName="Prof. K. M. Mozaffor Hossain"
      deanImage="https://www.ru.ac.bd/fvas/wp-content/uploads/sites/146/2023/12/Mozaffor-Hossain.png"
      deanProfileLink="/academic/faculties/fvas/message"
      notices={vetNotices}
      events={vetEvents}
      departments={vetDepartments}
      footerColumns={[]}
      deanMessage={
        <p className="mb-4">
          The Faculty of Veterinary and Animal Sciences is one of twelve in
          Rajshahi University (RU). This faculty began from 12th December 2020.
          Professor Dr. Chowdhury M Zakaria Pro-Vice Chancellor was in-charge as
          a Dean. Professor Dr. Md. Jalal Uddin Sarder is first elected dean of
          this faculty. The faculty is situated at Krishi Unoshod Bhavon and
          consist of one department including a Teaching Veterinary Clinic, run
          mainly by the clinical departments to impart practical training in the
          diagnosis of Dairy, poultry, companion, zoo and wild animal diseases,
          surgical interventions, clinical management and treatment, animal
          health care and welfare.
        </p>
      }
    />
  );
}
