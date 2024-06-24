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
        <header className="relative flex flex-col sm:flex-row items-center justify-between">
            <div className="flex sm:flex-none justify-between w-full sm:w-auto sm:px-0 px-4">
                <Link
                className="font-jet flex text-2xl text-white font-extrabold"
                to="/"
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
            <div className= {`transition-all h-full duration-500 ease-in-out 
            flex flex-col gap-4  sm:flex-row items-center
            ${toggleValue ? "absolute  -top-[300px] pointer-events-none" : "absolute top-10 sm:top-0 sm:right-0 pointer-events-auto"}  `}
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