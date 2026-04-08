import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import ResponsiveShowcase from "@/components/sections/ResponsiveShowcase";
import Services from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import RecentProjects from "@/components/sections/RecentProjects";

const CoreFeatures = dynamic(() => import("@/components/sections/CoreFeatures"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ResponsiveShowcase />
      <Services />
      <CoreFeatures />
      <Methodology />
      <RecentProjects />
      <ContactSection />
    </main>
  );
}
