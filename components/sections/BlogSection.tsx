import { publishedPosts } from "@/lib/data";
import type { Section } from "@/lib/types";

export default function BlogSection({ section }: { section: Section }) {
  const title = section.title || "Latest Blog";
  const subtitle = section.subtitle || "";
  const limit = section.options?.limit || 3;
  const posts = publishedPosts(limit);

  return (
    <section className="bg--lightergrey bd--top-bottom" id="blog">
      <div className="container">
        <div className="section--title">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="row">
          {posts.map((p) => (
            <div className="post--item col-md-6" key={p.id}>
              <div className="post--img">
                <img src={p.image || "/img/blog-img/post-01.png"} className="img-responsive center-block" alt={p.title} />
              </div>
              <div className="post--content">
                <h2>
                  <a href="#">{p.title}</a>
                </h2>
                <p className="post--meta">
                  {p.date} / {p.category}
                </p>
                <p>{p.excerpt}</p>
                <a href="#" className="btn--default hover">
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
