import React from "react";
import About from '../../assets/about.jpeg'
import {ABOUT} from '../../constants' 

function Aboutsection() {
  return (
    <>
    <h1 className="text-3xl text-center mt-5 md:mt-0 ">About Us</h1>
    <div className="flex flex-col md:flex-row  lg:flex-row  w-full h-auto  gap-8 p-[12%]">

      <div id="div1" className=" md:-rotate-[5deg]">
        <img src={About} alt="" className="rounded-3xl h-[70%] md:h-[90%]  p-5 md:p-0 "  />
      </div>

      <div id="div2" className="flex flex-col">
        <h1 className="text-3xl">{ABOUT.header}</h1>
        <div className=" md:mx-2 w-[100px] h-[2px] bg-pink-400"></div>
        <p className="text-sm md:px-2 mt-1  w-[90%] lg:w-[70%] tracking-tighter leading-relaxed ">{ABOUT.content}</p>
      </div>

    </div>
  </>
  );
}

export default Aboutsection;
