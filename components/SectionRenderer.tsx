import type { Section } from "@/lib/types";
import Hero from "@/components/sections/Hero";
import DomainSearchSection from "@/components/sections/DomainSearchSection";
import PricingSection from "@/components/sections/PricingSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WhyDarkSection from "@/components/sections/WhyDarkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactStripSection from "@/components/sections/ContactStripSection";
import CustomHtmlSection from "@/components/sections/CustomHtmlSection";

export default function SectionRenderer({ sections }: { sections: Section[] }) {
  const sorted = [...sections].sort((a, b) => a.sort_order - b.sort_order);
  return (
    <>
      {sorted.map((s) => {
        switch (s.section_type) {
          case "hero":
            return <Hero key={s.id} section={s} />;
          case "domain_search":
            return <DomainSearchSection key={s.id} section={s} />;
          case "pricing":
            return <PricingSection key={s.id} section={s} />;
          case "features":
            return <FeaturesSection key={s.id} section={s} />;
          case "why_dark":
            return <WhyDarkSection key={s.id} section={s} />;
          case "testimonials":
            return <TestimonialsSection key={s.id} section={s} />;
          case "blog":
            return <BlogSection key={s.id} section={s} />;
          case "contact_strip":
            return <ContactStripSection key={s.id} section={s} />;
          case "custom_html":
          case "content":
            return <CustomHtmlSection key={s.id} section={s} />;
          default:
            return null;
        }
      })}
    </>
  );
}
