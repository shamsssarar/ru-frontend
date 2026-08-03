// src/data/facultyMembers.ts

export interface FacultyMember {
  id: string; // A unique ID, could be an employee number like "20201805"
  departmentSlug: string; // This MUST match the keys in your departmentsData
  name: string;
  designation: string;
  email: string;
  phone: string;
  image: string;
  education: string;
  bio: string;
  researchInterest?: string;
}

export const facultyMembersData: FacultyMember[] = [
  {
    id: "1001",
    departmentSlug: "philosophy", // Belongs to Philosophy
    name: "Professor Dr. Md. Ariful Islam",
    designation: "Professor & Chairman",
    email: "ariful@ru.ac.bd",
    phone: "+8801700000000",
    image: "/logo/ru-logo.png", // Replace with real image path
    education: "Ph.D. in Philosophy, University of Rajshahi",
    bio: "Dr. Ariful Islam has been teaching philosophy for over 20 years with a special focus on ethics and contemporary Western philosophy.",
    researchInterest: "Ethics, Contemporary Western Philosophy",
  },
  {
    id: "1002",
    departmentSlug: "philosophy",
    name: "Dr. Shamima Akhter",
    designation: "Associate Professor",
    email: "shamima@ru.ac.bd",
    phone: "+8801700000001",
    image: "/logo/ru-logo.png",
    education: "Ph.D. in Moral Philosophy, Jahangirnagar University",
    bio: "Dr. Akhter specializes in moral philosophy and applied ethics.",
    researchInterest: "Moral Philosophy, Applied Ethics",
  },
  {
    id: "2001",
    departmentSlug: "cse", // Belongs to CSE
    name: "Subrata Pramanik",
    designation: "Professor & Chairman",
    email: "subrata.cse@ru.ac.bd",
    phone: "+8801711111111",
    image: "/logo/ru-logo.png",
    education: "M.Sc. in Computer Science",
    bio: "Specializes in Artificial Intelligence and Machine Learning.",
    researchInterest: "Artificial Intelligence, Machine Learning",
  },
];
