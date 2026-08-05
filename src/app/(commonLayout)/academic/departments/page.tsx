"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, Phone, User } from "lucide-react";

// The complete extracted data structure with your custom Next.js internal routes
const departmentsData = [
  {
    faculty: "Faculty of Arts",
    facultyLink: "/academic/faculties/arts",
    departments: [
      {
        name: "Philosophy",
        chairman: "Professor Nilufar Ahmed",
        phone: "02588864161",
        link: "/academic/departments/philosophy",
      },
      {
        name: "History",
        chairman: "Dr. Ferdousi Khatun",
        phone: "02588864148",
        link: "/academic/departments/history",
      },
      {
        name: "English",
        chairman: "Professor Dr. Md. Mominul Islam",
        phone: "02588864146",
        link: "/academic/departments/english",
      },
      {
        name: "Bangla",
        chairman: "Dr. M. Shahid Iqbal",
        phone: "02588864147",
        link: "/academic/departments/bangla",
      },
      {
        name: "Islamic History & Culture",
        chairman: "Dr. Mohammad Fayek Uzzaman",
        phone: "02588864149",
        link: "/academic/departments/ihc",
      },
      {
        name: "Arabic",
        chairman: "Prof. Dr. Mohammad Sabirul Islam Hawlader",
        phone: "02588864153",
        link: "/academic/departments/arabic",
      },
      {
        name: "Islamic Studies",
        chairman: "Dr. Md. Ashraf-Uz- Zaman",
        phone: "02588864154",
        link: "/academic/departments/islamicstudies",
      },
      {
        name: "Theatre",
        chairman: "Professor Dr. Mir Mehbub Alam",
        phone: "02588864145",
        link: "/academic/departments/theatre",
      },
      {
        name: "Music",
        chairman: "Shaila Tasmeen",
        phone: "02588864162",
        link: "/academic/departments/music",
      },
      {
        name: "Persian language and literature",
        chairman: "Dr. Md. Shafiullah",
        phone: "02588864306",
        link: "/academic/departments/persian",
      },
      {
        name: "Sanskrit",
        chairman: "Prof. Sheikh Md. Nuruzzaman",
        phone: "02588864331",
        link: "/academic/departments/sanskrit",
      },
      {
        name: "Urdu",
        chairman: "Prof. Dr. Muhammad Shahidul Islam",
        phone: "02588864152",
        link: "/academic/departments/urdu",
      },
    ],
  },
  {
    faculty: "Faculty of Law",
    facultyLink: "/academic/faculties/lawfaculty",
    departments: [
      {
        name: "Law",
        chairman: "Dr. Sayeeda Anju",
        phone: "02588864300",
        link: "/academic/departments/law",
      },
      {
        name: "Law and Land Administration",
        chairman: "Md. Raisul Islam",
        phone: "02588864305",
        link: "/academic/departments/lawadmin",
      },
    ],
  },
  {
    faculty: "Faculty of Science",
    facultyLink: "/academic/faculties/science",
    departments: [
      {
        name: "Mathematics",
        chairman: "Professor M. Ashabul Hoque",
        phone: "02588864108",
        link: "/academic/departments/math",
      },
      {
        name: "Physics",
        chairman: "Dr. M. Khalilur Rahman Khan",
        phone: "02588864102",
        link: "/academic/departments/physics",
      },
      {
        name: "Chemistry",
        chairman: "Prof. Choudhury Md. Zakaria",
        phone: "02588864107",
        link: "/academic/departments/chemistry",
      },
      {
        name: "Statistics",
        chairman: "Dr. Md. Rezaul Karim",
        phone: "02588864122",
        link: "/academic/departments/stat",
      },
      {
        name: "Biochemistry & Molecular Biology",
        chairman: "DR. M. Rezaul Karim",
        phone: "02588864109",
        link: "/academic/departments/biochemistry",
      },
      {
        name: "Pharmacy",
        chairman: "Dr. Md. Aziz Abdur Rahman",
        phone: "02588856540",
        link: "/academic/departments/pharmacy",
      },
      {
        name: "Population Science & Human Resource Development",
        chairman: "Dr. Tapan Kumar Roy",
        phone: "02588864121",
        link: "/academic/departments/populationsc",
      },
      {
        name: "Applied Mathematics",
        chairman: "Dr. Md. Ali Akbar",
        phone: "02588864155",
        link: "/academic/departments/appmath",
      },
      {
        name: "Physical Education and Sports Sciences",
        chairman: "Dr. Md. Salah Uddin",
        phone: "02588864329",
        link: "/academic/departments/physicaledu",
      },
    ],
  },
  {
    faculty: "Faculty of Business Studies",
    facultyLink: "/academic/faculties/business",
    departments: [
      {
        name: "Accounting and Information Systems",
        chairman: "Prof. Dil-Ara Hossain",
        phone: "02588864133",
        link: "/academic/departments/ais",
      },
      {
        name: "Management studies",
        chairman: "Prof. Dr. Shaikh Shamsul Arafin",
        phone: "0258864132",
        link: "/academic/departments/management",
      },
      {
        name: "Marketing",
        chairman: "Dr. Md. Nuruzzaman",
        phone: "02588863264",
        link: "/academic/departments/marketing",
      },
      {
        name: "Finance",
        chairman: "Dr. Md. Shibley Sadique",
        phone: "02588864134",
        link: "/academic/departments/finance",
      },
      {
        name: "Banking and Insurance",
        chairman: "Md. Tohidul Alam",
        phone: "02588864163",
        link: "/academic/departments/bankingins",
      },
      {
        name: "Tourism and Hospitality Management",
        chairman: "Dr. Mohammad Majedul Islam",
        phone: "02588864325",
        link: "/academic/departments/thm",
      },
    ],
  },
  {
    faculty: "Faculty of Social Science",
    facultyLink: "/academic/faculties/socialsc",
    departments: [
      {
        name: "Economics",
        chairman: "Prof. A.N.K.Noman",
        phone: "02588864160",
        link: "/academic/departments/economics",
      },
      {
        name: "Political Science",
        chairman: "Prof. Muhammad Mahmudur Rahman",
        phone: "02588864150",
        link: "/academic/departments/politicalsc",
      },
      {
        name: "Social Work",
        chairman: "Prof. Sheikh kabir Uddin Haider",
        phone: "02588864158",
        link: "/academic/departments/socialwork",
      },
      {
        name: "Sociology",
        chairman: "Prof. Bijoy Krishna Banik",
        phone: "02588864159",
        link: "/academic/departments/sociology",
      },
      {
        name: "Mass Communication and Journalism",
        chairman: "Dr. Md. Mozammel Hossain Bokul",
        phone: "02588864136",
        link: "/academic/departments/mcj",
      },
      {
        name: "Information Science & Library Management",
        chairman: "Dr. Md. Nazmul Islam",
        phone: "02588864137",
        link: "/academic/departments/islm",
      },
      {
        name: "Public Administration",
        chairman: "Prof. Md. Nurul Momen",
        phone: "02588864138",
        link: "/academic/departments/publicadmin",
      },
      {
        name: "Anthropology",
        chairman: "Kazi Robiul Alom",
        phone: "02588864316",
        link: "/academic/departments/anthropology",
      },
      {
        name: "Folklore",
        chairman: "Dr. Md. Jahangir Hossain",
        phone: "02588864151",
        link: "/academic/departments/folklore",
      },
      {
        name: "International Relations",
        chairman: "Dr. Md Shariful Islam",
        phone: "02588867365",
        link: "/academic/departments/interrelations",
      },
    ],
  },
  {
    faculty: "Faculty of Agriculture",
    facultyLink: "/academic/faculties/agriculture",
    departments: [
      {
        name: "Agronomy and Agricultural Extension",
        chairman: "Dr. Md. Mostafizur Rahman",
        phone: "02588864121",
        link: "/academic/departments/agronomy",
      },
      {
        name: "Crop Science and Technology",
        chairman: "Prof. Dr. Mohammad Al Baqui Barkotulla",
        phone: "02588800765",
        link: "/academic/departments/cropsc",
      },
    ],
  },
  {
    faculty: "Faculty of Engineering",
    facultyLink: "/academic/faculties/engineering",
    departments: [
      {
        name: "Applied Chemistry & Chemical Engineering",
        chairman: "Prof. M. ROSTOM ALI",
        phone: "02588864106",
        link: "/academic/departments/acce",
      },
      {
        name: "Computer Science & Engineering",
        chairman: "Subrata Pramanik",
        phone: "02588864103",
        link: "/academic/departments/cse",
      },
      {
        name: "Information & Communication Engineering",
        chairman: "Dr. Mirza A. F. M. Rashidul Hasan",
        phone: "02588864100",
        link: "/academic/departments/ice",
      },
      {
        name: "Materials Science and Engineering",
        chairman: "Prof. Md. Anwarul Kabir Bhuiya",
        phone: "711156",
        link: "/academic/departments/mse",
      },
      {
        name: "Electrical and Electronic Engineering",
        chairman: "Dr. Md. Johurul Islam",
        phone: "02588864309",
        link: "/academic/departments/eee",
      },
    ],
  },
  {
    faculty: "Faculty of Fine Arts",
    facultyLink: "/academic/faculties/finearts",
    departments: [
      {
        name: "Painting, Oriental Art & Printmaking",
        chairman: "Professor Md. Boni Adam",
        phone: "711303",
        link: "/academic/departments/poap",
      },
      {
        name: "Ceramic and Sculpture",
        chairman: "Prof. A. K. M. Ariful Islam",
        phone: "711164",
        link: "/academic/departments/ceramics",
      },
      {
        name: "Graphic Design, Crafts & History of Art",
        chairman: "Professor Dr. Mohammad Ali",
        phone: "711302",
        link: "/academic/departments/graphicdesign",
      },
    ],
  },
  {
    faculty: "Faculty of Biological Science",
    facultyLink: "/academic/faculties/biosciences",
    departments: [
      {
        name: "Psychology",
        chairman: "Dr. Mahbuba Kaniz Keya",
        phone: "02588864112",
        link: "/academic/departments/Psychology",
      },
      {
        name: "Botany",
        chairman: "Prof. Dr. Mohammad Shahidul Alam",
        phone: "02588864118",
        link: "/academic/departments/botany",
      },
      {
        name: "Zoology",
        chairman: "Prof. Dr. Md. Mahbub Hasan",
        phone: "02588864119",
        link: "/academic/departments/zoology",
      },
      {
        name: "Genetic Engineering & Biotechnology",
        chairman: "Professor Md Abu Reza",
        phone: "02588864120",
        link: "/academic/departments/geb",
      },
      {
        name: "Clinical Psychology",
        chairman: "Dr. Md. Nur-E-Alam Siddique",
        phone: "711308",
        link: "/academic/departments/clinicalpsy",
      },
      {
        name: "Microbiology",
        chairman: "Dr. Imtiaj Hasan",
        phone: "711334",
        link: "/academic/departments/microbiology",
      },
    ],
  },
  {
    faculty: "Faculty of Geoscience",
    facultyLink: "/academic/faculties/geosciences",
    departments: [
      {
        name: "Geography & Environmental Studies",
        chairman: "Prof. Dr. Shitangsu Kumar Paul",
        phone: "02588864123",
        link: "/academic/departments/geography",
      },
      {
        name: "Geology & Mining",
        chairman: "Prof. Dr. Younus Ahmed Khan",
        phone: "02588864111",
        link: "/academic/departments/geologymin",
      },
    ],
  },
  {
    faculty: "Faculty of Fisheries",
    facultyLink: "/academic/faculties/fisheries",
    departments: [
      {
        name: "Fisheries",
        chairman: "Prof Dr. A. B. M. Mohsin",
        phone: "711117",
        link: "/academic/departments/fisheries",
      },
    ],
  },
  {
    faculty: "Faculty of Veterinary & Animal Science",
    facultyLink: "/academic/faculties/fvas",
    departments: [
      {
        name: "Veterinary & Animal Sciences",
        chairman: "Professor DR. Moizur Rahman",
        phone: "02588801292",
        link: "/academic/departments/veterinarysc",
      },
    ],
  },
];

export default function DepartmentsDirectoryPage() {
  // Using state to manage which accordion is open. The first one (Arts) is open by default.
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col w-full font-roboto min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-slate-950">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://www.ru.ac.bd/wp-content/uploads/2022/02/admin-building.jpg"
          alt="Administration Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-[28px] md:text-[40px] font-bold uppercase tracking-wide drop-shadow-md">
            Departments of Rajshahi University
          </h1>
        </div>
      </section>

      {/* 2. Main Accordion Content Area */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-0 max-w-[1140px]">
          <div className="bg-white dark:bg-slate-900 border-t-[3px] border-t-[#d32f2f] dark:border-slate-700 rounded-b-[15px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.08)] p-6 md:p-10 transition-colors duration-300">
            <h2 className="text-[24px] md:text-[30px] font-bold text-[#337ab7] mb-8 text-center">
              All Departments By Faculty
            </h2>

            <div className="flex flex-col gap-4">
              {departmentsData.map((facultyBlock, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-slate-700 rounded-sm overflow-hidden shadow-sm"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full flex justify-between items-center px-6 py-4 transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#002147] text-white"
                                                : "bg-gray-100 text-[#333333] hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span className="text-[18px] md:text-[20px] font-bold">
                        {facultyBlock.faculty}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>

                    {/* Accordion Content (Table) */}
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-[2000px] opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <div className="p-4 md:p-6 bg-white dark:bg-slate-900 overflow-x-auto transition-colors duration-300">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                          <thead>
                            <tr className="bg-gray-50 dark:bg-slate-950 text-[#337ab7] dark:text-blue-300 text-[15px]">
                              <th className="py-3 px-4 border-b border-gray-200 dark:border-slate-700 font-bold w-[10%] text-center">
                                SN
                              </th>
                              <th className="py-3 px-4 border-b border-gray-200 dark:border-slate-700 font-bold w-[35%]">
                                Department
                              </th>
                              <th className="py-3 px-4 border-b border-gray-200 dark:border-slate-700 font-bold w-[35%]">
                                Chairman
                              </th>
                              <th className="py-3 px-4 border-b border-gray-200 dark:border-slate-700 font-bold w-[20%]">
                                Tel (Office)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {facultyBlock.departments.map((dept, deptIndex) => (
                              <tr
                                key={deptIndex}
                                className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50/50 dark:hover:bg-slate-800 transition-colors text-[15px] text-[#333333] dark:text-slate-200"
                              >
                                <td className="py-4 px-4 text-center font-medium text-gray-500 dark:text-slate-400">
                                  {deptIndex + 1}
                                </td>
                                <td className="py-4 px-4 font-bold text-[#002147] hover:text-[#d32f2f] transition-colors dark:text-blue-300 dark:hover:text-[#6EC1E4]">
                                  <Link href={dept.link}>{dept.name}</Link>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-gray-400 shrink-0" />
                                    <span>{dept.chairman}</span>
                                  </div>
                                </td>
                                <td className="py-4 px-4">
                                  <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400">
                                    <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                                    <span>{dept.phone || "N/A"}</span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {/* Go to Faculty Link */}
                        <div className="mt-6 flex justify-end">
                          <Link
                            href={facultyBlock.facultyLink}
                            className="inline-flex items-center gap-2 text-[14px] font-bold text-[#337ab7] hover:text-[#d32f2f] transition-colors uppercase"
                          >
                            View {facultyBlock.faculty} Page &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
