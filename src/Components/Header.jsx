import mailSVG from "../assets/mail.svg";
import locationSVG from "../assets/location.svg";



export const Header = () => {
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
    </header>
  );
};
