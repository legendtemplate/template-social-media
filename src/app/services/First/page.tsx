import React from "react";
import Image from "next/image";
import { FaFontAwesomeFlag } from "react-icons/fa";

export default function first() {
  return (
    <>
      <section className="service container mx-auto py-8 px-6 h-auto">
        <div>
          <h1 className="text-black font-bold text-3xl relative h-auto w-full pb-1 ">
            Services
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="bg-red-500 hover:bg-gray-50 p-16 text-white transition-all hover:text-black my-5  shadow-xl rounded flex flex-col justify-center items-center">
              <div className="icon text-7xl py-6 ">
                <FaFontAwesomeFlag />
              </div>
              <div className="head font-bold text-2xl leading-8">
                Artifical Intelligence
              </div>
            </div>
            <div className="bg-red-500 hover:bg-gray-50 p-16 text-white transition-all hover:text-black my-5  shadow-xl rounded flex flex-col justify-center items-center">
              <div className="icon text-7xl py-6 ">
                <FaFontAwesomeFlag />
              </div>
              <div className="head font-bold text-2xl leading-8">
              Internet of Things
              </div>
            </div>
            <div className="bg-red-500 hover:bg-gray-50 p-16 text-white transition-all hover:text-black my-5  shadow-xl rounded flex flex-col justify-center items-center">
              <div className="icon text-7xl py-6 ">
                <FaFontAwesomeFlag />
              </div>
              <div className="head font-bold text-2xl leading-8">
                Graphic Designer
              </div>
            </div>
            <div className="bg-red-500 hover:bg-gray-50 p-16 text-white transition-all hover:text-black my-5  shadow-xl rounded flex flex-col justify-center items-center">
              <div className="icon text-7xl py-6 ">
                <FaFontAwesomeFlag />
              </div>
              <div className="head font-bold text-2xl leading-8">
                Web Designer
              </div>
            </div>
            <div className="bg-red-500 hover:bg-gray-50 p-16 text-white transition-all hover:text-black my-5  shadow-xl rounded flex flex-col justify-center items-center">
              <div className="icon text-7xl py-6 ">
                <FaFontAwesomeFlag />
              </div>
              <div className="head font-bold text-2xl leading-8">
                Machine Learning
              </div>
            </div>
            <div className="bg-red-500 hover:bg-gray-50 p-16 text-white transition-all hover:text-black my-5  shadow-xl rounded flex flex-col justify-center items-center">
              <div className="icon text-7xl py-6 ">
                <FaFontAwesomeFlag />
              </div>
              <div className="head font-bold text-2xl leading-8">
                Web Development
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
