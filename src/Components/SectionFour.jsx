import subTitVec from "../assets/sub-title-vec.svg";
import itemOne from "../assets/SecFour/food-item-1.png";
import itemTwo from "../assets/SecFour/food-item-2.png";
import itemThree from "../assets/SecFour/food-item-3.png";
import itemFour from "../assets/SecFour/food-item-4.png";
import itemFive from "../assets/SecFour/food-item-5.png";
import itemSix from "../assets/SecFour/food-item-6.png";

export const SectionFour = () => {
  return (
    <div className="min-h-screen text-black py-[120px] flex flex-col gap-[120px] justify-center items-center">
      <section className="w-[1320px] flex flex-col gap-12 2xl:w-[1240px] xl:w-[740px] lg:w-[620px] sm:w-[100%]">
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
      <section></section>
      <section></section>
    </div>
  );
};
