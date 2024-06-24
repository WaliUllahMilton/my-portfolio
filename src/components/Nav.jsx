
// import { Link } from "react-router-dom"

// import { useEffect } from "react"
import { Link,useLocation } from "react-router-dom"


const Nav = () => {
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
    
    console.log(location.pathname)
    // useEffect(()=>{
    // })
  return (
    <>
        <nav className="flex flex-col gap-4  sm:flex-row items-center">
        {
            navData.map((item,index)=>(
                <Link 
                className={`leading-6  hover:text-[#01FE99] transition-all ease-in-out duration-100 font-jet text-base font-base active:text-red
                    ${location.pathname === item.href ? "border-b-2 border-[#01FE99] text-[#01FE99] " : "text-white" }`}
                // activeClassName="text-red-500 font-bold" 
                to={item.href} key={index}>{item.data}</Link>
            ))
        }
        <Link className="bg-[#01FE99] font-jet text-base font-bold py-[2px] px-4 rounded-[20px]">Hire me</Link>
        
        </nav>  
    </>
  )
}
export default Nav