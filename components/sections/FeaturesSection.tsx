import type { Section } from "@/lib/types";

const defaultItems = [
  { icon: "fa-rocket", title: "Lightning-Fast Servers", text: "NVMe SSD servers with optimized performance to keep websites loading fast." },
  { icon: "fa-life-ring", title: "24/7 Continuous Support", text: "A helpful support team available to guide your customers any time.", featured: true },
  { icon: "fa-lock", title: "Free Let’s Encrypt SSL", text: "Secure websites automatically with free SSL certificates on every plan." },
  { icon: "fa-shield", title: "99.9% Uptime Guarantee", text: "Reliable infrastructure designed to keep businesses online." },
];

export default function FeaturesSection({ section }: { section: Section }) {
  const items = section.options?.items?.length ? section.options.items : defaultItems;
  const title = section.title || "Why Choose Webcenter Hosting?";
  const subtitle = section.subtitle || "Everything your customers need to launch, grow, and manage their websites confidently.";

  return (
    <section className="wc-features-modern">
      <div className="container">
        <div className="section--title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="wc-features-grid">
          {items.map((it) => (
            <div className={`wc-feature-box${it.featured ? " featured" : ""}`} key={it.title}>
              <div className="ico">
                <i className={`fa ${it.icon}`}></i>
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
