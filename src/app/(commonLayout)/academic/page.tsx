import InnerPageTemplate, {
  PageGridItem,
} from "@/components/layout/InnerTemplate";

const academicData: PageGridItem[] = [
  {
    id: 1,
    title: "Faculties",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-25-at-12.11.16-PM-1.jpeg",
    link: "/academic/faculties",
  },
  {
    id: 2,
    title: "Institutes",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-25-at-12.13.21-PM-1.jpeg",
    link: "/academic/institutes",
  },
  {
    id: 3,
    title: "Departments",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-25-at-12.18.22-PM-1.jpeg",
    link: "/academic/department",
  },
  {
    id: 4,
    title: "Schools",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-25-at-12.25.20-PM.jpeg",
    link: "/academic/schools",
  },
  {
    id: 5,
    title: "Affiliated Colleges & Institutions",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/colleges.jpg",
    link: "/academic/affiliated-colleges-institutions",
  },
  {
    id: 6,
    title: "Office of The International Affairs",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/International-Affairs-1.jpg",
    link: "/academic/oia",
  },
];

export default function AcademicPage() {
  return (
    <InnerPageTemplate
      pageTitle="Academic"
      bannerImage="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
      items={academicData}
    />
  );
}
