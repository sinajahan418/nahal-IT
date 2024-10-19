import React from "react";
import PackageType from "./Packages";
import { FaArrowLeftLong } from "react-icons/fa6";

const PackageIem = ({ item }: PackageType) => {
  return (
    <div className="flex shadow-xl border-[1px] m-2 p-3 rounded-lg border-slate-300 items-center justify-center flex-col">
      <div>
        <span className="text-3xl">{item.icon}</span>
      </div>
      <div className="text-xl font-bold py-3 text-blue-600">
        <h2>{item.name}</h2>
      </div>
      <div className="text-xs font-medium">
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای
          <em className="text-slate-400">
            فعلی تکنولوژی مورد نیاز،در این صورت می توان امید داشت که تمام و در
            ارائه راهکارها، د.
          </em>
        </p>
      </div>
      <button className="flex items-center gap-2 px-3 p-2 text-white font-bold rounded-lg shadow-xl  mt-6 bg-[#24a11d]">
        <span>
          <FaArrowLeftLong />
        </span>
        <span className="text-[10px] md:text-[16px]">مشاهده ادامه مطلب و ثبت سفارش</span>
      </button>
    </div>
  );
};

export default PackageIem;
