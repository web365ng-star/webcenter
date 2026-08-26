"use client";

export default function BackToTop() {
  return (
    <div id="backToTop">
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
}
