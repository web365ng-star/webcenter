import Link from "next/link";
import { footerSections, site } from "@/lib/data";

const socialIcons: Record<string, string> = {
  facebook: "fa-facebook",
  twitter: "fa-twitter",
  linkedin: "fa-linkedin",
  google: "fa-google-plus",
};

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer--widgets bg--dark">
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer--widget fw--about">
              <h4>ABOUT US</h4>
              <p>{site.footer.aboutText}</p>
              <Link href="/about" className="more">
                Read More <i className="fa fa-angle-double-right"></i>
              </Link>
              <div className="fw--about-social">
                <ul>
                  {Object.entries(site.social).map(([name, url]) => (
                    <li key={name}>
                      <a href={url}>
                        <i className={`fa ${socialIcons[name]}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {footerSections.map((sec) => (
              <div className="col-md-3 col-sm-6 footer--widget fw--links" key={sec.title}>
                <h4>{sec.title}</h4>
                <ul>
                  {sec.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.url}>
                        <i className="fa fm fa-angle-right"></i>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer--copyright">
        <div className="container">
          <p>{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
