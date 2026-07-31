import InnerPageTemplate, {
  PageGridItem,
} from "@/components/layout/InnerTemplate";

// Data extracted from your Governance screenshot
const governanceData: PageGridItem[] = [
  {
    id: 1,
    title: "Academic Council",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/09/DJI_20000926100633_0114_D-01-scaled.jpeg",
    link: "/governance/academic-council", // Internal linking structure
  },
  {
    id: 2,
    title: "Senate",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/senate-opt.jpg",
    link: "/governance/senate",
  },
  {
    id: 3,
    title: "Syndicate",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/09/fc.jpg",
    link: "/governance/syndicate",
  },
  {
    id: 4,
    title: "Finance Committee",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/09/syndicate.jpg",
    link: "/governance/finance-committee",
  },
];

export default function GovernancePage() {
  return (
    <InnerPageTemplate
      pageTitle="Governance"
      bannerImage="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
      items={governanceData}
    />
  );
}
