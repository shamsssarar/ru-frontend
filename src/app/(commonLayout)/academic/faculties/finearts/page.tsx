import FacultySubPageTemplate from "@/components/layout/FacultySubPageTemplate";

const fineArtsNotices = [
  {
    id: 1,
    day: "27",
    month: "MAR",
    title: "কোভিড-১৯ ভ্যাকসিন প্রদান সংক্রান্ত",
    link: "/academic/faculties/finearts/notices/1",
  },
  {
    id: 2,
    day: "27",
    month: "FEB",
    title:
      "২০২২-২০২৩ শিক্ষাবর্ষে এম. ফিল. ও পিএইচ.ডি. প্রোগ্রামে ভর্তি বিজ্ঞপ্তি",
    link: "/academic/faculties/finearts/notices/2",
  },
  {
    id: 3,
    day: "25",
    month: "FEB",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের অনুষদভুক্ত বিভাগসমূহে ২০২২-২০২৩ শিক্ষাবর্ষে এম.ফিল. ও পিএইচ.ডি. কোর্সে ভর্তি বিজ্ঞপ্তি",
    link: "/academic/faculties/finearts/notices/3",
  },
  {
    id: 4,
    day: "27",
    month: "JAN",
    title: "চিত্রাংকন ও বাংলা হস্তলিপি প্রতিযোগিতা",
    link: "/academic/faculties/finearts/notices/4",
  },
  {
    id: 5,
    day: "25",
    month: "JAN",
    title:
      "রাজশাহী বিশ্ববিদ্যালয়ের সকল বর্ষের ক্লাস ও অফিসসমূহ আগামী ২২ ফেব্রুয়ারি...",
    link: "/academic/faculties/finearts/notices/5",
  },
];

const fineArtsDepartments = [
  {
    name: "Painting, Oriental Art & Printmaking",
    link: "/academic/department/poap",
  },
  { name: "Ceramic and Sculpture", link: "/academic/department/ceramics" },
  {
    name: "Graphic Design, Craft & History of Arts",
    link: "/academic/department/graphicdesign",
  },
];

export default function FacultyOfFineArtsPage() {
  return (
    <FacultySubPageTemplate
      facultyName="Faculty of Fine Arts"
      bannerImage="https://www.ru.ac.bd/finearts/wp-content/uploads/sites/15/2022/02/Administration-Building.jpg"
      deanName="Professor Dr. Mohammad Ali"
      deanImage="https://www.ru.ac.bd/finearts/wp-content/uploads/sites/15/2026/07/Professor-Dr.-Mohammad-Ali-266x300.jpg"
      deanProfileLink="/academic/faculties/finearts/message"
      notices={fineArtsNotices}
      events={[]}
      departments={fineArtsDepartments}
      footerColumns={[]}
      deanMessage={
        <div className="flex flex-col gap-4">
          <p>Welcome to the Faculty of Fine Arts, University of Rajshahi.</p>
          <p>
            It is my pleasure to welcome you to the Faculty of Fine Arts, one of
            the youngest and most vibrant faculties at the University of
            Rajshahi. Established as an independent faculty in 2015, the Faculty
            is committed to excellence in art education, research, creative
            practice, and cultural heritage. It comprises three academic
            departments: Graphic Design, Crafts and History of Art; Painting,
            Oriental Art and Printmaking; and Ceramics and Sculpture.
          </p>
          <p>
            Our undergraduate and postgraduate programs integrate traditional
            artistic knowledge with contemporary design, digital technologies,
            and interdisciplinary research. We aim to develop creative, ethical,
            and professionally competent graduates capable of contributing to
            the national and global creative industries.
          </p>
          <p>
            Our faculty members are dedicated educators, researchers, and
            practicing artists who actively engage in exhibitions, research,
            publications, conferences, workshops, and collaborative projects. We
            foster an academic environment that encourages innovation, critical
            thinking, entrepreneurship, and lifelong learning while inspiring
            students to participate in research, creative practice, and
            community engagement.
          </p>
          <p>
            As Dean, I am committed to strengthening an inclusive and
            research-oriented academic environment where creativity and
            excellence thrive. I warmly invite students, artists, researchers,
            alumni, and collaborators to join us in advancing the Faculty’s
            vision and contributing to the growth of art, design, and cultural
            heritage.
          </p>
          <p>
            I wish you every success in your academic, professional, and
            creative journey.
          </p>
        </div>
      }
    />
  );
}
