import { useState, useEffect } from "react";
import "./App.css";
import logoSVG from "./assets/header2-logo.svg";
import {
  Header,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
  Footer,
} from "./Components";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="banner">
      {/* <div id="__next">
        <div></div>
        <div className="preloader active">
          <div className="hide">
            <span className="counter">100</span>
          </div>
        </div>
      </div> */}
      <Header />

      <div
        className={`w-full flex justify-center items-center ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-20 transition-transform duration-300 ease-in-out transform translate-y-0"
            : ""
        }`}
      >
        <div className="bg-white w-[87%] rounded-[48px] p-5 flex justify-between items-center shadow-md 2xl:w-[87%] lg:w-[95%] lg:p-3.5 lg:px-12">
          <a href="/">
            {" "}
            <img src={logoSVG} alt="logo" className="h-7" />
          </a>
          <ul></ul>
          <a href="/reservation">
            <button className="px-8 py-2.5 bg-[#bf9444] rounded-[50px] border border-[#bf9444] text-white font-semibold text-lg button-with-hover lg:py-1.5 lg:font-medium md:hidden">
              Find Reservation
            </button>
          </a>
          <button className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <main className="text-white bg-white">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </main>
      <Footer />
    </div>
  );
}

export default App;
