import React from "react";
import {REVIEW} from '../../constants'
import Customer1 from '../../assets/customer1.jpeg'
import Customer2 from '../../assets/customer2.jpeg'
import Customer3 from '../../assets/customer3.jpeg'
import Customer4 from '../../assets/customer4.jpeg'
import xaviour from '../../assets/xaviour.jpeg'
 

function Review() {
  return (
    <>
    <div className="w-full relative h-full text-4xl text-center  flex-col md:text-start md:text-5xl   font-extralight  font-sans  flex justify-center items-center  ">
        <p className=" p-12  md:p-36">{REVIEW.content}</p>
    
    <div className=" flex  justify-center items-center gap-x-4 ">
        <img src={xaviour} className="rounded-[100px] " height={60} width={60} alt="" />
        <div className="flex flex-col text-start tracking-normal font-light font-Inter  ">
            <h3 className="font-semibold text-sm  ">{REVIEW.name}</h3>
            <h5 className="text-gray-400 text-sm">{REVIEW.profession}</h5>
        </div>
    </div>
      <div className="w-full h-full  flex  flex-col gap-y-3 md:flex-row  items-center justify-center  gap-x-2 mt-14 px-8  ">
          {
          [Customer1,Customer2,Customer3,Customer4].map((cust,index)=>(<img key={index} src={cust} className="object-cover w-[200px] h-[250px] rounded-tl-3xl rounded-br-3xl "  alt="" />))
          }
      </div>
    </div>
    </>
  )
}

export default Review




