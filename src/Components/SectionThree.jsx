import subTitVec from "../assets/sub-title-vec.svg";
import imgOne from "../assets/SecThree/img-one.png";
import imgTwo from "../assets/SecThree/img-two.png";
import imgThree from "../assets/SecThree/img-three.png";

export const SectionThree = () => {
  return (
    <div className="h-[calc(100vh-80px)] sec-three py-20 flex flex-col justify-center items-center gap-10">
      <div className="flex gap-[5px] flex-col items-center">
        <div className="flex gap-2.5">
          <img src={subTitVec} alt="sub-title-vec" className="" />
          <p className="text-[#bf9444] text-lg font-normal">Our New Item</p>
          <img src={subTitVec} alt="sub-title-vec" className="" />
        </div>
        <h2
          className="text-[3.75rem] font-bold"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Restho New Item List
        </h2>
        <p className="text-[hsla(0,0%,100%,.8)] pt-2.5 text-lg font-normal">
          Various versions have evolved over the years, sometimes on purpose.
        </p>
      </div>
      <div className="flex justify-center items-center gap-16 2xl:gap-4">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img src={imgOne} alt="img-one" className="" />
            <div className="absolute bottom-8 right-[180px] bg-white transform rotate-45 w-[60px] h-[60px] rounded-[10px] flex justify-center items-center group transition duration-300 ease-in-out hover:bg-[#bf9444]">
              <p className="text-gray-500 text-lg font-semibold transform -rotate-45 transition duration-300 ease-in-out group-hover:text-white group-hover:bg-[#bf9444]">
                $32
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-center w-[280px]">
            <h4
              className="font-bold text-[2rem]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Soup with egg
            </h4>
            <p className="text-lg font-normal text-center">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img src={imgTwo} alt="img-two" className="" />
            <div className="absolute bottom-8 right-[180px] bg-white transform rotate-45 w-[60px] h-[60px] rounded-[10px] flex justify-center items-center group transition duration-300 ease-in-out hover:bg-[#bf9444]">
              <p className="text-gray-500 text-lg font-semibold transform -rotate-45 transition duration-300 ease-in-out group-hover:text-white group-hover:bg-[#bf9444]">
                $32
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-center w-[280px]">
            <h4
              className="font-bold text-[2rem]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Prawn Fried
            </h4>
            <p className="text-lg font-normal text-center">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img src={imgThree} alt="img-three" className="" />
            <div className="absolute bottom-8 right-[180px] bg-white transform rotate-45 w-[60px] h-[60px] rounded-[10px] flex justify-center items-center group transition duration-300 ease-in-out hover:bg-[#bf9444]">
              <p className="text-gray-500 text-lg font-semibold transform -rotate-45 transition duration-300 ease-in-out group-hover:text-white group-hover:bg-[#bf9444]">
                $32
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-center w-[280px]">
            <h4
              className="font-bold text-[2rem]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Prawn with noodles
            </h4>
            <p className="text-lg font-normal text-center">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
