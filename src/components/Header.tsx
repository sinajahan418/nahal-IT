import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";

const Header = () => {
  return (
    <div className="rtl">
      <header className=" container flex items-center justify-between mx-auto mt-3 border-[1px] rounded-lg shadow-xl p-4">
        <div className="flex  w-[50%] items-center   gap-5">
          <h1 className="text-[20px] w-[20%] font-bold text-green-500">
            نهاد <em className="text-black">ای تی</em>
          </h1>
          <div className="flex items-center border-[1px] border-slate-300 shadow-lg w-[100%] rounded-lg px-3 py-2 justify-between gap-7">
            <input
              type="text"
              className=" focus:outline-none bg-transparent "
              placeholder="جستجو در محصولات..."
            />

            <CiSearch className="text-2xl text-slate-600" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center gap-2 font-bold text-green-500">
            <span className="costomer">فروشنده شوید</span>
            <span className=" border-2 border-green-500 rounded-full p-[2px]  font-bold">
              <BiDollar />
            </span>
          </div>
          <div className="flex items-center  justify-center py-1 rounded-lg gap-3 px-3">
            <span className="text-2xl bg-slate-300 p-2 text-slate-600 rounded-full shadow-xl">
              <IoMdHeartEmpty />
            </span>
            <span className="text-2xl bg-slate-300 p-2 text-slate-600 rounded-full shadow-xl">
              <CiShoppingBasket />
            </span>
          </div>
          <div className=" bg-[#24a11d] flex items-center text-white justify-center py-1 rounded-lg gap-1 px-3">
            <span>
              <AiOutlineUser />
            </span>
            <span>ورود </span>
            <span>|</span>
            <span>عضویت </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
