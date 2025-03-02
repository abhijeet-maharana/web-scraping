import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesSection } from "@/components/services-section";
import { CaseStudies } from "@/components/case-studies";
import { PricingSection } from "@/components/pricing-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <CaseStudies />
      <PricingSection />
      <ContactSection />
    </>
  );
}
