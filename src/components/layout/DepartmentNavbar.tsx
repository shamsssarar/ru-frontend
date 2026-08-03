import Link from "next/link";

export default function DepartmentNavbar({ deptSlug }: { deptSlug: string }) {
  // Define the department-specific routes
  const departmentLinks = [
    { title: "HOME", href: `/academic/departments/${deptSlug}` },
    {
      title: "FACULTY MEMBERS",
      href: `/academic/departments/${deptSlug}/members`,
    },
    { title: "ALUMNI", href: `/academic/departments/${deptSlug}/alumni` },
    { title: "EVENTS", href: `/academic/departments/${deptSlug}/events` },
    { title: "CONTACT", href: `/academic/departments/${deptSlug}/contact` },
  ];

  return (
    <div className="w-full bg-[#002147] shadow-md z-10 relative">
      <div className="container mx-auto max-w-[1140px] px-4 md:px-0">
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3 md:py-4">
          {departmentLinks.map((link, index) => (
            <div key={link.title} className="flex items-center">
              <Link
                href={link.href}
                className="text-[12px] md:text-[14px] font-roboto font-semibold text-white hover:text-[#6EC1E4] uppercase tracking-wider transition-colors"
              >
                {link.title}
              </Link>
              {/* Add the vertical divider '|' except for the last item */}
              {index < departmentLinks.length - 1 && (
                <span className="text-white/50 ml-4 hidden md:inline-block">
                  |
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
