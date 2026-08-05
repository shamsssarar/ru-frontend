import { notFound } from "next/navigation";
import { facilitiesDetailsData } from "@/data/facilitiesDetailsData";
import AdministrationSubPageTemplate from "@/components/layout/AdministrationSubPageTemplate";

export default async function FacilityDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Retrieve the specific facility data based on the URL slug
  const facilityData = facilitiesDetailsData[slug];

  // Trigger Next.js 404 page if the slug isn't in our data dictionary
  if (!facilityData) {
    notFound();
  }

  return (
    <>
      {/* Spacer to push content below the absolute transparent navbar */}
      <div className="h-[70px] bg-[#002147] w-full shrink-0"></div>

      <AdministrationSubPageTemplate
        pageTitle={facilityData.pageTitle}
        officialName={facilityData.officialName}
        officialTitle={facilityData.officialTitle}
        officialSubtitle={facilityData.officialSubtitle}
        officialImage={facilityData.officialImage}
        profileLink={facilityData.profileLink}
        messageContent={facilityData.messageContent}
        events={facilityData.events}
        notices={facilityData.notices}
        footerEntityName={facilityData.footerEntityName}
        hideSubFooter={true} /* HIDES THE SECONDARY FOOTER */
      />
    </>
  );
}
