import InnerPageTemplate, {
  PageGridItem,
} from "@/components/layout/InnerTemplate";

const administrationData: PageGridItem[] = [
  {
    id: 1,
    title: "Vice-Chancellor",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901132417_0763_D-01-scaled.jpeg",
    link: "/administration/vc",
  },
  {
    id: 2,
    title: "Pro Vice-Chancellor (Administration)",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901131947_0755_D-02-scaled.jpeg",
    link: "/administration/pro-vc-administration",
  },
  {
    id: 3,
    title: "Pro Vice-Chancellor (Academic)",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901132100_0758_D-02.jpeg",
    link: "/administration/pro-vc-academic",
  },
  {
    id: 4,
    title: "Treasurer",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901132204_0762_D-01-scaled.jpeg",
    link: "/administration/treasurer",
  },
  {
    id: 5,
    title: "Registrar",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901131527_0747_D-01-scaled.jpeg",
    link: "/administration/registrar",
  },
  {
    id: 6,
    title: "Inspector of Colleges",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901134434_0794_D-01-scaled.jpeg",
    link: "/administration/ins-colleges",
  },
  {
    id: 7,
    title: "Proctor",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901124000_0719_D-01-scaled.jpeg",
    link: "/administration/proctor",
  },
  {
    id: 8,
    title: "Student Adviser",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901130704_0733_D-01-scaled.jpeg",
    link: "/administration/stud-adviser",
  },
  {
    id: 9,
    title: "Public Relations",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901123413_0714_D-01-scaled.jpeg",
    link: "/administration/publicrelation",
  },
  {
    id: 10,
    title: "Archives",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901123513_0716_D-01-scaled.jpeg",
    link: "/administration/archives",
  },
  {
    id: 11,
    title: "Exam Controller",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901132741_0771_D-01-scaled.jpeg",
    link: "/administration/examcont",
  },
  {
    id: 12,
    title: "RUCSU",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000830151717_0518_D-01-scaled.jpeg",
    link: "/administration/rucsu",
  },
  {
    id: 13,
    title: "Other Offices",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/others_01.jpg",
    link: "/administration/other-offices",
  },
];

export default function AdministrationPage() {
  return (
    <InnerPageTemplate
      pageTitle="Administration"
      bannerImage="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
      items={administrationData}
    />
  );
}
