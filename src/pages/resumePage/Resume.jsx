/* eslint-disable react/jsx-key */
import  {  useState } from 'react'
import {Link} from "react-router-dom"
const Resume = () => {
  const [select,setSelect]=useState(1)
 
  const education = {
    title: "Education",
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
      icon:" "
    },
    {
      name:"CSS 3",
      icon:" "
    },
    {
      name:"Bootstrap",
      icon:" "
    },
    {
      name:"Javascript",
      icon:" "
    },
    {
      name:"React js",
      icon:" "
    },
    {
      name:"Tailwind CSS",
      icon:" "
    },
    {
      name:"Node js",
      icon:" "
    },
    {
      name:"Express js",
      icon:" "
    },
    {
      name:"MongoDB",
      icon:" "
    },
  ]
  }
  const about ={
    title : "ABout me",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ex.",
    item:[{

    }]
  }
  console.log(select)
  return (
    <section className='max-w-screen-lg flex justify-between font-jet text-white text-lg font-bold mx-auto py-24'>
      <div className='flex-col  flex gap-3'>
        <Link onClick={()=>setSelect(1)} className='bg-gray-700 py-3 px-[100px] rounded-[15px]  outline-none'> Education</Link>
        <Link onClick={()=>setSelect(2)} className='bg-gray-700 py-3 px-[100px] rounded-[15px]  outline-none'> Skills</Link>
        <Link onClick={()=>setSelect(3)} className='bg-gray-700 py-3 px-[100px] rounded-[15px]  outline-none'> About me</Link>
      </div>
      
      <div>
      <div className={`${select==1?"visible" :"hidden"}`}>
          {
            education && 
            <>
              <h3>{education.title}</h3>
              {/* <p>{education.desc}</p> */}
             <div className=''>
             {
                education.items.map((item,index)=>(
                  <div key={index} className='bg-red-300'>
                    <p>Name of Institute : {item.institution}</p>
                    <p>Program : {item.degree}</p>
                    <p >Seasion : {item.seasion}</p>
                    <p> Result : {item.result}</p>
                
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
              <h3>{skills.title}</h3>
              <p>{skills.desc}</p>
              {
                skills.items.map((item,index)=>(
                  <div key={index}>
                    <h4>{item.name}</h4>
                    
                
                  </div>
                ))
              }
            </>
          }
        </div>
        <div className={`${select==3?"visible" :"hidden"}`}>
          {
            about && 
            <>
              <h3>{about.title}</h3>
              <p>{about.desc}</p>
              {
                education.items.map((item,index)=>(
                  <div key={index}>
                    <h4>{item.institution}</h4>
                    <h4 >{item.degree}</h4>
                    <h4 >{item.seasion}</h4>
                    <h4>{item.result}</h4>
                
                  </div>
                ))
              }
            </>
          }
        </div>

      </div>
      
    </section>
  )
}

export default Resume