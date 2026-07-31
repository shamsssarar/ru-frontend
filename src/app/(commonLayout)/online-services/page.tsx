import InnerPageTemplate, {
  PageGridItem,
} from "@/components/layout/InnerTemplate";

const onlineServicesData: PageGridItem[] = [
  {
    id: 1,
    title: "Webmail",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/Untitledff.jpg",
    link: "/online-services/webmail",
  },
  {
    id: 2,
    title: "Information Update",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/dasdf.jpg",
    link: "/online-services/information-update",
  },
  {
    id: 3,
    title: "Annual Reporting System",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/annual-report.jpg",
    link: "/online-services/annual-reporting",
  },
  {
    id: 4,
    title: "Application for Certificate & Transcript",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/Untitlegd.jpg",
    link: "/online-services/certificate-application",
  },
  {
    id: 5,
    title: "Form Fill-up System for Students",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/Untitled.jpg",
    link: "/online-services/form-fillup",
  },
  {
    id: 6,
    title: "Exam Form Fill-up (From Session 2022-2023)",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/12/exam-form.jpg",
    link: "/online-services/exam-form",
  },
  {
    id: 7,
    title:
      "Internet Registration/Cancellation for Residence (Teacher/Officer/MPhil/PhD/International Student)",
    image:
      "https://www.ru.ac.bd/wp-content/uploads/2025/08/Untithhjnjnnled.jpg",
    link: "/online-services/residence-internet",
  },
  {
    id: 8,
    title: "Student Feedback System",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/Untitdled.jpg",
    link: "/online-services/student-feedback",
  },
  {
    id: 9,
    title: "Registration Form Download System",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/U3ntitled.jpg",
    link: "/online-services/registration-form",
  },
  {
    id: 10,
    title: "Hall Residency Application",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/11/1953-scaled.png",
    link: "/online-services/hall-residency",
  },
  {
    id: 11,
    title: "Medical Center",
    image: "https://www.ru.ac.bd/wp-content/uploads/2026/02/mdbutton3.jpg",
    link: "/online-services/medical-center",
  },
  {
    id: 12,
    title: "Guest House Booking",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/08/Untitjhjjjled.jpg",
    link: "/online-services/guest-house-booking",
  },
];

export default function OnlineServicesPage() {
  return (
    <InnerPageTemplate
      pageTitle="RU Online Services"
      bannerImage="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
      items={onlineServicesData}
    />
  );
}
