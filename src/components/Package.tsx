import React from "react";
import { Packages } from "./Packages";
import PackageIem from "./PackageIem";
import PackageType from "./Packages";

const Package = () => {
  return (
    <div>
      <div className="font-bold flex flex-col items-center justify-center m-4 ">
        <h1 className="text-2xl">
          پیکیج های <em className="text-green-500">نهال آی تی</em>
        </h1>
        <div className=" flex items-center p-1 gap-3 justify-center">
          <div className="h-[2px] w-5 bg-green-500"></div>
          <div className="h-[2px] w-14 bg-green-500"></div>
          <div className="h-[2px] w-5 bg-green-500"></div>
        </div>
      </div>
      <div className="m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Packages.map((itam : PackageType ) => (
          <PackageIem key={itam.id} item={itam} />
        ))}
      </div>
    </div>
  );
};

export default Package;
