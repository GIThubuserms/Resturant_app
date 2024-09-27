import React, { useState } from "react";
import { LINKS } from "../../constants/index";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

function Headersection() {
  const [ismobile, setismobile] = useState(false);

  const handlemobile = () => {
    setismobile(!ismobile);
  };

  return (
    <nav className="fixed top-4 z-50 w-full ml-[10%] lg:flex-col sm:flex-col items-center justify-center  ">
      <div className="flex  p-2  w-[80%] overflow-y-hidden items-center justify-center    lg:backdrop-blur-sm lg:m-2 lg-w-[50rem] lg:rounded-full lg:shadow-lg ">
        <div className=" h-full w-full items-center flex  ">
          <img src={logo} height={22} width={80} alt="" />
        </div>
        <div className=" hidden md:flex lg:flex space-x-5 ">
          {LINKS.map((link, index) => (
            <Link
              key={index}
              className=" text-sm pl-5  md:pl3 hover:text-[13px] transition-all ease-in border-none "
             to={`${link.text.toLowerCase()}`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <button onClick={handlemobile} className="md:hidden w-full lg:hidden flex  justify-end ">
          {ismobile ? <FaTimes /> : <FaBars />}
        </button>       

     
        </div>
           
        {ismobile ? (
            <div className="  pl-1 relative  backdrop-blur-sm  md:hidden w-full lg:hidden flex  flex-col uppercase  ">
              {LINKS.map((link, index) => (
                <Link
                  key={index}
                  className="text-sm md:pl3  hover:text-[13px] p-2 tracking-tighte font-sans  transition-all ease-in "
                  to={`${link.text.toLowerCase()}`}
                  >
                  {link.text}
                </Link>
              ))}
            </div>
          ) : null}
    </nav>
  );
}

export default Headersection;
