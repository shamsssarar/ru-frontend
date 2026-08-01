import AdministrationSubPageTemplate from "@/components/layout/AdministrationSubPageTemplate";

const proVcAcademicNotices = [
  {
    id: 1,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "#",
  },
];

const proVcAcademicEvents = [
  {
    id: 1,
    date: "05-09-2024",
    title: "রাবির নবনিযুক্ত উপাচার্যের যোগদান",
    image:
      "https://www.ru.ac.bd/vc/wp-content/uploads/sites/3/2024/09/vc-sir-joining.jpg",
    link: "#",
  },
];

export default function ProVcAcademicPage() {
  return (
    <AdministrationSubPageTemplate
      pageTitle="Message from Pro Vice-Chancellor (Academic)"
      officialName="DR. Md. Faridul Islam"
      officialTitle="Pro Vice-Chancellor (Academic)"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/wp-content/uploads/2025/08/DJI_20000901132100_0758_D-02.jpeg"
      profileLink="#"
      footerEntityName="Office of the Pro Vice-Chancellor (Academic)"
      notices={proVcAcademicNotices}
      events={proVcAcademicEvents}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            I am delighted to welcome you all to the official website of
            University of Rajshahi, Bangladesh. I hope this website will provide
            you with the necessary information regarding your academic, research
            and official queries. It is indeed an honor and privilege for me to
            serve as the Pro Vice-Chancellor (Academic) of this well known seat of learning. As
            the Pro Vice-Chancellor (Academic) of this Institution, I am proud to serve
            alongside a team of dedicated academics, researchers, and
            professionals committed to advancing knowledge and to promote a
            culture of excellence.
          </p>
        </div>
      }
    />
  );
}
