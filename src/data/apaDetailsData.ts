export interface ApaAccordion {
  title: string;
  pdfUrl: string;
}

export interface ApaDetail {
  titleEn: string;
  titleBn: string;
  accordions: ApaAccordion[];
}

// Reusable placeholder PDF as requested
const PLACEHOLDER_PDF =
  "https://www.ru.ac.bd/wp-content/uploads/2022/09/Audit-Cir.-Web-pub..pdf";

export const apaDetailsData: Record<string, ApaDetail> = {
  // 1. জাতীয় শুদ্ধাচার কৌশল (National Integrity Strategy)
  "purification-strategy-action-plan": {
    titleEn: "Purification strategy action plan",
    titleBn: "শুদ্ধাচার কৌশল কর্মপরিকল্পনা",
    accordions: [
      { title: "শুদ্ধাচার কৌশল কর্মপরিকল্পনা ১", pdfUrl: PLACEHOLDER_PDF },
    ],
  },
  "focal-point-officer-and-substitute-officer": {
    titleEn: "Focal point officer and substitute officer",
    titleBn: "ফোকাল পয়েন্ট কর্মকর্তা ও বিকল্প কর্মকর্তা",
    accordions: [
      {
        title: "ফোকাল পয়েন্ট কর্মকর্তা ও বিকল্প কর্মকর্তা ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },
  "quarterly-six-monthly-monitoring-evaluation-reports": {
    titleEn: "Quarterly/six-monthly monitoring evaluation reports",
    titleBn: "ত্রৈমাসিক/ষান্মাসিক মূল্যায়ন প্রতিবেদন",
    accordions: [
      {
        title: "ত্রৈমাসিক/ষান্মাসিক মূল্যায়ন প্রতিবেদন ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },
  "notifications-circulars-policies": {
    titleEn: "Notifications, circulars, policies",
    titleBn: "প্রজ্ঞাপন/পরিপত্র/নীতিমালা",
    accordions: [
      { title: "প্রজ্ঞাপন/পরিপত্র/নীতিমালা ১", pdfUrl: PLACEHOLDER_PDF },
    ],
  },
  "purity-award": {
    titleEn: "Purity award",
    titleBn: "শুদ্ধাচার পুরস্কার",
    accordions: [{ title: "শুদ্ধাচার পুরস্কার ১", pdfUrl: PLACEHOLDER_PDF }],
  },
  "ethics-committee": {
    titleEn: "Ethics committee",
    titleBn: "নৈতিকতা কমিটি",
    accordions: [{ title: "নৈতিকতা কমিটি ১", pdfUrl: PLACEHOLDER_PDF }],
  },

  // 2. বার্ষিক কর্মসম্পাদন চুক্তি (Annual Performance Agreement)
  "apa-guidelines-circulars-apa-team": {
    titleEn: "APA guidelines, circulars, APA team",
    titleBn: "এপিএ নির্দেশিকা/পরিপত্র/এপিএ টিম",
    accordions: [
      { title: "এপিএ নির্দেশিকা/পরিপত্র/এপিএ টিম ১", pdfUrl: PLACEHOLDER_PDF },
    ],
  },
  "annual-performance-contracts": {
    titleEn: "Annual performance contracts",
    titleBn: "বার্ষিক কর্মসম্পাদন চুক্তিসমূহ",
    accordions: [
      { title: "বার্ষিক কর্মসম্পাদন চুক্তিসমূহ ১", pdfUrl: PLACEHOLDER_PDF },
    ],
  },
  "office-order-inspection-and-evaluation-report": {
    titleEn: "Office order, inspection and evaluation report",
    titleBn: "অফিস আদেশ/পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
    accordions: [
      {
        title: "অফিস আদেশ/পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },
  "apa-ms-software-links": {
    titleEn: "APA MS software links",
    titleBn: "এপিএ এমএস সফটওয়্যার লিংক",
    accordions: [
      { title: "এপিএ এমএস সফটওয়্যার লিংক ১", pdfUrl: PLACEHOLDER_PDF },
    ],
  },

  // 3. উদ্ভাবনী কার্যক্রম (Innovation Activities)
  "innovation-team": {
    titleEn: "Innovation team",
    titleBn: "ইনোভেশন টীম",
    accordions: [{ title: "ইনোভেশন টীম ১", pdfUrl: PLACEHOLDER_PDF }],
  },
  "notifications-policies-office-orders": {
    titleEn: "Notifications, policies, office orders",
    titleBn: "প্রজ্ঞাপন/নীতিমালা/অফিস আদেশ",
    accordions: [
      { title: "প্রজ্ঞাপন/নীতিমালা/অফিস আদেশ ১", pdfUrl: PLACEHOLDER_PDF },
    ],
  },
  "annual-innovation-action-plan-action-statement": {
    titleEn: "Annual innovation action plan & action statement",
    titleBn: "বার্ষিক উদ্ভাবনী কর্মপরিকল্পনা/কার্যবিবরণী",
    accordions: [
      {
        title: "বার্ষিক উদ্ভাবনী কর্মপরিকল্পনা/কার্যবিবরণী ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },
  "best-innovative-concept-implementation-and-showcase": {
    titleEn: "Best innovative concept, implementation and showcase",
    titleBn: "শ্রেষ্ঠ উদ্ভাবনী ধারণা/বাস্তবায়ন ও শোকেসিং",
    accordions: [
      {
        title: "শ্রেষ্ঠ উদ্ভাবনী ধারণা/বাস্তবায়ন ও শোকেসিং ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },

  // 4. অভিযোগ প্রতিকার ব্যবস্থাপনা (Grievance Redress System)
  "grievance-redressal-officer-appeal-officer": {
    titleEn: "Grievance redressal officer & appeal officer",
    titleBn: "অনিক ও আপিল কর্মকর্তা",
    accordions: [{ title: "অনিক ও আপিল কর্মকর্তা ১", pdfUrl: PLACEHOLDER_PDF }],
  },
  "monthly-quarterly-annual-evaluation-report": {
    titleEn: "Monthly, quarterly, annual evaluation report",
    titleBn: "মাসিক/ত্রৈমাসিক/বার্ষিক মূল্যায়ন প্রতিবেদন",
    accordions: [
      {
        title: "মাসিক/ত্রৈমাসিক/বার্ষিক মূল্যায়ন প্রতিবেদন ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },
  "complaint-submission-online-direct": {
    titleEn: "Complaint submission (online/direct)",
    titleBn: "অভিযোগ দাখিল (অনলাইন/সরাসরি)",
    accordions: [
      { title: "অভিযোগ দাখিল (অনলাইন/সরাসরি) ১", pdfUrl: PLACEHOLDER_PDF },
    ],
  },
  "laws-rules-regulations-policies-guidelines": {
    titleEn: "Laws, rules, regulations, policies, guidelines",
    titleBn: "আইন/বিধি/পরি-পত্র/নীতিমালা/নির্দেশিকা",
    accordions: [
      {
        title: "আইন/বিধি/পরি-পত্র/নীতিমালা/নির্দেশিকা ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },

  // 5. তথ্য অধিকার (Right to Information)
  "responsible-officer-and-appellate-authority": {
    titleEn: "Responsible officer and appellate authority",
    titleBn: "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপিল কর্তৃপক্ষ",
    accordions: [
      {
        title: "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপিল কর্তৃপক্ষ ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },
  "application-and-appeal-form": {
    titleEn: "Application and appeal form",
    titleBn: "আবেদন ও আপিল ফরম",
    accordions: [{ title: "আবেদন ও আপিল ফরম ১", pdfUrl: PLACEHOLDER_PDF }],
  },
  "voluntarily-disclosable-information": {
    titleEn: "Voluntarily disclosable information",
    titleBn: "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ",
    accordions: [
      {
        title: "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },
  "laws-rules-regulations-policies-guidelines-2": {
    titleEn: "Laws, rules, regulations, policies, guidelines",
    titleBn: "আইন/বিধি/পরি-পত্র/নীতিমালা/নির্দেশিকা",
    accordions: [
      {
        title: "আইন/বিধি/পরি-পত্র/নীতিমালা/নির্দেশিকা ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },
  "categories-and-catalogs-of-information": {
    titleEn: "Categories and catalogs of information",
    titleBn: "তথ্যের ক্যাটাগরি ও ক্যাটালগ",
    accordions: [
      { title: "তথ্যের ক্যাটাগরি ও ক্যাটালগ ১", pdfUrl: PLACEHOLDER_PDF },
    ],
  },

  // 6. সেবা প্রদান প্রতিশ্রুতি (Citizen's Charter)
  "citizen-charter": {
    titleEn: "Citizen charter",
    titleBn: "সিটিজেন চার্টার",
    accordions: [{ title: "সিটিজেন চার্টার ১", pdfUrl: PLACEHOLDER_PDF }],
  },
  "focal-point-officer-monitoring-committee": {
    titleEn: "Focal point officer & monitoring committee",
    titleBn: "ফোকাল পয়েন্ট কর্মকর্তা/পরিবীক্ষণ কমিটি",
    accordions: [
      {
        title: "ফোকাল পয়েন্ট কর্মকর্তা/পরিবীক্ষণ কমিটি ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },
  "quarterly-annual-monitoring-evaluation-reports": {
    titleEn: "Quarterly/annual monitoring & evaluation reports",
    titleBn: "ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
    accordions: [
      {
        title: "ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন ১",
        pdfUrl: PLACEHOLDER_PDF,
      },
    ],
  },
  "laws-rules-policies-and-circulars": {
    titleEn: "Laws, rules, policies and circulars",
    titleBn: "আইন/বিধি/নীতিমালা ও পরিপত্র",
    accordions: [
      { title: "আইন/বিধি/নীতিমালা ও পরিপত্র ১", pdfUrl: PLACEHOLDER_PDF },
    ],
  },
  "citizen-charter-committee": {
    titleEn: "Citizen charter committee",
    titleBn: "সিটিজেন চার্টার কমিটি",
    accordions: [{ title: "সিটিজেন চার্টার কমিটি ১", pdfUrl: PLACEHOLDER_PDF }],
  },
};
