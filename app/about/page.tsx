import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionRenderer from "@/components/SectionRenderer";
import AboutExtra from "@/components/AboutExtra";
import { pageSections } from "@/lib/data";

export const metadata: Metadata = { title: "About Webcenter Host - Webcenter Host" };

export default function AboutPage() {
  const sections = [...pageSections.about].sort((a, b) => a.sort_order - b.sort_order);
  const hero = sections.find((s) => s.section_type === "hero");
  const rest = sections.filter((s) => s.section_type !== "hero");

  return (
    <>
      {hero && <Hero section={hero} />}
      <AboutExtra />
      <SectionRenderer sections={rest} />
    </>
  );
}
