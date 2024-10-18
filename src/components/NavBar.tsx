import React from "react";
import { FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className=" hidden lg:block container mx-auto  px-[5%]">
      <div className="bg-[#c8f0c6] flex items-center py-3 font-bold rounded-lg shadow-xl justify-center">
        <ul className="flex items-center gap-3">
          <div className="flex items-center justify-center px-4 border-r-[1px] border-slate-300 gap-1">
            <li className=""> آموزش ورود</li>
          </div>
          <div className="flex items-center justify-center px-4 border-r-[1px] border-slate-300 gap-1">
            <li className=""> تماس با ما</li>
          </div>
          <div className="flex items-center justify-center px-4 border-r-[1px] border-slate-300 gap-1">
            <li className=""> درباره ما</li>
          </div>
          <div className="flex items-center justify-center px-4 border-r-[1px] border-slate-300 gap-1">
            <li className=""> بلاگ</li>
          </div>
          <div className="flex items-center justify-center px-4 border-r-[1px] border-slate-300 gap-1">
            <li className="">استخدام</li>
          </div>
          <div className="flex items-center justify-center px-4 border-r-[1px] border-slate-300 gap-1">
            <span className="text-[16px] text-slate-500">
              <FaAngleDown />
            </span>
            <li className="">نمونه کارها</li>
          </div>
          <div className="flex items-center justify-center px-4 border-r-[1px] border-slate-300 gap-1">
            <span className="text-[16px] text-slate-500">
              <FaAngleDown />
            </span>
            <li className="">محصولات</li>
          </div>
          <div>
            <li className="costomer">صفحه اصلی</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
