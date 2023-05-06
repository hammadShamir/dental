import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";

const NavbarFour = () => {
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
      <header className="header-area">

        <TopHeader />

        <div className="nav-area nav-area-seven">
          <div id="navbar" className="navbar-area">
            <div className="main-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <Link href="/" className="navbar-brand">
                    logo
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
                      {/* Home */}
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Home
                        </Link>
                      </li>

                      {/* About */}
                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${currentPath == "/about/" && "active"
                            }`}
                        >
                          About us
                           <i className="bx bx-plus"></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/mission"
                              className={`nav-link ${currentPath == "/mission" && "active"
                                }`}
                            >
                              Our Mission
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/vision"
                              className={`nav-link ${currentPath == "/vision" && "active"
                                }`}
                            >
                              Our Vision
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/team"
                              className={`nav-link ${currentPath == "/team" && "active"
                                }`}
                            >
                              Our Team
                            </Link>
                          </li>
                        </ul>
                      </li>


                      {/* Services */}
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Services
                          <i className="bx bx-plus"></i>
                        </Link>

                     <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/services-1/"
                              className={`nav-link ${currentPath == "/services-1/" && "active"
                                }`}
                            >
                              Root canval Treatment
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-2/"
                              className={`nav-link ${currentPath == "/services-2/" && "active"
                                }`}
                            >
                              Orthodontic Braces
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services-3/"
                              className={`nav-link ${currentPath == "/services-3/" && "active"
                                }`}
                            >
                              Invisible Alligners
                            </Link>
                          </li>

                        </ul> 
                      </li>

                      {/* Blogs */}
                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Blog
                          {/* <i className="bx bx-plus"></i> */}
                        </Link>

                        {/* <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/blog-grid/"
                              className={`nav-link ${currentPath == "/blog-grid/" && "active"
                                }`}
                            >
                              Blog Grid
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-left-sidebar/"
                              className={`nav-link ${currentPath == "/blog-left-sidebar/" && "active"
                                }`}
                            >
                              Blog Left Sidebar
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-right-sidebar/"
                              className={`nav-link ${currentPath == "/blog-right-sidebar/" &&
                                "active"
                                }`}
                            >
                              Blog Right Sidebar
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/blog-details/"
                              className={`nav-link ${currentPath == "/blog-details/" && "active"
                                }`}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul> */}
                      </li>

                      {/* Contact us */}
                      <li className="nav-item">
                        <Link
                          href="/contact/"
                          className={`nav-link ${currentPath == "/contact/" && "active"
                            }`}
                        >
                          Contact us
                        </Link>
                      </li>


                    </ul>
                  </div>

                  <div className="others-option">
                    <div className="subscribe">
                      <Link href="/appointment" className="default-btn">
                        Book an Appointment
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

export default NavbarFour;
