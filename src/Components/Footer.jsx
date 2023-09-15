import logoSVG from "../assets/f-logo.svg";
import subTitVec from "../assets/sub-title-vec.svg";

export const Footer = () => {
  return (
    <div className="footer-bg px-20 flex flex-col justify-center items-center text-[#ffffffcc] xl:px-8">
      <div className="py-[100px] flex justify-between items-center w-full lg:grid lg:grid-cols-2 lg:grid-flow-row sm:flex sm:gap-7 sm:flex-col">
        <div className="flex flex-col gap-7 sm:text-center sm:order-2">
          <h2
            className="text-white text-[1.875rem] font-bold"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Our Facilities
          </h2>
          <div className="flex gap-[50px]">
            <ul className="flex flex-col gap-2.5">
              <li className=" text-lg font-normal transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                Indian Menu
              </li>
              <li className=" text-lg font-normal transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                Menu Item
              </li>
              <li className=" text-lg font-normal transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                Private Event
              </li>
              <li className=" text-lg font-normal transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                Italian Menu
              </li>
              <li className=" text-lg font-normal transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                Best Offer
              </li>
            </ul>
            <ul className="flex flex-col gap-2.5 text-lg font-normal">
              <li className=" text-lg font-normal transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                Popular Item
              </li>
              <li className=" text-lg font-normal transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                Regular Menu
              </li>
              <li className=" text-lg font-normal transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                New Food
              </li>
              <li className=" text-lg font-normal transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                Special Offer
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[300px] h-[300px] border border-[hsla(0,0%,100%,.15)] rounded-full flex flex-col gap-5 items-center justify-center sm:order-1">
          <img src={logoSVG} alt="logo" className="" />
          <div className="flex flex-col gap-2 items-center">
            <p className="text-center font-bold text-lg tracking-[.2rem]">
              Established . 2022
            </p>
            <div className="flex items-center gap-3 text-[#bf9444] ">
              -----------------------
              <img src={subTitVec} alt="sub-title-vec" className="" />
              -----------------------
            </div>
            <div className="flex justify-center items-center gap-5 text-white">
              <div className="group flex items-center justify-center p-2 border border-[#bf9444] rounded-full transition duration-300 ease-in-out hover:cursor-pointer hover:bg-[#bf9444]">
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
                  className="text-[#ffffff] stroke-[#ffffff]"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div className="group flex items-center justify-center p-2 border border-[#bf9444] rounded-full transition duration-300 ease-in-out hover:cursor-pointer hover:bg-[#bf9444]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   width="20"
                  //   height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#ffffff] stroke-[#000000] transition duration-300 ease-in-out hover:cursor-pointer group-hover:stroke-[#bf9444]"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <div className="group flex items-center justify-center p-2 border border-[#bf9444] rounded-full transition duration-300 ease-in-out hover:cursor-pointer hover:bg-[#bf9444]">
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
                  className="text-[#ffffff] stroke-[#ffffff]"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="group flex items-center justify-center p-2 border border-[#bf9444] rounded-full transition duration-300 ease-in-out hover:cursor-pointer hover:bg-[#bf9444]">
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
                  className="text-[#ffffff] stroke-[#ffffff]"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 w-1/2 xl:w-1/3 lg:w-full sm:text-center sm:order-3">
          <h2
            className="text-white text-[1.875rem] font-bold"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Address Info
          </h2>
          <ul className="flex flex-col gap-2.5 text-lg font-normal">
            <li className=" text-lg font-normal ">
              <span className="text-[#bf9444]"> Phone:</span>{" "}
              <span className="transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                +880-1776-766-767
              </span>
            </li>
            <li className=" text-lg font-normal ">
              <span className="text-[#bf9444]"> Email:</span>{" "}
              <span className="transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                info@example.com
              </span>
            </li>
            <li className=" text-lg font-normal ">
              <span className="text-[#bf9444]"> Fax ID:</span>{" "}
              <span className="transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                +99-75667-786
              </span>
            </li>
            <li className=" text-lg font-normal ">
              <span className="text-[#bf9444]">Location:</span>{" "}
              <span className="transition duration-300 ease-in-out hover:text-[#bf9444] hover:cursor-pointer">
                Mirpur DOHS,House-167/170, Road-02 Avenue-01.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-2.5 border-t border-[hsla(0,0%,100%,.15)] w-full flex justify-between sm:flex-col sm:text-center">
        <p className="text-[#ffffff] text-base font-normal">
          @Copyright by Egenslab -2023, All Right Reserved.
        </p>
        <p className="text-[#ffffff] text-base font-normal">
          Privacy & Policy | Terms & Conditions
        </p>
      </div>
    </div>
  );
};
