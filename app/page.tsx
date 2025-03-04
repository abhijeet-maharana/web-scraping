import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesSection } from "@/components/services-section";
import { CaseStudies } from "@/components/case-studies";
import { PricingSection } from "@/components/pricing-section";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <CaseStudies />
      <PricingSection />
      <ContactPage />
    </>
  );
}
