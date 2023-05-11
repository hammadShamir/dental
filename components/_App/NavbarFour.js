import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeader from "./TopHeader";



// Menu Objects
const menuObj = [{
  name: `Home`
},
{
  name: `About Us`,
  // dropDown: [ { element: `Our Mission`, href: `mission` },
  //             { element: `Our Vision`, href: `vision` },
  //             { element: `Our Team`, href: `team` }
  //           ] 
},
{
  name: `Services`,
  // dropDown: [ { element: `Root Canal Treatment`, href: `mission` },
  //             { element: `Orthodontic Braces`, href: `vision` },
  //             { element: `Invisible Aligners`, href: `team` },
  //             { element: `Hollywood Smile`, href: `team` },
  //             { element: `Denture`, href: `team` },
  //             { element: `Teeth Whitening`, href: `team` },
  //             { element: `Dental Crown`, href: `team` },
  //             { element: `DentalImplant`, href: `team` },
  //             { element: `Tooth Extraction`, href: `team` },
  //             { element: `Composite Filling`, href: `team` },
  //             { element: `Scaling & Polishing`, href: `team` },
  //             { element: `Pendiatric Dentistry`, href: `team` },
  //             { element: `Veeners`, href: `team` }
  //           ] 
},
{ name: `Blog` },
{
  name: `Resources`,
  dropDown: [{ element: `Our Gallery`, href: `mission` },
  { element: `Our Insurances`, href: `vision` },
  { element: `Our Blogs`, href: `team` },
  { element: `Testimonials`, href: `team` },
  { element: `Success Stories`, href: `team` }
  ]
},
{ name: `Contact Us` }];



const NavbarFour = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)


  const [menuItems, setMenuItems] = useState(menuObj);


  const navbar = menuItems.map(menuLink => {
    return (
      <li className="nav-item">
        <Link
          href={`/${menuLink[`name`].split(' ')[0].toLowerCase()}/`}
          className={`nav-link ${currentPath == `/${menuLink[`name`].split(' ')[0].toLowerCase()}}/` && "active"
            }`}
        >
          {menuLink.name}

          {menuLink.dropDown && (<i className="bx bx-plus"></i>)}
        </Link>

        {menuLink.dropDown &&
          (
            <ul className="dropdown-menu">
              {
                menuLink.dropDown.map(dropDown => {


                  return (

                    <li className="nav-item">
                      <Link
                        href={`/${dropDown['href'].toLowerCase()}/`}
                        className={`nav-link ${currentPath == `/${dropDown['href'].toLowerCase()}/` && "active"}`}
                      >
                        {dropDown['element']}
                      </Link>
                    </li>


                  )




                })
              }
            </ul>
          )
        }

      </li>
    )

  })

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
                    <ul className="navbar-nav m-auto gap-4">


                      {navbar}



                    </ul>
                  </div>

                  <div className="others-option">
                    <div className="subscribe">
                      <a href='/appointment' className="default-btn">
                        Appointment
                      </a>
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
