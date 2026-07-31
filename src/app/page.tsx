import AboutUniversity from "@/components/Home/AboutUniversity";
import Administration from "@/components/Home/Administration";
import APASection from "@/components/Home/APASection";
import HeroSlider from "@/components/Home/HeroSlider";
import LatestNotices from "@/components/Home/LatestNotices";
import StatsBar from "@/components/Home/StatsBar";
import VCMessage from "@/components/Home/VCMessage";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSlider />
      <StatsBar />
      <AboutUniversity />
      <VCMessage />
      <Administration />
      <LatestNotices />
      <APASection />
      {/* Future sections (Stats, VC Message, Notices) will go here */}
    </div>
  );
}
