import React from "react";
import Image from "next/image";
import {
  FaFontAwesomeFlag,
  FaGraduationCap,
  FaHeadSideVirus,
  FaMicrochip,
} from "react-icons/fa";
import { FcBullish } from "react-icons/fc";
import Service from './service.png'

import Head from 'next/head'
const title = 'Service section 3'
const description = 'Service section 3 Tailwind CSS'
const siteName = 'Service'
const ogType = 'website'
export default function first() {
  return (
    <>
      <Head>
       <title key="title">{`${title} – ${siteName}`}</title>
      <meta name="description" content={description} />
       <meta key="og_type" property="og:type" content={ogType} />
       <meta key="og_title" property="og:title" content={title} />
      <meta key="og_description" property="og:description" content={description} />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
       <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_image" property="og:image" content="/service/service-1.png" />
       <meta key="og_image:alt" property="og:image:alt" content={`${title} | ${siteName}`} />
       <meta key="og_image:width" property="og:image:width" content="1200" />
       <meta key="og_image:height" property="og:image:height" content="630" />
        <meta name="robots" content="index,follow" />
       <meta key="twitter:card" name="twitter:card" content="/service/service-1.png" />
       <meta key="twitter:title" property="twitter:title" content={title} />
       <meta key="twitter:description" property="twitter:description" content={description} />
       <link rel="shortcut icon" href="/favicon.ico" />
    </Head> 
      <section className="service container mx-auto py-8 h-auto">
        <div>
          <h2 className="text-black font-bold text-4xl relative h-auto w-full pb-1 text-center ">
            Our Services <span className="text-red-500">.</span>
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="card bg-gray-200 p-10 transition-all my-5 border-b-8 border-solid  border-red-500 rounded flex flex-col justify-center items-center hover:shadow-xl">
              <div className="icon text-5xl text-white bg-red-500 p-5 rounded-full">
                <FaMicrochip />
              </div>
                <h3 className="font-bold text-xl leading-8  text-center my-4">
                  Artifical Intelligence
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate doloribus eveniet rem ullam debitis tenetur.
                </p>
            </div>
            <div className="card bg-gray-200 p-10 transition-all my-5 border-b-8 border-solid  border-red-500 rounded flex flex-col justify-center items-center hover:shadow-xl">
              <div className="icon text-5xl text-white bg-red-500 p-5 rounded-full">
                <FaMicrochip />
              </div>
                <h3 className="font-bold text-xl leading-8  text-center my-4">
                  Artifical Intelligence
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate doloribus eveniet rem ullam debitis tenetur.
                </p>
            </div>
            <div className="card bg-gray-200 p-10 transition-all my-5 border-b-8 border-solid  border-red-500 rounded flex flex-col justify-center items-center hover:shadow-xl">
              <div className="icon text-5xl text-white bg-red-500 p-5 rounded-full">
                <FaMicrochip />
              </div>
                <h3 className="font-bold text-xl leading-8  text-center my-4">
                  Artifical Intelligence
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate doloribus eveniet rem ullam debitis tenetur.
                </p>
            </div>
            <div className="card bg-gray-200 p-10 transition-all my-5 border-b-8 border-solid  border-red-500 rounded flex flex-col justify-center items-center hover:shadow-xl">
              <div className="icon text-5xl text-white bg-red-500 p-5 rounded-full">
                <FaMicrochip />
              </div>
                <h3 className="font-bold text-xl leading-8  text-center my-4">
                  Artifical Intelligence
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate doloribus eveniet rem ullam debitis tenetur.
                </p>
            </div>
            <div className="card bg-gray-200 p-10 transition-all my-5 border-b-8 border-solid  border-red-500 rounded flex flex-col justify-center items-center hover:shadow-xl">
              <div className="icon text-5xl text-white bg-red-500 p-5 rounded-full">
                <FaMicrochip />
              </div>
                <h3 className="font-bold text-xl leading-8  text-center my-4">
                  Artifical Intelligence
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate doloribus eveniet rem ullam debitis tenetur.
                </p>
            </div>
            <div className="card bg-gray-200 p-10 transition-all my-5 border-b-8 border-solid  border-red-500 rounded flex flex-col justify-center items-center hover:shadow-xl">
              <div className="icon text-5xl text-white bg-red-500 p-5 rounded-full">
                <FaMicrochip />
              </div>
                <h3 className="font-bold text-xl leading-8  text-center my-4">
                  Artifical Intelligence
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate doloribus eveniet rem ullam debitis tenetur.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
