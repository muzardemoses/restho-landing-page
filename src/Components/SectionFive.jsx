import { useState } from "react";
import subTitVec from "../assets/sub-title-vec.svg";

export const SectionFive = () => {
  //set dfault time to current time in this format 00:00:am/pm
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));

  return (
    <div className="sec-four py-20 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-1.5 items-center">
        <div className="flex gap-2.5">
          <img src={subTitVec} alt="sub-title-vec" className="" />
          <p className="text-[#bf9444] text-lg font-normal">Online Reserve</p>
          <img src={subTitVec} alt="sub-title-vec" className="" />
        </div>
        <h3
          className="text-[3.75rem] font-bold"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          For Online Reservation
        </h3>
      </div>
      <form className="w-[60%] flex gap-6 flex-col items-center 2xl:w-[70%] xl:w-[78%]">
        <div className="w-full grid grid-cols-2 grid-flow-row gap-6 flexcol items-center">
          <input
            type="text"
            placeholder="Name*"
            className="w-full h-[55px] bg-[#09161d] p-5 rounded-[50px] border border-[hsla(0,0%,93%,.2)] text-[hsla(0,0%,100%,.5)] font-normal text-base transition duration-300 ease-in-out focus:outline-none focus:border-[#473413]"
          />
          <input
            type="text"
            placeholder="Phone*"
            className="w-full h-[55px] bg-[#09161d] p-5 rounded-[50px] border border-[hsla(0,0%,93%,.2)] text-[hsla(0,0%,100%,.5)] font-normal text-base transition duration-300 ease-in-out focus:outline-none focus:border-[#473413]"
          />
          <input
            type="text"
            placeholder="People*"
            className="w-full h-[55px] bg-[#09161d] p-5 rounded-[50px] border border-[hsla(0,0%,93%,.2)] text-[hsla(0,0%,100%,.5)] font-normal text-base transition duration-300 ease-in-out focus:outline-none focus:border-[#473413]"
          />
          <input
            type="date"
            placeholder="Check In*"
            className="w-full h-[55px] bg-[#09161d] p-5 rounded-[50px] border border-[hsla(0,0%,93%,.2)] text-[hsla(0,0%,100%,.5)] font-normal text-base transition duration-300 ease-in-out focus:outline-none focus:border-[#473413]"
          />
          <input
            type="time"
            placeholder={time}
            className="w-full h-[55px] bg-[#09161d] p-5 rounded-[50px] border border-[hsla(0,0%,93%,.2)] text-[hsla(0,0%,100%,.5)] font-normal text-base transition duration-300 ease-in-out focus:outline-none focus:border-[#473413]"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full h-[55px] bg-[#09161d] p-5 rounded-[50px] border border-[hsla(0,0%,93%,.2)] text-[hsla(0,0%,100%,.5)] font-normal text-base transition duration-300 ease-in-out focus:outline-none focus:border-[#473413]"
          />
        </div>
        <button className="button-with-white w-1/2 px-8 py-2.5 bg-[#bf9444] rounded-[50px] border border-[#bf9444] text-white font-medium text-lg transition duration-300 ease-in-out hover:text-[#bf9444]">
          Reserve Now
        </button>
      </form>
    </div>
  );
};
