import subTitVec from "../assets/sub-title-vec.svg";
import blogImgOne from "../assets/SecSix/blog1.png";
import blogImgTwo from "../assets/SecSix/blog2.png";
import blogImgThree from "../assets/SecSix/blog3.png";

export const SectionSix = () => {
  return (
    <div className="text-black py-[120px] flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-1.5 items-center">
        <div className="flex gap-2.5">
          <img src={subTitVec} alt="sub-title-vec" className="" />
          <p className="text-[#bf9444] text-lg font-normal">Our Blog</p>
          <img src={subTitVec} alt="sub-title-vec" className="" />
        </div>
        <h3
          className="text-[3.75rem] font-bold"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Our Latest Blog
        </h3>
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-8 w-full px-36">
        <div className="">
          <div className="relative w-[90%] mx-auto">
            <img
              src={blogImgOne}
              alt="blog-1"
              className="z-10 rounded-[10px] w-full"
            />
            <div className="absolute top-3 right-3 w-[60px] h-[60px] rounded-[10px] group flex items-center justify-center flex-col gap-0 bg-white transition duration-300 ease-in-out hover:cursor-pointer hover:bg-[#bf9444]">
              <p className="font-semibold text-lg text-[#bf9444] transition duration-300 ease-in-out group-hover:text-white">
                17
              </p>
              <p className="font-normal text-base text-[#bf9444] transition duration-300 ease-in-out group-hover:text-white">
                Apr
              </p>
            </div>
          </div>
          <div className="rounded-[10px] border border-[#eee] pt-[95px] px-[30px] pb-[30px] -mt-[65px] flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2.5">
              <p className="text-[#5e5e5e] text-base font-normal text-center">
                ------ By Clone Watson
              </p>
              <h4
                className="text-[1.75rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                To Make Good Health Take Nutrition Food.
              </h4>
            </div>
            <button className="button-with-arrow text-[#bf9444] px-[23px] py-[13px] rounded-[50px] group flex gap-1.5 border border-[#bf9444] transition duration-300 ease-in-out w-max hover:text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="">
          <div className="relative w-[90%] mx-auto">
            <img
              src={blogImgTwo}
              alt="blog-2"
              className="z-10 rounded-[10px] w-full"
            />
            <div className="absolute top-3 right-3 w-[60px] h-[60px] rounded-[10px] group flex items-center justify-center flex-col gap-0 bg-white transition duration-300 ease-in-out hover:cursor-pointer hover:bg-[#bf9444]">
              <p className="font-semibold text-lg text-[#bf9444] transition duration-300 ease-in-out group-hover:text-white">
                18
              </p>
              <p className="font-normal text-base text-[#bf9444] transition duration-300 ease-in-out group-hover:text-white">
                Apr
              </p>
            </div>
          </div>
          <div className="rounded-[10px] border border-[#eee] pt-[95px] px-[30px] pb-[30px] -mt-[65px] flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2.5">
              <p className="text-[#5e5e5e] text-base font-normal text-center">
                ------ By Hilary Watson
              </p>
              <h4
                className="text-[1.75rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Eat at Some Nutition Food & Happy Leadlife.
              </h4>
            </div>
            <button className="button-with-arrow text-[#bf9444] px-[23px] py-[13px] rounded-[50px] group flex gap-1.5 border border-[#bf9444] transition duration-300 ease-in-out w-max hover:text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="">
          <div className="relative w-[90%] mx-auto">
            <img
              src={blogImgThree}
              alt="blog-3"
              className="z-10 rounded-[10px] w-full"
            />
            <div className="absolute top-3 right-3 w-[60px] h-[60px] rounded-[10px] group flex items-center justify-center flex-col gap-0 bg-white transition duration-300 ease-in-out hover:cursor-pointer hover:bg-[#bf9444]">
              <p className="font-semibold text-lg text-[#bf9444] transition duration-300 ease-in-out group-hover:text-white">
                17
              </p>
              <p className="font-normal text-base text-[#bf9444] transition duration-300 ease-in-out group-hover:text-white">
                Apr
              </p>
            </div>
          </div>
          <div className="rounded-[10px] border border-[#eee] pt-[95px] px-[30px] pb-[30px] -mt-[65px] flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2.5">
              <p className="text-[#5e5e5e] text-base font-normal text-center">
                ------ By Clone Watson
              </p>
              <h4
                className="text-[1.75rem] text-center font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#bf9444]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Esay To Make Some Special Food In Home.
              </h4>
            </div>
            <button className="button-with-arrow text-[#bf9444] px-[23px] py-[13px] rounded-[50px] group flex gap-1.5 border border-[#bf9444] transition duration-300 ease-in-out w-max hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
