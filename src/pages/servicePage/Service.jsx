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
    <div className='w-container flex mt-12 gap-4 justify-between flex-wrap mx-auto'>
      {
        services?.map((item,index)=>(
          <Link key={index}
           onMouseEnter={()=>setActive(index)}
           onMouseLeave={()=>setActive(null)}
           className='border-b-[1px] font-jet pb-8 text-white w-[35vw]'>
        <div className='flex justify-between items-center'>
          <h2 className=' text-[2.5vw] font-extrabold stroke-1 text-outline text-transparent '>{item.number}</h2>
          <p className='w-10 h-10 relative bg-white rounded-full'><FaArrowDown 
          className={`text-2xl  absolute left-[50%] top-[25%] -translate-x-[50%] translate-y[50%] -rotate-45 transition-all ease-in-out duration-500 text-center ${active == index ? "text-[#01FE99] -rotate-90": "text-black"}`}/></p>
        </div>
        <div className='my-4'>{item.title}</div>
        <div className='text-base'>{item.disc}</div>
      </Link>
        ))
      }
    </div>
  )
}

export default Service