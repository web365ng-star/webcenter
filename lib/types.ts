export type MenuItem = {
  label: string;
  url: string;
  icon: string;
  children?: MenuItem[];
};

export type FooterLink = { label: string; url: string };
export type FooterSection = { title: string; links: FooterLink[] };

export type FeatureItem = { icon: string; title: string; text: string; featured?: boolean };

export type Section = {
  id: string;
  page_id: string;
  section_type:
    | "hero"
    | "domain_search"
    | "pricing"
    | "features"
    | "why_dark"
    | "testimonials"
    | "blog"
    | "contact_strip"
    | "custom_html"
    | "content";
  title?: string;
  subtitle?: string;
  content?: string;
  image?: string;
  button_text?: string;
  button_link?: string;
  bg_color?: string;
  text_color?: string;
  options?: {
    plan_type?: "shared" | "vps" | "dedicated" | "reseller";
    limit?: number;
    items?: FeatureItem[];
  };
  sort_order: number;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  tagline?: string;
  popular: boolean;
  active: boolean;
  features: string[];
  pid?: number;
  currency: string;
  billing_cycle: string;
  order_url: string;
};

export type DomainPrice = { ext: string; register: string; renew: string; transfer: string };

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  status: "published" | "draft";
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  tags: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  active: boolean;
};
