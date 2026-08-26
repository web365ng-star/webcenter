import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Webcenter Hosting",
  description: site.tagline,
  icons: { icon: site.favicon, shortcut: site.favicon },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto%7COswald:300,400,700" rel="stylesheet" />
        <link href="/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="/style.css" rel="stylesheet" />
        <link href="/css/responsive-style.css" rel="stylesheet" />
        <link href="/css/custom-style.css" rel="stylesheet" />
      </head>
      <body>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
