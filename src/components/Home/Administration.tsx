"use client";

import Image from "next/image";
import Link from "next/link";

const adminData = [
  {
    id: 1,
    name: "Dr. Md. Abdul Alim",
    title: "Pro-Vice Chancellor (Administration)",
    image: "https://www.ru.ac.bd/wp-content/uploads/2026/05/Dr.-Md.-Abdul-Alim-225x300.jpg",
    link: "https://www.ru.ac.bd/pro-vc-administration/",
  },
  {
    id: 2,
    name: "Dr. Mamunur Rashid",
    title: "Pro-Vice Chancellor (Academic)",
    image: "https://www.ru.ac.bd/wp-content/uploads/2026/06/Dr.-Mamunur-Rashid-3-243x300.jpg",
    link: "https://www.ru.ac.bd/pro-vc-academic/",
  },
  {
    id: 3,
    name: "Prof (Retd) Md. Matiar Rahman-",
    title: "Treasurer",
    image: "https://www.ru.ac.bd/wp-content/uploads/2025/07/Md.-Matiar-Rahman-247x300.png",
    link: "https://www.ru.ac.bd/treasurer/",
  },
];

export default function Administration() {
  return (
    <section className="w-full bg-gray-50 flex justify-center pb-16 animate-in fade-in duration-[2000ms]">
      
      {/* 
        CONTAINER:
        - Applied max-w-[1140px] and min-h-[400px] as per computed styles.
        - Used a 3-column CSS Grid to perfectly distribute the 33% width requirement.
      */}
      <div className="container mx-auto px-4 md:px-0 max-w-[1140px] min-h-[400px] lg:h-[522px] flex items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full h-full py-4 lg:py-0">
          
          {adminData.map((admin) => (
            /* 
              CARD STYLING:
              - Inherits the exact shadow and border-radius from the previous section.
              - h-full ensures all cards stretch to the same height.
            */
            <div 
              key={admin.id} 
              className="bg-white rounded-[30px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-8 text-center h-[500px] transition-transform hover:-translate-y-1"
            >
              
              {/* Profile Image */}
              <div className="relative mb-6">
                <Image
                  src={admin.image}
                  alt={admin.name}
                  width={200}
                  height={240}
                  className="object-cover rounded-lg shadow-sm border border-gray-100 h-[240px] w-auto"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 font-roboto">
                <Link 
                  href={admin.link}
                  className="text-blue-600 hover:text-blue-800 transition-colors text-[15px] font-medium hover:underline underline-offset-2"
                >
                  {admin.name}
                </Link>
                <p className="text-[#7A7A7A] font-bold text-[13px] uppercase tracking-wide">
                  {admin.title}
                </p>
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}