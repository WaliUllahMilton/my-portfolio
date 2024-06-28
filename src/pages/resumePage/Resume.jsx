/* eslint-disable react/jsx-key */
import  {  useState } from 'react'
import {Link} from "react-router-dom"
import { FaHtml5,FaBootstrap,FaReact,FaNodeJs     } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiExpress,SiMongodb  } from "react-icons/si";
import Image from "../../assets/WhatsApp Image 2024-06-28 at 21.15.10_d6e907db.jpg"

// import AgencImage from "../../assets/"

const Resume = () => {
  const [select,setSelect]=useState(1)
  const [skillHover,setSkillHover]=useState(null)
 
  const education = {
    title: "My Education",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus.",
    items:[
      {
        institution: "B A D C High School",
        degree: "Secondary School Certificate (SSC)",
        seasion:"2015",
        result: "4.44"
      },
      {
        institution: "Govt. Mohammadpur Model School & College",
        degree: "Higher Secondary Certificate (HSC)",
        seasion:"2017",
        result:"3.83"
      },
      {
        institution: "Fareast Inernationa University",
        degree: "Bsc in CSE",
        seasion:"2018-2024",
        result:"Ongoing"
      },
    ]
  }
  const skills = {
    title: "My Skills",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus.",
    items:[{
      name:"HTML 5",
      icon:<FaHtml5/>
    },
    {
      name:"CSS 3",
      icon:<IoLogoCss3/>
    },
    {
      name:"Bootstrap",
      icon:<FaBootstrap/> 
    },
    {
      name:"Javascript",
      icon:<IoLogoJavascript/>
    },
    {
      name:"React js",
      icon:<FaReact />
    },
    {
      name:"Tailwind CSS",
      icon:<RiTailwindCssLine/>
    },
    {
      name:"Node js",
      icon:<FaNodeJs />
    },
    {
      name:"Express js",
      icon:<SiExpress/>
    },
    {
      name:"MongoDB",
      icon:<SiMongodb />
    },
  ]
  }
  const about ={
    title : "About me",
    desc: "I am a dedicated frontend developer specializing in React.js, passionate about building dynamic and responsive user interfaces. With a solid understanding of JavaScript and proficiency in React libraries and frameworks, I thrive on transforming complex designs into intuitive and interactive web applications. My experience includes leveraging state management with Redux or context API, integrating APIs, and optimizing performance to deliver seamless user experiences. I am committed to staying updated with React's evolving ecosystem, eager to implement best practices and explore new possibilities in frontend development. ",
    img:{
      name:"Wali Ullah Milton",
      src:Image
    },
    
  }
  console.log(select)
  return (
    <section className='max-w-screen-lg flex  gap-[60px] font-jet text-white text-lg font-bold mx-auto pt-24 pb-auto'>
      <div className='flex-col  flex gap-3'>
        <Link onClick={()=>setSelect(1)} className={` ${select===1 ? 'bg-[#01FE99] text-gray-700':'bg-gray-700 '} py-3 px-[100px]  transition-all ease-in-out duration-500 rounded-[15px]  outline-none`}> Education</Link>
        <Link onClick={()=>setSelect(2)} className={` py-3 px-[100px] ${select===2 ? 'bg-[#01FE99] text-gray-700':'bg-gray-700 '} py-3 px-[100px] transition-all ease-in-out duration-500 rounded-[15px]  outline-none`}> Skills</Link>
        <Link onClick={()=>setSelect(3)} className={`${select===3 ? 'bg-[#01FE99] text-gray-700':'bg-gray-700 '} py-3 px-[100px] py-3 px-[100px]  transition-all ease-in-out duration-500 rounded-[15px]  outline-none`}> About me</Link>
      </div>
      
      <div>
      <div className={`${select==1?"visible" :"hidden"}`}>
          {
            education && 
            <>
              <h3 className='font-bold mb-4'>{education.title}</h3>
              {/* <p>{education.desc}</p> */}
             <div className=''>
             {
                education.items.map((item,index)=>(
                  <div key={index} className='flex-row mb-4'>
                    <p className='flex text-base font-normal'><span className="w-[195px] text-lg font-bold ">Name of Institute</span>: {item.institution}</p>
                    <p className='flex text-base font-normal'><span className="w-[195px] text-lg font-bold ">Program</span>: {item.degree}</p>
                    <p className='flex text-base font-normal'><span className="w-[195px] text-lg font-bold ">Passing Year </span>: {item.seasion}</p>
                    <p className='flex text-base font-normal'><span className="w-[195px] text-lg font-bold ">Result </span>: {item.result}</p>
                
                  </div>
                ))
              }
             </div>
            </>
          }
        </div>
        <div className={`${select==2?"visible" :"hidden"}`}>
          
          {
            skills && 
            <>
              <h3 className='mb-4'>{skills.title}</h3>
              {/* <p>{skills.desc}</p> */}
              <div className='flex flex-wrap gap-6 items-center '>
              {
                skills.items.map((item,index)=>(
                  <div key={index} onMouseEnter={()=>{setSkillHover(1)}} 
                  onMouseLeave={()=>setSkillHover(null)}
                  className=' border-[1px] hover:bg-[#01FE99] hover:text-black w-[200px] py-[25px] border-[#01FE99] rounded-[10px] flex items-center justify-center gap-3 text-center cursor-pointer transition-all ease-in-out duration-500'>
                    <p className={`flex items-center text-4xl mb-2 justify-center${skillHover==1 ? "text-black":"text-[#01FE99]"} `}>{item.icon}</p>
                    <h4 className='text-base font-normal'>{item.name}</h4>
                
                  </div>
                ))
              }
              </div>
            </>
          }
        </div>
        <div className={`${select==3?"visible" :"hidden"} overflow-hidden`}>
          {
            about && 
            <>
              <h3>{about.title}</h3>
              <div className='h-[350px] flex justify-center mb-[100px]'>

                <img
                className='w-auto h-full object-cover border-2 border-[#01FE99] ' 
                src={about.img.src}
                 alt={about.img.name}  />
              </div>
              <p className='text-base font-normal'>{about.desc}</p>
              {
                // education.items.map((item,index)=>(
                //   <div key={index}>
                //     <h4>{item.institution}</h4>
                //     <h4 >{item.degree}</h4>
                //     <h4 >{item.seasion}</h4>
                //     <h4>{item.result}</h4>
                
                //   </div>
                // ))
              }
            </>
          }
        </div>

      </div>
      
    </section>
  )
}

export default Resume