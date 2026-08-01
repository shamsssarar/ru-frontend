import AdministrationSubPageTemplate from "@/components/layout/AdministrationSubPageTemplate";

const vcNotices = [
  {
    id: 1,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "#",
  },
  {
    id: 2,
    day: "27",
    month: "FEB",
    title:
      "২০২২-২০২৩ শিক্ষাবর্ষে এম. ফিল. ও পিএইচ.ডি. প্রোগ্রামে ভর্তি বিজ্ঞপ্তি, পরিবেশ বিজ্ঞান ইনস্টিটিউট",
    link: "#",
  },
  {
    id: 3,
    day: "25",
    month: "FEB",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের অনুষদভুক্ত বিভাগসমূহে ২০২২-২০২৩ শিক্ষাবর্ষে এম.ফিল. ও পিএইচ.ডি. কোর্সে ভর্তি বিজ্ঞপ্তি",
    link: "#",
  },
];

const vcEvents = [
  {
    id: 1,
    date: "05-09-2024",
    title: "রাবির নবনিযুক্ত উপাচার্যের যোগদান",
    image:
      "https://www.ru.ac.bd/vc/wp-content/uploads/sites/3/2024/09/vc-sir-joining.jpg",
    link: "#",
  },
];

export default function VCPage() {
  return (
    <AdministrationSubPageTemplate
      pageTitle="Message from Vice-Chancellor"
      officialName="DR. Md. Faridul Islam"
      officialTitle="Vice-Chancellor"
      officialSubtitle="University of Rajshahi"
      officialImage="https://www.ru.ac.bd/vc/wp-content/uploads/sites/3/2026/03/IMG-20260321-WA0003.jpg"
      profileLink="#"
      footerEntityName="Office of the Vice-Chancellor"
      notices={vcNotices}
      events={vcEvents}
      messageContent={
        <div className="flex flex-col gap-4">
          <p>
            I am delighted to welcome you all to the official website of
            University of Rajshahi, Bangladesh. I hope this website will provide
            you with the necessary information regarding your academic, research
            and official queries. It is indeed an honor and privilege for me to
            serve as the Vice Chancellor of this well known seat of learning. As
            the Vice Chancellor of this Institution, I am proud to serve
            alongside a team of dedicated academics, researchers, and
            professionals committed to advancing knowledge and to promote a
            culture of excellence.
          </p>
          <p>
            University of Rajshahi is one of the largest Universities in
            Bangladesh. Since its foundation on July 6, 1953, the university has
            passed 62 years of providing higher education and research. The
            university is located at the green premises of Motihar which is very
            close to the mighty river Padma, and seven kilometer east from the
            bustling Rajshahi City Center.
          </p>
          <p>
            In the globalized world that we live today and the emergence of
            knowledge-based society, the role of higher education is of
            paramount importance for the development of the human resources.
            University of Rajshahi is fully committed to achieve this goal. We
            are also committed to produce graduates, experts, and researchers of
            international standard ready to take up national and international
            responsibilities in all the fields of knowledge, with commendable
            moral and ethical qualities.
          </p>
          <p>
            We are living in an interesting time, full of possibilities. The
            country is currently at a crossroad. The July 2024 uprising has
            presented us with unique opportunities where we can make real and
            meaningful progress in all the sectors. The country requires highly
            qualified human resource with a mind set in favor of democratic
            values, justice, and fairness in every societal and national
            activity. Rajshahi University is duty bound to do its best to make
            this country better for all and to uphold the spirit of the July
            2024 movement by assisting the students to become the best they can
            be via academic, co-curricular, and extra-curricular activities of
            high class.
          </p>
          <p>I hope your journey with us will be highly rewarding.</p>
          <div className="mt-6">
            <strong>
              <span className="text-[18px]">Dr. Md. Faridul Islam</span>
            </strong>
            <br />
            <span className="text-[18px]">Vice-Chancellor</span>
            <br />
            <span className="text-[18px]">University of Rajshahi</span>
          </div>
        </div>
      }
    />
  );
}
