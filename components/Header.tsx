"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clientarea, menus, site } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="header" className={`wc-site-header${scrolled ? " scrolled" : ""}`}>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className={`navbar-toggle collapsed${navOpen ? " open" : ""}`}
              aria-controls="headerNav"
              onClick={() => setNavOpen((v) => !v)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link href="/" className="navbar-brand">
              <img className="cms-logo" src={site.logoUrl} alt={site.name} />
            </Link>
          </div>
          <div id="headerNav" className={`navbar-collapse collapse${navOpen ? " in" : ""}`}>
            <ul className="nav navbar-nav navbar-right wc-main-nav">
              {menus.map((m) => {
                const children = m.children ?? [];
                if (children.length) {
                  const isOpen = openDropdown === m.label;
                  return (
                    <li
                      key={m.label}
                      className={`dropdown${isOpen ? " open" : ""}`}
                      onMouseEnter={() => setOpenDropdown(m.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <a
                        href="#"
                        className="dropdown-toggle"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(isOpen ? null : m.label);
                        }}
                      >
                        {m.label}
                        <span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu">
                        {children.map((c) => (
                          <li key={c.label}>
                            <Link href={c.url} onClick={() => setNavOpen(false)}>
                              <i className={`fa ${c.icon} fm`}></i>
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={m.label}>
                    <Link href={m.url} onClick={() => setNavOpen(false)}>
                      {m.label}
                    </Link>
                  </li>
                );
              })}
              <li className="wc-clientarea-li">
                <a href={clientarea("/clientarea.php")} className="wc-clientarea-btn">
                  CLIENT AREA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
