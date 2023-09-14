import thaiSoupImg from "../assets/SecTwo/thai-soup.png";
import seaFoodImg from "../assets/SecTwo/sea-food.png";
import meatMasalaImg from "../assets/SecTwo/meat-masala.png";
import vegetarianImg from "../Assets/SecTwo/vegetarian.png";
import subTitVec from "../assets/sub-title-vec.svg";
import vegeSVG from "../Assets/SecTwo/carrot-vege.svg";
import chefSVG from "../Assets/SecTwo/chef-cap.svg";
import aboutTopImg from "../Assets/SecTwo/about-top.png";
import aboutBottomImg from "../Assets/SecTwo/about-bottom.png";
import aboutLeftImg from "../Assets/SecTwo/about-left.png";
import aboutRightImg from "../Assets/SecTwo/about-right.png";

export const SectionTwo = () => {
  return (
    <section className="text-black h-screen flex flex-col gap-[80px] py-[80px] px-48 2xl:px-20 2xl:pb[120px]">
      <div className="flex justify-between items-center">
        <div className="relative w-[270px] border border-[#eeee] py-5 pr-[15px] pl-[110px] rounded-[5px] flex flex-col items-end 2xl:pr-2.5  2xl:w-[250px]">
          <div className="">
            <h4
              className="text-[1.625rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Thai Soup
            </h4>
            <p className="text-[1rem] font-normal">
              Lorem ipsum dolor sit amet consectet.
            </p>
          </div>
          <img
            src={thaiSoupImg}
            alt="thai-soup"
            className="absolute -top-4 -left-14"
          />
        </div>
        <div className="relative w-[270px] border border-[#eeee] py-5 pr-[15px] pl-[110px] rounded-[5px] flex flex-col items-end 2xl:pr-2.5  2xl:w-[250px]">
          <div className="">
            <h4
              className="text-[1.625rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Sea Food
            </h4>
            <p className="text-[1rem] font-normal">
              Lorem ipsum dolor sit amet consectet.
            </p>
            <img
              src={seaFoodImg}
              alt="sea-food"
              className="absolute -top-4 -left-14"
            />
          </div>
        </div>
        <div className="relative w-[270px] border border-[#eeee] py-5 pr-[15px] pl-[110px] rounded-[5px] flex flex-col items-end 2xl:pr-2.5  2xl:w-[250px]">
          <div className="">
            <h4
              className="text-[1.625rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Meat Masala
            </h4>
            <p className="text-[1rem] font-normal">
              Lorem ipsum dolor sit amet consectet.
            </p>
            <img
              src={meatMasalaImg}
              alt="meat-masala"
              className="absolute -top-4 -left-14"
            />
          </div>
        </div>
        <div className="relative w-[270px] border border-[#eeee] py-5 pr-[15px] pl-[110px] rounded-[5px] flex flex-col items-end 2xl:pr-2.5  2xl:w-[250px]">
          <div className="">
            <h4
              className="text-[1.625rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Vegetarian
            </h4>
            <p className="text-[1rem] font-normal">
              Lorem ipsum dolor sit amet consectet.
            </p>
            <img
              src={vegetarianImg}
              alt="vegetarian"
              className="absolute -top-4 -left-14"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[200px] items-center">
        <div className="relative w-[520px]">
          <>
            <img
              src={aboutTopImg}
              alt="top"
              className="absolute bottom-[15px] right-[52px] w-[240px] fadeInOut"
            />
            <img
              src={aboutBottomImg}
              alt="bottom"
              className="absolute -top-[10px] right-14 w-[240px] fadeInOut"
            />
            <img
              src={aboutLeftImg}
              alt="left"
              className="absolute -top-[135px] right-[180px] w-[240px] fadeInOut"
            />
            <img
              src={aboutRightImg}
              alt="right"
              className="absolute -top-[130px] -right-[70px] w-[240px] fadeInOut"
            />
          </>
        </div>
        <div className="w-[710px] flex flex-col gap-7">
          <div className="flex flex-col gap-[5px]">
            <div className="flex gap-2.5">
              <img src={subTitVec} alt="sub-title-vec" className="" />
              <p className="text-[#bf9444] text-lg font-normal">
                About to Restho
              </p>
              <img src={subTitVec} alt="sub-title-vec" className="" />
            </div>
            <h2
              className="text-[3.75rem] font-bold"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Come to Our Restaurant, Ready Your Food.
            </h2>
            <p className="text-[#5e5e5e] pt-2.5 text-lg font-normal">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="flex gap-[50px]">
            <div className="flex gap-5">
              <div className="h-[60px] w-[60px] flex justify-center items-center border border-[#bf9444] rounded-[5px] mt-0.5">
                <img src={vegeSVG} alt="vege-svg" />
              </div>
              <div className="w-[180px] flex gap-[5px] flex-col">
                <h5
                  className="text-[#09161d] text-[1.563rem] font-bold"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Pure Fresh Food.
                </h5>
                <p className="text-[#5e5e5e] text-lg font-normal">
                  We are serve different type of fresh food.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="h-[60px] w-[60px] flex justify-center items-center border border-[#bf9444] rounded-[5px] mt-0.5">
                <img src={chefSVG} alt="chef-svg" />
              </div>
              <div className="w-[180px] flex gap-[5px] flex-col">
                <h5
                  className="text-[#09161d] text-[1.563rem] font-bold"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Experties Chef.
                </h5>
                <p className="text-[#5e5e5e] text-lg font-normal">
                  We are serve different type of fresh food.
                </p>
              </div>
            </div>
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
        </div>
      </div>
    </section>
  );
};
