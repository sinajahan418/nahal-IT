import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { PiVanLight } from "react-icons/pi";
import { TbCreditCardPay } from "react-icons/tb";

const About = () => {
  return (
    <div className="m-8 p-9 gap-5 rounded-lg shadow-xl border-[1px] border-slate-300 grid grid-cols-2 md:grid-cols- lg:grid-cols-4">
      <div className="bg-[#c2fabf] flex flex-col items-center justify-center rounded-lg shadow-xl border-[1px] border-slate-300 ">
        <span className="text-2xl md:text-4xl pt-3">
          <MdPhoneInTalk />
        </span>
        <span className="text-[7px] md:text-xl  p-3 font-bold">
          پشتیبانی قوی به صورت آنی
        </span>
      </div>
      <div className="bg-[#c2fabf] flex flex-col items-center justify-center rounded-lg shadow-xl border-[1px] border-slate-300 ">
        <span className="text-2xl md:text-4xl pt-3">
          <PiVanLight />
        </span>
        <span className="text-[7px] md:text-xl  p-3 font-bold">
          پشتیبانی قوی به صورت آنی
        </span>
      </div>
      <div className="bg-[#c2fabf] flex flex-col items-center justify-center rounded-lg shadow-xl border-[1px] border-slate-300 ">
        <span className="text-2xl md:text-4xl pt-3">
          <TbCreditCardPay />
        </span>
        <span className="text-[7px] md:text-xl  p-3 font-bold">
          پرداخت اقساطی
        </span>
      </div>
      <div className="bg-[#c2fabf] flex flex-col items-center justify-center rounded-lg shadow-xl border-[1px] border-slate-300 ">
        <span className="text-2xl md:text-4xl pt-3">
        <FaLaptopCode />
        </span>
        <span className="text-[7px] md:text-xl  p-3 font-bold">
          پشتیبانی قوی به صورت آنی
        </span>
      </div>
    </div>
  );
};

export default About;
