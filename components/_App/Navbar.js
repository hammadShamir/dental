import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top">
        <TopHeader />

        <div className="nav-area">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <Link href="/" className="navbar-brand">
                    <img width='90%' src="/img/logo.png" alt="logo" />

                  </Link>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${currentPath == "/" && "active"
                            }`}
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${currentPath == "/about/" && "active"
                            }`}
                        >
                          About Us
                        </Link>
                      </li>



                      <li className="nav-item">
                        <Link
                          href="/services"
                          className={`nav-link ${currentPath == "/services/" && "active"
                            }`}
                        >
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/doctors"
                          className={`nav-link ${currentPath == "/doctors/" && "active"
                            }`}
                        >
                          Doctors
                        </Link>

                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Resources <i className="bx bx-plus"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/gallery/"
                              className={`nav-link ${currentPath == "/gallery/" && "active"
                                }`}
                            >
                              Our Gallery
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/blog/"
                              className={`nav-link ${currentPath == "/blog/" && "active"
                                }`}
                            >
                              Our Blogs
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/testimonials/"
                              className={`nav-link ${currentPath == "/testimonials/" && "active"
                                }`}
                            >
                              Testimonials
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/termscondition/"
                              className={`nav-link ${currentPath == "/termscondition/" && "active"
                                }`}
                            >
                              Terms & Conditions
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/stories/"
                              className={`nav-link ${currentPath == "/stories/" && "active"
                                }`}
                            >
                              Success Stories
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/faq/"
                              className={`nav-link ${currentPath == "/faq/" && "active"
                                }`}
                            >
                              Faqs
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/contact/"
                          className={`nav-link ${currentPath == "/contact/" && "active"
                            }`}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="others-option">
                    <div className="subscribe">
                      <Link href="/appointment" className="default-btn">
                        Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
