import type { Section } from "@/lib/types";

export default function CustomHtmlSection({ section }: { section: Section }) {
  const hasHeading = section.title || section.subtitle;
  return (
    <section className="wc-content-section">
      <div className="container">
        {hasHeading && (
          <div className="section--title">
            {section.title && <h2>{section.title}</h2>}
            {section.subtitle && <p>{section.subtitle}</p>}
          </div>
        )}
        {section.content && <div dangerouslySetInnerHTML={{ __html: section.content }} />}
      </div>
    </section>
  );
}
