import InnerPageTemplate, {
  PageGridItem,
} from "@/components/layout/InnerTemplate";

const facilitiesData: PageGridItem[] = [
  {
    id: 1,
    title: "ICT Center",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/07/DJI_20250629160327_0419_D-01-scaled.jpeg",
    link: "/facilities/ict-center",
  },
  {
    id: 2,
    title: "Central Library",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/library-scaled.jpg",
    link: "/facilities/central-library",
  },
  {
    id: 3,
    title: "Transport",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000830152419_0523_D-01-scaled.jpeg",
    link: "/facilities/transport",
  },
  {
    id: 4,
    title: "Alumni",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/Alumni.png",
    link: "/facilities/alumni",
  },
  {
    id: 5,
    title: "Science Workshop",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000830150658_0514_D-01.jpeg",
    link: "/facilities/science-workshop",
  },
  {
    id: 6,
    title: "Mental Health Center",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000830152632_0526_D-01-scaled.jpeg",
    link: "/facilities/mental-health-center",
  },
  {
    id: 7,
    title: "Different Associations",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/Associations-2.jpg",
    link: "/facilities/different-associations",
  },
  {
    id: 8,
    title: "TSCC",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20250811184308_0479_D-01-scaled.jpeg",
    link: "/facilities/tscc",
  },
  {
    id: 9,
    title: "Medical Center",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000830144040_0502_D-01-scaled.jpeg",
    link: "/facilities/medical-center",
  },
  {
    id: 10,
    title: "Residence Halls",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/rsnnce-hall.png",
    link: "/facilities/residence-halls",
  },
  {
    id: 11,
    title: "Varendra Research Museum",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/Screenshot-2025-08-24-140517.png",
    link: "/facilities/varendra-research-museum",
  },
  {
    id: 12,
    title: "Central Science Lab",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000905134539_0957_D-01-scaled.jpeg",
    link: "/facilities/central-science-lab",
  },
  {
    id: 13,
    title: "Career Counselling Center",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/ccdc_01-scaled.jpeg",
    link: "/facilities/career-counselling-center",
  },
  {
    id: 14,
    title: "Dhaka Guest House",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/09/Screenshot-2025-09-09-150639.png",
    link: "/facilities/dhaka-guest-house",
  },
  {
    id: 15,
    title: "Physical Education",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/11/1953-scaled.png",
    link: "/facilities/physical-education",
  },
];

export default function FacilitiesPage() {
  return (
    <InnerPageTemplate
      pageTitle="Facilities"
      bannerImage="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
      items={facilitiesData}
    />
  );
}
