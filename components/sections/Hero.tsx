import type { Section } from "@/lib/types";

export default function Hero({ section }: { section: Section }) {
  const title = section.title || "Fast, Secure & Affordable Hosting for Your Website";
  const subtitle = section.subtitle || section.content || "Buy domains, launch websites, and manage hosting with reliable speed.";
  const image = section.image || "/img/web-hosting-hero.webp";
  const buttonText = section.button_text || "Get Started Now";
  const buttonLink = section.button_link || "#";

  return (
    <section className="wc-hero">
      <div className="container">
        <div className="row wc-hero-row">
          <div className="col-md-6 wc-hero-text">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <a className="wc-btn-primary" href={buttonLink}>
              {buttonText}
            </a>
          </div>
          <div className="col-md-5 col-md-offset-1 wc-hero-media">
            <div className="wc-hero-visual">
              <img src={image} alt="Web hosting support" />
              <div className="wc-hero-badge">
                <i className="fa fa-comments"></i> Hi! How can I help you?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
