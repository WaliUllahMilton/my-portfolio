import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FoodTimeImage from "../../assets/FoodTime.png"
import AgenImage from "../../assets/agenc.png"
import QweryImage from "../../assets/qwery.png"
import NumberGuessing from "../../assets/numberGuessing.png"
import BMIcalImage from "../../assets/BMIcalculator.png"
import TodoImage from "../../assets/todo.png"
import { GoProjectSymlink } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";
const Work = () => {
  const [hoverEffect,setHoverEffect]=useState(null)
  const [hoverSelect,setHoverSelect]=useState("")
  const data=  [
    {
    name:"Full responsive HTML CSS JS Food Time landing page",
    img: FoodTimeImage,
    liveLink:"https://waliullahmilton.github.io/FoodTime/",
    gitHub:"https://github.com/WaliUllahMilton/FoodTime.git"
  },
    {
    name:"Full responsive HTML CSS JS IT service landing page",
    img: AgenImage,
    liveLink:"https://waliullahmilton.github.io/agency/",
    gitHub:"https://github.com/WaliUllahMilton/agency.git"
  },
    {
    name:"HTML CSS JS Qwery landing page",
    img: QweryImage,
    liveLink:"https://waliullahmilton.github.io/Qwery/",
    gitHub:"https://github.com/WaliUllahMilton/Qwery.git"
  },
    {
    name:"Number Guessing Game",
    img: NumberGuessing,
    liveLink:"https://waliullahmilton.github.io/numberGuessing/",
    gitHub:"https://github.com/WaliUllahMilton/numberGuessing.git"
  },
    {
    name:"BMI Calculator",
    img: BMIcalImage,
    liveLink:"https://waliullahmilton.github.io/BMI_calculator/",
    gitHub:"https://waliullahmilton.github.io/BMI_calculator/"
  },
    {
    name:"Todo App",
    img: TodoImage,
    liveLink:"https://waliullahmilton.github.io/todo_list/",
    gitHub:"https://github.com/WaliUllahMilton/todo_list.git/"
  },
]
console.log(data)
  return (
    <div className='flex flex-wrap gap-6 items-center max-w-container font-jet mx-auto justify-between mt-8'>
      {
        data.map((item,index)=>(
          <div key={index} className=' relative w-[320px] cursor-pointer h-[300px] bg-gray-700  rounded-2xl overflow-hidden'>
            <div 
            onMouseLeave={()=>{setHoverEffect(null),setHoverSelect("")}}
            onMouseEnter={()=>{setHoverEffect(true), setHoverSelect(item.name)}}
            className='h-[70%] w-full relative'>
              <div className={`absolute bg-black h-full w-full  right-0 z-40
                transition-all ease-in-out duration-500 top-0
                ${hoverEffect && hoverSelect==item.name ? "opacity-50 ":" -top-[100%] opacity-0 "} `}></div>
              <picture>
                <img src={item.img} alt={item.name} className=' h-full object-cover w-full' />
              </picture>
            </div>
            <h3 className='mt-4 capitalize px-4 text-white text-base font-normal'>{item.name}</h3>
            <div
            onMouseLeave={()=>{setHoverEffect(null),setHoverSelect("")}}
            onMouseEnter={()=>{setHoverEffect(true), setHoverSelect(item.name)}}
            className={`${hoverEffect && hoverSelect==item.name ? "visible":"hidden"} absolute top-1  z-[999] right-1`}>
               <div className=' w-10 rounded-[50%] border-[1px]  hover:bg-[#01FE99] hover:text-black transition-all ease-in-out duration-500 border-[#01FE99] text-[#01FE99] mb-1 flex justify-center items-center h-10'>
               <Link className='' to={item.liveLink} title='Live link'><GoProjectSymlink/></Link>
               </div>
               <div className=' w-10 rounded-[50%] border-[1px]  hover:bg-[#01FE99] hover:text-black transition-all ease-in-out duration-500 border-[#01FE99] text-[#01FE99] flex justify-center items-center h-10'>
               <Link to={item.gitHub} title='Github link'><FaGithub/></Link>
               </div>
                
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Work