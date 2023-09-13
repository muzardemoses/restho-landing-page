import { useState, useEffect } from "react";
import mailSVG from "../assets/mail.svg";
import locationSVG from "../assets/location.svg";
import logoSVG from "../assets/header2-logo.svg";

export const Header = () => {
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
    <header className="flex flex-col justify-center items-center bg-[linear-gradient(90deg,#000,#09161d)] overflow-auto">
      <div className="py-2.5 flex justify-between items-center text-white w-full px-48 2xl:px-20">
        <p className="text-sm font-normal">
          <span className="text-[#bf9444]">Opening Hour:</span>{" "}
          <span>9.00 am to 10.00 pm</span>
        </p>
        <div className="flex gap-[50px]">
          <a
            href="mailto:info@example.com"
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-1"
          >
            <img src={mailSVG} alt="mail" className="w-4 h-4" />
            <p className="text-[15px] font-normal hover:text-[#bf9444] transition duration-300 ease-in-out">
              info@example.com
            </p>
          </a>
          <a className="flex items-center gap-1">
            <img src={locationSVG} alt="location" className="w-4 h-4" />
            <p className="text-[15px] font-normal hover:text-[#bf9444] transition duration-300 ease-in-out">
              Road-01, Block-B, West London City
            </p>
          </a>
        </div>
      </div>
      <div
        className={`w-full flex justify-center items-center ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ease-in-out transform translate-y-0"
            : ""
        }`}
      >
        <div className="bg-white 2xl:w-[87%] w-[87%] rounded-[48px] p-5 flex justify-between items-center shadow-md">
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
    </header>
  );
};
