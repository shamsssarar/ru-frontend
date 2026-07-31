import InnerPageTemplate, {
  PageGridItem,
} from "@/components/layout/InnerTemplate";

const publicationsData: PageGridItem[] = [
  {
    id: 1,
    title: "Publications Office",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000905130020_0941_D-01-scaled.jpeg",
    link: "/publications/office",
  },
  {
    id: 2,
    title: "Annual Reports",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/Annual-Reports.jpg",
    link: "/publications/annual-reports",
  },
  {
    id: 3,
    title: "RU Journals",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/Journal.jpg",
    link: "/publications/journals",
  },
  {
    id: 4,
    title: "RU Journals Call for Papers",
    image: "https://www.ru.ac.bd/wp-content/uploads/2024/08/Main-Gate_RU.jpg",
    link: "/publications/call-for-papers",
  },
];

export default function PublicationsPage() {
  return (
    <InnerPageTemplate
      pageTitle="Publications"
      bannerImage="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
      items={publicationsData}
    />
  );
}
