const fs = require("fs");
const path = require("path");

// Point this to your departments directory
const baseDir = path.join(
  __dirname,
  "src/app/(commonLayout)/academic/departments",
);
const dataOutputDir = path.join(__dirname, "src/data");

const departmentsData = {};

// Find all folders that start with '(' and end with ')' - these are your faculties
const faculties = fs
  .readdirSync(baseDir)
  .filter(
    (file) =>
      file.startsWith("(") &&
      file.endsWith(")") &&
      fs.statSync(path.join(baseDir, file)).isDirectory(),
  );

faculties.forEach((facultyFolder) => {
  // Clean up the name (e.g., "(science)" becomes "Science")
  let facultyName = facultyFolder.replace(/[()]/g, "");
  // Capitalize first letter
  facultyName = facultyName.charAt(0).toUpperCase() + facultyName.slice(1);

  const facultyPath = path.join(baseDir, facultyFolder);

  // Find all department folders inside this faculty
  const departments = fs
    .readdirSync(facultyPath)
    .filter((file) => fs.statSync(path.join(facultyPath, file)).isDirectory());

  departments.forEach((deptSlug) => {
    // Clean up department name for a placeholder title
    const formattedDeptName =
      deptSlug.charAt(0).toUpperCase() + deptSlug.slice(1).replace(/-/g, " ");

    departmentsData[deptSlug] = {
      id: deptSlug,
      name: `Department of ${formattedDeptName}`,
      faculty: `Faculty of ${facultyName}`,
      chairmanName: "To Be Updated",
      chairmanTitle: "Chairman",
      chairmanImage: "/logo/ru-logo.png", // Default placeholder
      profileLink: "#",
      sliderImages: ["/slider/abg-2.jpg"],
      message: ["Welcome to the department. Information will be updated soon."],
    };
  });
});

// Ensure the src/data directory exists
if (!fs.existsSync(dataOutputDir)) {
  fs.mkdirSync(dataOutputDir, { recursive: true });
}

// Write the data to a TypeScript file
const fileContent = `export const departmentsData: Record<string, any> = ${JSON.stringify(departmentsData, null, 2)};`;

fs.writeFileSync(path.join(dataOutputDir, "departmentsData.ts"), fileContent);

console.log("✅ Successfully generated src/data/departmentsData.ts!");
