import { ReactNode } from "react";

export interface Notice {
  id: string | number;
  day: string;
  month: string;
  title: string;
  link: string;
}

export interface Event {
  id: string | number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface FacilityDetail {
  pageTitle: string;
  officialName: string;
  officialTitle: string;
  officialSubtitle: string;
  officialImage: string;
  profileLink: string;
  messageContent: ReactNode;
  events: Event[];
  notices: Notice[];
  footerEntityName: string;
}

// Reusable placeholder data for unbuilt pages
const placeholderEvents: Event[] = [];
const placeholderNotices: Notice[] = [];
const placeholderMessage = <p>Content is currently being updated.</p>;

export const facilitiesDetailsData: Record<string, FacilityDetail> = {
  "ict-center": {
    pageTitle: "Message from Director",
    officialName: "Dr. Md. Saiful Islam",
    officialTitle: "Director",
    officialSubtitle: "ICT Center, University of Rajshahi",
    officialImage: "https://www.ru.ac.bd/ictcenter/wp-content/uploads/sites/108/2024/11/Dr.-MD.-SAIFUL-ISLAM.jpg",
    profileLink: "http://rurfid.ru.ac.bd/ru_profile/public/teacher/22701624/profile",
    footerEntityName: "ICT Center",
    events: [
      {
        id: 1,
        date: "31-10-2024",
        title: "রাবি আইসিটি সেন্টারের পরিচালক নিয়োগ",
        image: "https://www.ru.ac.bd/ictcenter/wp-content/uploads/sites/108/2024/10/ict_director.jpg",
        link: "#",
      },
    ],
    notices: [
      {
        id: 1,
        day: "12",
        month: "OCT",
        title: "Tender Notice (Underground Fiber)",
        link: "https://www.ru.ac.bd/ictcenter/wp-content/uploads/sites/108/2025/10/Tender-Notice-Underground-Fiber.pdf",
      },
      {
        id: 2,
        day: "09",
        month: "OCT",
        title: "Tender Notice (Color Laser Printer and Toner)",
        link: "https://www.ru.ac.bd/ictcenter/wp-content/uploads/sites/108/2025/10/Tender-Notice-Color-Laser-Printer-and-Toner-1.pdf",
      },
    ],
    messageContent: (
      <div className="flex flex-col gap-4 text-[#333333] dark:text-slate-300">
        <p>
          The ICT Center started its journey in July 1985 as Computer Center in the First Science Building (Stayendra Nath Bose Academic Building) to accelerate research facilities in the university. In the course of time, the Center has gradually developed and extended its activities and ICT facilities to all the university members.
        </p>
        <p>
          The first Optical Fiber Network System was installed in 1999. The project was funded by the Ministry of Science and Technology, Bangladesh. After the completion of the project, the internet facility was provided in 2001. Then the length of the network was around 10 km. At present, the total length of the optical fiber is over 30 km.
        </p>
        <p>
          The ICT Center has provided internet service to all the members of the university. We use two separate bandwidth – one is from BTCL of 1866 Mbps and the other one is from BdREN of 1000 Mbps.
        </p>
        <div>
          <strong className="text-[#002147] dark:text-[#6EC1E4]">Other online services:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Webmail (G-Suite)</li>
            <li>Video conferencing system for online class and meeting (BdREN zoom, Google meet and Google classroom)</li>
            <li>Online undergraduate admission system with payment gateway</li>
            <li>Online Exam registration system</li>
            <li>Online internal admission system with payment gateway</li>
            <li>Certificate/Transcript application system with payment gateway</li>
            <li>Online application/registration services for alumni reunion, conferences/workshops, etc.</li>
            <li>Web hosting, etc.</li>
          </ul>
        </div>
        <p>
          Besides these, ICT Center has a well-equipped Virtual Classroom established by BdREN in 2015, AR/VR/MR Lab established under the Bangabandhu Hi-Tec Park project in 2018, and a modern training room inaugurated by the honorable Vice-Chancellor on 28 August 2022.
        </p>
        <p>
          We appreciate your suggestions/comments for the development of the ICT Center.
        </p>
      </div>
    ),
  },
  
  // Scaffolding for the remaining slugs
  "central-library": {
    pageTitle: "Message from Librarian",
    officialName: "Administrator Name",
    officialTitle: "Administrator",
    officialSubtitle: "Central Library",
    officialImage: "/logo/ru-logo.png",
    profileLink: "#",
    footerEntityName: "Central Library",
    events: placeholderEvents,
    notices: placeholderNotices,
    messageContent: placeholderMessage,
  },
  "transport": {
    pageTitle: "Message from Administrator",
    officialName: "Administrator Name",
    officialTitle: "Administrator",
    officialSubtitle: "Transport Office",
    officialImage: "/logo/ru-logo.png",
    profileLink: "#",
    footerEntityName: "Transport Office",
    events: placeholderEvents,
    notices: placeholderNotices,
    messageContent: placeholderMessage,
  },
  // Add the remaining 12 slugs following the exact same format...
};