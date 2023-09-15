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
            ? "fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ease-in-out transform translate-y-0"
            : ""
        }`}
      >
        <div className="bg-white w-[87%] rounded-[48px] p-5 flex justify-between items-center shadow-md 2xl:w-[87%]">
          <a href="/">
            {" "}
            <img src={logoSVG} alt="logo" className="" />
          </a>
          <ul></ul>
          <a href="/reservation">
            <button className="px-8 py-2.5 bg-[#bf9444] rounded-[50px] border border-[#bf9444] text-white font-semibold text-lg button-with-hover">
              Find Reservation
            </button>
          </a>
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
