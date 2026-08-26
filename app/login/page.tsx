import type { Metadata } from "next";
import Link from "next/link";
import GlobalCta from "@/components/GlobalCta";

export const metadata: Metadata = { title: "Login - Webcenter Hosting" };

export default function LoginPage() {
  return (
    <>
      <div
        id="pageHeader"
        className="bg--overlay bg--img"
        style={{ backgroundImage: "url(/img/page-header-img/bg.png)" }}
      >
        <div className="container">
          <div className="page-header--title">
            <h2>LOGIN PAGE</h2>
          </div>
          <div className="page-header--breadcrumb">
            <ul className="breadcrumb">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li className="active">LOGIN</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="login" className="bg--lightgrey">
        <div className="container">
          <div className="login--form">
            <form action="#" method="post">
              <div className="form-group">
                <label htmlFor="loginEmail">EMAIL ADDRESS *</label>
                <input type="email" name="username" className="form-control" id="loginEmail" placeholder="EMAIL" />
                <span className="highlight"></span>
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">PASSWORD *</label>
                <input type="password" name="password" className="form-control" id="loginPassword" placeholder="PASSWORD" />
                <span className="highlight"></span>
              </div>
              <button type="submit" className="btn--default hover">
                LOGIN
              </button>{" "}
              <a href="#" className="btn--default hover">
                FORGET PASSWORD ?
              </a>
            </form>
          </div>
        </div>
      </div>
      <GlobalCta />
    </>
  );
}
