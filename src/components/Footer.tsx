import React from "react";
import img from "../components/img/ENAMADpng.parspng.com_.png";
import { CiLocationOn, CiYoutube } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ImTelegram } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  console.log(img);

  return (
    <div className="m-10">
      <footer className="pt-1 bg-green-600 rounded-lg shadow-lg">
        <div className="pt-2 flex md:flex-row flex-col items-center justify-between gap-7 pl-10 bg-[#a8f789]">
          <div className="flex flex-col  items-center justify-center">
            <img
              src="/_next/static/media/ENAMADpng.parspng.com_.2228c8f4.png"
              alt=""
            />
            <img
              src="/_next/static/media/ENAMADpng.parspng.com_.2228c8f4.png"
              alt=""
            />
          </div>
          <div>
            <div className="flex md:flex-row h- flex-col gap-6">
              <div className="bg-[#bef1b1] p-3 rounded-lg shadow-xl md:w-[50%] flex rtl flex-col">
                <span className="font-bold  p-3">ارتباط با ما:</span>
                <div className="flex font-bold flex-row items-center gap-2 ">
                  <span className="text-xl">
                    <CiLocationOn />
                  </span>
                  <p>
                    میدان فردوسی خیابان ایرانشهر مجتمع تجاری میلاد طبقه 5 واحد ۹
                  </p>
                </div>
                <div className="flex font-bold flex-row items-center gap-2 ">
                  <span className="text-xl">
                    <AiOutlinePhone />
                  </span>
                  <p>09926553469</p>
                </div>
                <div className="flex font-bold flex-row items-center gap-2 ">
                  <span className="text-xl">
                    <FaGoogle />
                  </span>
                  <p>sinajahan418@gmail.com</p>
                </div>
              </div>
              <div className="rtl bg-[#bef1b1] md:w-[50%] py-2 items-center rounded-l-lg shadow-lg  mb-2 flex md:flex-row flex-col">
                <span className="text-green-500 w-[70%] text-3xl font-bold">
                  نهال <em>آی تی</em>
                </span>
                <p className=" p-2 font-bold">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                </p>
              </div>
            </div>
            <div className="flex rtl items-center justify-center ">
              <div className="flex w-[70%] flex-row gap-9 bg-[#bef1b1] rounded-l-lg shadow-xl my-3 rtl py-2 p-1">
                <span>لینک های کمکی:</span>
                <ul className=" flex flex-row gap-12 font-medium">
                  <li>درباره ما</li>
                  <li>درباره ما</li>
                  <li>درباره ما</li>
                  <li>درباره ما</li>
                  <li>درباره ما</li>
                  <li className="font-bold">ساست و حریم خصوصی</li>
                </ul>
              </div>
              <div className="flex w-[30%] items-center flex-row gap-9 py-2 bg-[#bef1b1] rounded-lg shadow-xl m-3 rtl p-1">
                <span>ما را دنبال کنید:</span>
                <ul className=" flex flex-row text-slate-600 text-[17px] gap-4 font-medium">
                  <li className="bg-slate-400 p-1 rounded-full shadow-xl">
                    {" "}
                    <ImTelegram />
                  </li>
                  <li className="bg-slate-400 p-1 rounded-full shadow-xl">
                    <FaInstagram />
                  </li>
                  <li className="bg-slate-400 p-1 rounded-full shadow-xl">
                    {" "}
                    <FaXTwitter />
                  </li>
                  <li className="bg-slate-400 p-1 rounded-full shadow-xl">
                    {" "}
                    <FaWhatsapp />
                  </li>
                  <li className="bg-slate-400 p-1 rounded-full shadow-xl">
                    <CiYoutube />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
