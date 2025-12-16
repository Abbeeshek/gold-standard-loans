import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AudienceSection from "@/components/AudienceSection";
import EcosystemSection from "@/components/EcosystemSection";
import ResponsibleSection from "@/components/ResponsibleSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AudienceSection />
      <EcosystemSection />
      <ResponsibleSection />
      <VisionSection />
      <Footer />
    </main>
  );
};

export default Index;
