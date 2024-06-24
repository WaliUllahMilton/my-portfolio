// import React from 'react'

import { useState } from "react"
import Nav from "../components/Nav"
import { TiThMenuOutline } from "react-icons/ti";
// import { GoDotFill } from "react-icons/go";

import { Link } from "react-router-dom";
const Home = () => {
  let [toggleValue,setToggleValue]=useState(false)
  const handleTogglebtn = ()=>{
    setToggleValue(!toggleValue)
    }
  
  return (
    <div className="max-w-screen-lg mx-auto mt-4">
        <header className="relative flex flex-col sm:flex-row items-center justify-between">
            <div className="">
                <Link
                className="font-jet flex text-2xl text-white font-extrabold"
                >Milton 
                <span className="text-[#01FE99] font-jet text-2xl" >
                  .
                </span></Link>
                <button
                className="text-white text-lg sm:hidden "
                 onClick={handleTogglebtn}
                >
                  <TiThMenuOutline/>
                </button>
            </div>
            <div className= {`transition-all h-full duration-500 ease-in-out ${toggleValue ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}  `}
            >
                <Nav/>
            </div>
        </header>
        
    </div>
  )
}

export default Home