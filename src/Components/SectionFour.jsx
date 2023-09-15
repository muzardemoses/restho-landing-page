import subTitVec from "../assets/sub-title-vec.svg";
import itemOne from "../assets/SecFour/food-item-1.png";
import itemTwo from "../assets/SecFour/food-item-2.png";
import itemThree from "../assets/SecFour/food-item-3.png";
import itemFour from "../assets/SecFour/food-item-4.png";
import itemFive from "../assets/SecFour/food-item-5.png";
import itemSix from "../assets/SecFour/food-item-6.png";
import galOne from "../assets/SecFour/gallery-01.png";
import galTwo from "../assets/SecFour/gallery-02.png";
import galThree from "../assets/SecFour/gallery-03.png";
import galFour from "../assets/SecFour/gallery-04.png";
import galFive from "../assets/SecFour/gallery-05.png";
import chefOne from "../assets/SecFour/chef-1.png";
import chefTwo from "../assets/SecFour/chef-2.png";
import chefThree from "../assets/SecFour/chef-3.png";

export const SectionFour = () => {
  return (
    <div className="min-h-screen text-black py-[120px] flex flex-col gap-[120px] justify-center items-center xl:py-[100px]">
      <section className="w-[1320px] flex flex-col gap-12 2xl:w-[1240px] xl:w-[910px] lg:w-[620px] sm:w-[100%]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-2.5">
              <img src={subTitVec} alt="sub-title-vec" className="" />
              <p className="text-[#bf9444] text-lg font-normal">Menu List</p>
              <img src={subTitVec} alt="sub-title-vec" className="" />
            </div>
            <h3
              className="text-[3.75rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Find Your Food Item
            </h3>
          </div>
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
              className="stroke-[#000000] transform -rotate-45 group-hover:stroke-[#000000] group-hover:bg-[#bf9444] group-hover:rotate-0 transition duration-300 ease-in-out"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="m12 16 4-4-4-4" />
            </svg>
            <p className="text-[#000000] group-hover:[#000000] transition duration-300 ease-in-out w-max">
              View More
            </p>
          </button>
        </div>
        <div className="grid grid-cols-3 grid-flow-row gap-6 w-full">
          <div className="relative">
            <img
              src={itemOne}
              alt="item-one"
              className="w-full rounded-t-[10px]"
            />
            <div className="relative w-full pt-11 pb-6 flex flex-col justify-center gap-2.5 items-center border border-[#eee] rounded-b-[10px">
              <h4
                className="text-[1.875rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Prawn with Noodles
              </h4>
              <p className="text-[#5e5e5e] text-lg font-normal text-center w-[250px]">
                It is a long established fact that a reader will be distracted.
              </p>
              <div className="absolute -top-5 right-40 z-10 rounded-full border border-[#eee] bg-white px-[35px] text-[#bf9444] text-[1.375rem] font-bold xl:right-[90px]">
                $45
              </div>
            </div>
            <div
              className="absolute top-4 right-0 z-10 rounded-l-full bg-white py-1.5 px-5 text-[#09161d] text-[1.375rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Launch
            </div>
          </div>
          <div className="relative">
            <img
              src={itemTwo}
              alt="item-two"
              className="w-full rounded-t-[10px]"
            />
            <div className="relative w-full pt-11 pb-6 flex flex-col justify-center gap-2.5 items-center border border-[#eee] rounded-b-[10px">
              <h4
                className="text-[1.875rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Chicken Leg Fry
              </h4>
              <p className="text-[#5e5e5e] text-lg font-normal text-center w-[250px]">
                It is a long established fact that a reader will be distracted.
              </p>
              <div className="absolute -top-5 right-40 z-10 rounded-full border border-[#eee] bg-white px-[35px] text-[#bf9444] text-[1.375rem] font-bold xl:right-[90px]">
                $45
              </div>
            </div>
            <div
              className="absolute top-4 right-0 z-10 rounded-l-full bg-white py-1.5 px-5 text-[#09161d] text-[1.375rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Launch
            </div>
          </div>
          <div className="relative">
            <img
              src={itemThree}
              alt="item-three"
              className="w-full rounded-t-[10px]"
            />
            <div className="relative w-full pt-11 pb-6 flex flex-col justify-center gap-2.5 items-center border border-[#eee] rounded-b-[10px">
              <h4
                className="text-[1.875rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Golden Coffee
              </h4>
              <p className="text-[#5e5e5e] text-lg font-normal text-center w-[250px]">
                It is a long established fact that a reader will be distracted.
              </p>
              <div className="absolute -top-5 right-40 z-10 rounded-full border border-[#eee] bg-white px-[35px] text-[#bf9444] text-[1.375rem] font-bold xl:right-[90px]">
                $45
              </div>
            </div>
            <div
              className="absolute top-4 right-0 z-10 rounded-l-full bg-white py-1.5 px-5 text-[#09161d] text-[1.375rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Launch
            </div>
          </div>
          <div className="relative">
            <img
              src={itemFour}
              alt="item-four"
              className="w-full rounded-t-[10px]"
            />
            <div className="relative w-full pt-11 pb-6 flex flex-col justify-center gap-2.5 items-center border border-[#eee] rounded-b-[10px">
              <h4
                className="text-[1.875rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Full Chicken
              </h4>
              <p className="text-[#5e5e5e] text-lg font-normal text-center w-[250px]">
                It is a long established fact that a reader will be distracted.
              </p>
              <div className="absolute -top-5 right-40 z-10 rounded-full border border-[#eee] bg-white px-[35px] text-[#bf9444] text-[1.375rem] font-bold">
                $45
              </div>
            </div>
            <div
              className="absolute top-4 right-0 z-10 rounded-l-full bg-white py-1.5 px-5 text-[#09161d] text-[1.375rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Launch
            </div>
          </div>
          <div className="relative">
            <img
              src={itemFive}
              alt="item-five"
              className="w-full rounded-t-[10px]"
            />
            <div className="relative w-full pt-11 pb-6 flex flex-col justify-center gap-2.5 items-center border border-[#eee] rounded-b-[10px">
              <h4
                className="text-[1.875rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Mutton Kabab
              </h4>
              <p className="text-[#5e5e5e] text-lg font-normal text-center w-[250px]">
                It is a long established fact that a reader will be distracted.
              </p>
              <div className="absolute -top-5 right-40 z-10 rounded-full border border-[#eee] bg-white px-[35px] text-[#bf9444] text-[1.375rem] font-bold">
                $45
              </div>
            </div>
            <div
              className="absolute top-4 right-0 z-10 rounded-l-full bg-white py-1.5 px-5 text-[#09161d] text-[1.375rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Launch
            </div>
          </div>
          <div className="relative">
            <img
              src={itemSix}
              alt="item-six"
              className="w-full rounded-t-[10px]"
            />
            <div className="relative w-full pt-11 pb-6 flex flex-col justify-center gap-2.5 items-center border border-[#eee] rounded-b-[10px">
              <h4
                className="text-[1.875rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Burger with Drinks
              </h4>
              <p className="text-[#5e5e5e] text-lg font-normal text-center w-[250px]">
                It is a long established fact that a reader will be distracted.
              </p>
              <div className="absolute -top-5 right-40 z-10 rounded-full border border-[#eee] bg-white px-[35px] text-[#bf9444] text-[1.375rem] font-bold">
                $45
              </div>
            </div>
            <div
              className="absolute top-4 right-0 z-10 rounded-l-full bg-white py-1.5 px-5 text-[#09161d] text-[1.375rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Launch
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center gap-2 px-5 items-center">
        <div className="flex gap-2.5">
          <img src={subTitVec} alt="sub-title-vec" className="" />
          <p className="text-[#bf9444] text-lg font-normal">Gallery Store</p>
          <img src={subTitVec} alt="sub-title-vec" className="" />
        </div>
        <h3
          className="text-[3.75rem] font-bold"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Our Special Gallery
        </h3>
        <div className="pt-5 flex justify-center flex-flow items-center gap-2 h-[270px] 2xl:overflow-x-scroll 2xl:overflow-y-hidden">
          <img src={galOne} alt="gallery-one" className="w-full h-full" />
          <img src={galTwo} alt="gallery-two" className="w-full h-full" />
          <img src={galThree} alt="gallery-three" className="w-full h-full" />
          <img src={galFour} alt="gallery-four" className="w-full h-full" />
          <img src={galFive} alt="gallery-five" className="w-full h-full" />
        </div>
      </section>
      <section className="flex flex-col text-center gap-2 px-10 items-center">
        <div className="flex gap-2.5">
          <img src={subTitVec} alt="sub-title-vec" className="" />
          <p className="text-[#bf9444] text-lg font-normal">Our Expertises</p>
          <img src={subTitVec} alt="sub-title-vec" className="" />
        </div>
        <h3
          className="text-[3.75rem] font-bold"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Restho&apos;s Best Chef
        </h3>
        <div className="mt-10 grid grid-cols-3 grid-flow-row gap-8 w-full">
          <div>
            <div className="overflow-hidden rounded-t-[10px]">
              <img
                src={chefOne}
                alt="chef-one"
                className="overflow-hidden w-full rounded-t-[10px] transition duration-300 ease-in-out hover:transform hover:scale-110"
              />
            </div>
            <div className="bg-white w-full z-10 p-6 flex flex-col justify-center gap-2.5 items-center border border-[#eee] rounded-b-[10px]">
              <div className="flex flex-col justify-center gap-1.5">
                <h4
                  className="text-[1.75rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Mr. Willium Jhon
                </h4>
                <p className="text-[#5e5e5e] text-base font-normal text-center">
                  Chef of Head
                </p>
              </div>
              <div className="flex justify-center items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#5e5e5e] stroke-[#5e5e5e] transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444] hover:stroke-[#bf9444]"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <div className="group flex items-center gap-5">
                  <p className="h-1 w-1 rounded-full bg-[#cfcaca] group-hover:bg-[#bf9444]"></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#5e5e5e] stroke-[#ffffff] transition duration-300 ease-in-out hover:cursor-pointer group-hover:text-[#bf9444] group-hover:stroke-[#ffffff]"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div className="group flex items-center gap-5">
                  <p className="h-1 w-1 rounded-full bg-[#cfcaca] group-hover:bg-[#bf9444]"></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#5e5e5e] stroke-[#5e5e5e] transition duration-300 ease-in-out hover:cursor-pointer group-hover:text-[#bf9444] group-hover:stroke-[#bf9444]"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="group flex items-center gap-5">
                  <p className="h-1 w-1 rounded-full bg-[#cfcaca] group-hover:bg-[#bf9444]"></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#5e5e5e] stroke-[#5e5e5e] transition duration-300 ease-in-out hover:cursor-pointer group-hover:text-[#bf9444] group-hover:stroke-[#bf9444]"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="overflow-hidden rounded-t-[10px]">
              <img
                src={chefTwo}
                alt="chef-two"
                className="overflow-hidden w-full rounded-t-[10px] transition duration-300 ease-in-out hover:transform hover:scale-110"
              />
            </div>
            <div className="bg-white w-full z-10 p-6 flex flex-col justify-center gap-2.5 items-center border border-[#eee] rounded-b-[10px]">
              <div className="flex flex-col justify-center gap-1.5">
                <h4
                  className="text-[1.75rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Mile Woatson
                </h4>
                <p className="text-[#5e5e5e] text-base font-normal text-center">
                  Chef of Head
                </p>
              </div>
              <div className="flex justify-center items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#5e5e5e] stroke-[#5e5e5e] transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444] hover:stroke-[#bf9444]"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <div className="group flex items-center gap-5">
                  <p className="h-1 w-1 rounded-full bg-[#cfcaca] group-hover:bg-[#bf9444]"></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#5e5e5e] stroke-[#ffffff] transition duration-300 ease-in-out hover:cursor-pointer group-hover:text-[#bf9444] group-hover:stroke-[#ffffff]"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div className="group flex items-center gap-5">
                  <p className="h-1 w-1 rounded-full bg-[#cfcaca] group-hover:bg-[#bf9444]"></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#5e5e5e] stroke-[#5e5e5e] transition duration-300 ease-in-out hover:cursor-pointer group-hover:text-[#bf9444] group-hover:stroke-[#bf9444]"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="group flex items-center gap-5">
                  <p className="h-1 w-1 rounded-full bg-[#cfcaca] group-hover:bg-[#bf9444]"></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#5e5e5e] stroke-[#5e5e5e] transition duration-300 ease-in-out hover:cursor-pointer group-hover:text-[#bf9444] group-hover:stroke-[#bf9444]"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="overflow-hidden rounded-t-[10px]">
              <img
                src={chefThree}
                alt="chef-three"
                className="overflow-hidden w-full rounded-t-[10px] transition duration-300 ease-in-out hover:transform hover:scale-110"
              />
            </div>
            <div className="bg-white w-full z-10 p-6 flex flex-col justify-center gap-2.5 items-center border border-[#eee] rounded-b-[10px]">
              <div className="flex flex-col justify-center gap-1.5">
                <h4
                  className="text-[1.75rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Mr. Robert Jhon
                </h4>
                <p className="text-[#5e5e5e] text-base font-normal text-center">
                  Chef of Head
                </p>
              </div>
              <div className="flex justify-center items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#5e5e5e] stroke-[#5e5e5e] transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444] hover:stroke-[#bf9444]"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <div className="group flex items-center gap-5">
                  <p className="h-1 w-1 rounded-full bg-[#cfcaca] group-hover:bg-[#bf9444]"></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#5e5e5e] stroke-[#ffffff] transition duration-300 ease-in-out hover:cursor-pointer group-hover:text-[#bf9444] group-hover:stroke-[#ffffff]"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div className="group flex items-center gap-5">
                  <p className="h-1 w-1 rounded-full bg-[#cfcaca] group-hover:bg-[#bf9444]"></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#5e5e5e] stroke-[#5e5e5e] transition duration-300 ease-in-out hover:cursor-pointer group-hover:text-[#bf9444] group-hover:stroke-[#bf9444]"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="group flex items-center gap-5">
                  <p className="h-1 w-1 rounded-full bg-[#cfcaca] group-hover:bg-[#bf9444]"></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#5e5e5e] stroke-[#5e5e5e] transition duration-300 ease-in-out hover:cursor-pointer group-hover:text-[#bf9444] group-hover:stroke-[#bf9444]"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
