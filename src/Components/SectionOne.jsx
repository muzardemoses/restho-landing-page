import { useState, useEffect } from "react";
import subTitVec from "../assets/sub-title-vec.svg";
import topImg from "../assets/top-one.png";
import bottomImg from "../assets/bottom-one.png";
import leftImg from "../assets/left-one.png";
import rightImg from "../assets/right-one.png";
import topTwoImg from "../assets/top-two.png";
import bottomTwoImg from "../assets/bottom-two.png";
import leftTwoImg from "../assets/left-two.png";
import rightTwoImg from "../assets/right-two.png";
import topThreeImg from "../assets/top-three.png";
import bottomThreeImg from "../assets/bottom-three.png";
import leftThreeImg from "../assets/left-three.png";
import rightThreeImg from "../assets/right-three.png";

export const SectionOne = () => {
  const [currentPlay, setCurrentPlay] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPlay === 1) {
        setCurrentPlay(2);
      } else if (currentPlay === 2) {
        setCurrentPlay(3);
      } else if (currentPlay === 3) {
        setCurrentPlay(1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPlay]);

  return (
    <section className="banner h-[calc(100vh-80px)] pl-20 pr-56 flex items-center 2xl:pl-6 2xl:pr-[140px] xl:pr-[100px] lg:h-[unset] lg:pr-10 lg:pl-10 lg:pt-[200px] lg:pb-[130px] md:pt-[150px] md:pl-8 md:pr-8 sm:pr-5 sm:pl-5">
      <div className="flex justify-between items-center h-full w-full">
        <div className="flex gap-40 items-center 2xl:gap-7 lg:justify-start lg:flex-grow lg:text-center">
          <div className="flex flex-col gap-5 lg:w-max sm:hidden">
            <div className="bg-[#795b23bd] rounded-sm p-[2px] transform rotate-45">
              <div
                className={`h-3.5 w-3.5  border-2 border-black ${
                  currentPlay === 1 ? "bg-[#bf9444]" : "bg-[#795b23bd]"
                }`}
              ></div>
            </div>
            <div className="bg-[#795b23bd] rounded-sm p-[2px] transform rotate-45">
              <div
                className={`h-3.5 w-3.5  border-2 border-black ${
                  currentPlay === 2 ? "bg-[#bf9444]" : "bg-[#795b23bd]"
                }`}
              ></div>
            </div>
            <div className="bg-[#795b23bd] rounded-sm p-[2px] transform rotate-45">
              <div
                className={`h-3.5 w-3.5  border-2 border-black ${
                  currentPlay === 3 ? "bg-[#bf9444]" : "bg-[#795b23bd]"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-[755px] 2xl:w-[550px] lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-col">
            <div className="flex gap-2.5 mb-[15px] lg:w-max">
              <img src={subTitVec} alt="sub-title-vec" className="" />
              <p className="text-[#bf9444] text-lg font-normal">
                Welcome To Restho
              </p>
              <img src={subTitVec} alt="sub-title-vec" className="" />
            </div>
            <h2
              className="text-[5rem] font-bold mb-[35px] 2xl:text-6xl xl:text-[3.6rem] lg:mb-[25px] lg:text-[3.125rem] lg:w-[550px] sm:w-full"
              style={{
                lineHeight: "1.1",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Find Your Best Healthy & Tasty Food.
            </h2>
            <h4 className="text-[hsla(0,0%,100%,.8)] text-lg font-normal mb-[55px] lg:w-[550px] lg:mb-10 sm:w-full">
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </h4>
            {/* <a href="/about" className="w-max"> */}
            <button className="button-with-arrow px-[23px] py-[13px] rounded-[50px] group flex gap-1.5 border border-[#bf9444] transition duration-300 ease-in-out w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke=""
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-[#bf9444] transform -rotate-45 group-hover:stroke-white group-hover:bg-[#bf9444] group-hover:rotate-0 transition duration-300 ease-in-out"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" />
              </svg>
              <p className="text-[#bf9444] group-hover:text-white transition duration-300 ease-in-out w-max">
                Discover More
              </p>
            </button>
            {/* </a> */}
          </div>
        </div>
        <div className="w-full flex flex-grow relative mt-[-50px] lg:hidden">
          {currentPlay === 1 ? (
            <>
              <img
                src={topThreeImg}
                alt="top"
                className="absolute bottom-[10px] right-[50px] fadeInOut xl:w-52 xl:h-52 xl:right-[14px] xl:-bottom-[10px]"
              />
              <img
                src={bottomThreeImg}
                alt="bottom"
                className="absolute -top-[10px] right-0 fadeInOut xl:w-52 xl:h-52 xl:top-[20px] xl:right-3"
              />
              <img
                src={leftThreeImg}
                alt="left"
                className="absolute -top-[160px] -right-28 fadeInOut xl:w-52 xl:h-52 xl:-top-[90px] xl:-right-[93px]"
              />
              <img
                src={rightThreeImg}
                alt="right"
                className="absolute -top-[160px] right-[211px] fadeInOut xl:w-52 xl:h-52 xl:-top-[88px] xl:right-[120px]"
              />
            </>
          ) : currentPlay === 2 ? (
            <>
              <img
                src={topTwoImg}
                alt="top"
                className="absolute bottom-[10px] right-[50px] fadeInOut xl:w-52 xl:h-52 xl:right-[14px] xl:-bottom-[10px]"
              />
              <img
                src={bottomTwoImg}
                alt="bottom"
                className="absolute -top-[10px] right-0 fadeInOut xl:w-52 xl:h-52 xl:top-[20px] xl:right-3"
              />
              <img
                src={leftTwoImg}
                alt="left"
                className="absolute -top-[160px] -right-28 fadeInOut xl:w-52 xl:h-52 xl:-top-[90px] xl:-right-[93px]"
              />
              <img
                src={rightTwoImg}
                alt="right"
                className="absolute -top-[160px] right-[211px] fadeInOut xl:w-52 xl:h-52 xl:-top-[88px] xl:right-[120px]"
              />
            </>
          ) : (
            <>
              <img
                src={topImg}
                alt="top"
                className="absolute bottom-[10px] right-[50px] fadeInOut xl:w-52 xl:h-52 xl:right-[14px] xl:-bottom-[10px]"
              />
              <img
                src={bottomImg}
                alt="bottom"
                className="absolute -top-[10px] right-0 fadeInOut xl:w-52 xl:h-52 xl:top-[20px] xl:right-3"
              />
              <img
                src={leftImg}
                alt="left"
                className="absolute -top-[160px] -right-28 fadeInOut xl:w-52 xl:h-52 xl:-top-[90px] xl:-right-[93px]"
              />
              <img
                src={rightImg}
                alt="right"
                className="absolute -top-[160px] right-[211px] fadeInOut xl:w-52 xl:h-52 xl:-top-[88px] xl:right-[120px]"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
