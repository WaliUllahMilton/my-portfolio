import React, { useState } from 'react'
import { FaArrowDown } from "react-icons/fa6";
import {Link} from "react-router-dom"
const Service = () => {
  const [services,setServices]=useState([
    {
      number: "01",
      title:"Web Developement",
      disc:"hdshaj"
    },
    {
      number: "02",
      title:"Web Developement",
      disc:"hdshaj"
    },
    {
      number: "03",
      title:"Web Developement",
      disc:"hdshaj"
    },
    {
      number: "04",
      title:"Web Developement",
      disc:"hdshaj"
    },
  ])
  const [active,setActive]=useState(null)
  console.log(active)
  return (
    <div className='static top-14 left-[70px] md:w-container flex flex-col md:flex-row  mt-[3vw] md:gap-[3vw] gap-10 items-center justify-between flex-wrap mx-auto'>
      {
        services?.map((item,index)=>(
          <Link key={index}
           onMouseEnter={()=>setActive(index)}
           onMouseLeave={()=>setActive(null)}
           className='border-b-[1px] font-jet pb-[2.5vw]  text-white w-[60vw] md:w-[35vw]'>
        <div className='flex justify-between items-center'>
          <h2 className=' md:text-[2.5vw] font-extrabold stroke-1 text-outline text-transparent '>{item.number}</h2>
          <p className='md:w-[40px] w-6 h-6 md:h-[40px] relative bg-white rounded-full'><FaArrowDown 
          className={`md:text-2xl  absolute left-[50%] top-[25%] -translate-x-[50%] translate-y[50%] -rotate-45 transition-all ease-in-out duration-500 text-center ${active == index ? "text-[#01FE99] -rotate-90": "text-black"}`}/></p>
        </div>
        <div className='my-4 text-base leading-3 font-bold'>{item.title}</div>
        <div className='text-base text-[12px]'>{item.disc}</div>
      </Link>
        ))
      }
    </div>
  )
}

export default Service