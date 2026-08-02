import InnerPageTemplate, {
  PageGridItem,
} from "@/components/layout/InnerTemplate";

const facultiesData: PageGridItem[] = [
  {
    id: 1,
    title: "Faculty of Arts",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000826103535_0206_D-01-scaled.jpeg",
    link: "/academic/faculties/arts",
  },
  {
    id: 2,
    title: "Faculty of Law",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000826104055_0213_D-01-scaled.jpeg",
    link: "/academic/faculties/lawfaculty",
  },
  {
    id: 3,
    title: "Faculty of Science",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000902111745_0874_D-01.jpeg",
    link: "/academic/faculties/science",
  },
  {
    id: 4,
    title: "Faculty of Business Studies",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000826103735_0209_D-01-scaled.jpeg",
    link: "/academic/faculties/business",
  },
  {
    id: 5,
    title: "Faculty of Social Science",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000826103636_0207_D-01-scaled.jpeg",
    link: "/academic/faculties/socialsc",
  },
  {
    id: 6,
    title: "Faculty of Agricultural",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000831100620_0558_D-01.jpeg",
    link: "/academic/faculties/agriculture",
  },
  {
    id: 7,
    title: "Faculty of Engineering",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/fac_ing_02.jpg",
    link: "/academic/faculties/engineering",
  },
  {
    id: 8,
    title: "Faculty of Fine Arts",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/07/IMG_7267-01-scaled.jpeg",
    link: "/academic/faculties/finearts",
  },
  {
    id: 9,
    title: "Faculty of Biological Sciences",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/07/IMG_6952-01-scaled.jpeg",
    link: "/academic/faculties/biosciences",
  },
  {
    id: 10,
    title: "Faculty of Geosciences",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/IMG_8729-01.jpeg",
    link: "/academic/faculties/geosciences",
  },
  {
    id: 11,
    title: "Faculty of Fisheries",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000831112952_0604_D-01-scaled.jpeg",
    link: "/academic/faculties/fisheries",
  },
  {
    id: 12,
    title: "Faculty of Veterinary & Animal Sciences",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000831112708_0602_D-01-scaled.jpeg",
    link: "/academic/faculties/fvas",
  },
];

export default function FacultiesPage() {
  return (
    <InnerPageTemplate
      pageTitle="All Faculties of RU"
      bannerImage="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
      items={facultiesData}
    />
  );
}
