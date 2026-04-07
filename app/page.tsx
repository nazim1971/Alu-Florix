import Hero from "@/components/sections/Hero";
import ResponsiveShowcase from "@/components/sections/ResponsiveShowcase";
import Services from "@/components/sections/Services";
import CoreFeatures from "@/components/sections/CoreFeatures";
import Methodology from "@/components/sections/Methodology";
import RecentProjects from "@/components/sections/RecentProjects";
import ContactSection from "@/components/sections/ContactSection";

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
