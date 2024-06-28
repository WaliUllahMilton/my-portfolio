import { Link,useLocation } from "react-router-dom"
import { useState } from "react"
import { TiThMenuOutline } from "react-icons/ti";
// import StairTransition from "./stairTransition";


const Navbar = () => {
    const navData = [
        {
        data : "Home",
        href : '/'
        },
        {
        data : "Services",
        href : '/services'
        },
        {
        data : "Resume",
        href : '/resume'
        },
        {
        data : "work",
        href : '/work'
        },
        {
        data : "contact",
        href : '/contact'
        },
    ]
    const location = useLocation()
    let [toggleValue,setToggleValue]=useState(false)
  const handleTogglebtn = ()=>{
    setToggleValue(!toggleValue)
    }
    // useEffect(()=>{
    // })
  return (
    <>
        {/* <StairTransition/> */}
        <nav className="max-w-screen-lg mx-auto mt-4">
        <header className="relative  flex flex-col md:flex-row items-center justify-between">
            <div className="flex md:flex-none justify-between w-full md:w-auto md:px-0 px-4">
                <Link
                className="font-jet flex text-2xl text-white font-extrabold"
                to="/"
                >Milton 
                <span className="text-[#01FE99] font-jet text-2xl" >
                  .
                </span></Link>
                <button
                className="text-white text-lg md:hidden "
                 onClick={handleTogglebtn}
                >
                  <TiThMenuOutline/>
                </button>
            </div>
            <div className= {`transition-all h-[92vh] md:h-auto duration-500 ease-in-out z-[999]  w-[100vw] md:w-auto
            flex flex-col gap-4 absolute md:flex-row items-center md:bg-transparent bg-black
            ${toggleValue ? " -top-[110vh] pointer-events-none  h-full" : " top-10 pt-4 pb-10 md:top-0 md:right-0 pointer-events-auto"}  `}
            >
            {
                navData.map((item,index)=>(
                <Link 
                className={`leading-6  hover:text-[#01FE99] transition-all ease-in-out duration-100 font-jet text-base font-base active:text-red
                    ${location.pathname === item.href ? "border-b-2 border-[#01FE99] text-[#01FE99] " : "text-white" }`}
                to={item.href} key={index}>{item.data}</Link>
            ))
            }
            <Link className="bg-[#01FE99] font-jet text-base font-bold py-[2px] px-4 rounded-[20px]">Hire me</Link>
        
            </div>
        </header>
       
        </nav>  
    </>
  )
}
export default Navbar