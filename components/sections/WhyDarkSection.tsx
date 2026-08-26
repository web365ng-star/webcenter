import { whyDarkItems } from "@/lib/data";
import type { Section } from "@/lib/types";

export default function WhyDarkSection({ section }: { section: Section }) {
  const title = section.title || "Why Webcenter Host?";
  const subtitle = section.subtitle || "Reliable hosting built for entrepreneurs, businesses, agencies and growing brands.";

  return (
    <section className="wc-why-dark">
      <div className="container">
        <h2>{title}</h2>
        <p className="lead">{subtitle}</p>
        <div className="wc-why-grid">
          {whyDarkItems.map(([icon, itemTitle, text]) => (
            <div className="wc-why-item" key={itemTitle}>
              <i className={`fa ${icon}`}></i>
              <div>
                <h3>{itemTitle}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
