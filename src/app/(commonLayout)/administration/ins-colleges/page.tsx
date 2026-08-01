import AdministrationSubPageTemplate from "@/components/layout/AdministrationSubPageTemplate";

const insCollegesNotices = [
  {
    id: 1,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "#",
  },
];

const insCollegesEvents = [
  {
    id: 1,
    date: "05-09-2024",
    title: "রাবির নবনিযুক্ত উপাচার্যের যোগদান",
    image:
      "https://www.ru.ac.bd/vc/wp-content/uploads/sites/3/2024/09/vc-sir-joining.jpg",
    link: "#",
  },
];

export default function InsCollegesPage() {
  return (
    <AdministrationSubPageTemplate
      pageTitle="Message from Inspector of Colleges"
      officialName="DR. Md. Faridul Islam"
      officialTitle="Inspector of Colleges"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901134434_0794_D-01-scaled.jpeg"
      profileLink="#"
      footerEntityName="Office of the Inspector of Colleges"
      notices={insCollegesNotices}
      events={insCollegesEvents}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            I am delighted to welcome you all to the official website of
            University of Rajshahi, Bangladesh. I hope this website will provide
            you with the necessary information regarding your academic, research
            and official queries. It is indeed an honor and privilege for me to
            serve as the Inspector of Colleges of this well known seat of learning. As
            the Inspector of Colleges of this Institution, I am proud to serve
            alongside a team of dedicated academics, researchers, and
            professionals committed to advancing knowledge and to promote a
            culture of excellence.
          </p>
        </div>
      }
    />
  );
}
