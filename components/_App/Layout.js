import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Preloader from "./Preloader";
import Link from "next/link";

const Layout = ({ children }) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);


  const [postiton, setPosition] = React.useState()
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add your scroll event listener here
      document.addEventListener("scroll", function (e) {
        if (window.pageYOffset > 300) {
          setPosition("80px")
        } else {
          setPosition("10px")
        }
      });

      // Make sure to remove the event listener when the component unmounts
      return () => {
        document.removeEventListener("scroll", function (e) {
          // Your scroll event listener function
        });
      };
    }
  }, []);
  return (
    <>
      <Head>
        <title>Esthetix - Dental Medical Center </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {children}

      {loader ? <Preloader /> : null}

      <div className="whatsapp" style={{ bottom: postiton }}>
        <Link href={"https://wa.me/97145294421"} target="_blank">
          <img src="/img/whatsapp.png" alt="" />
        </Link>
      </div>

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
