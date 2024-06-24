// import React from 'react'
import {AnimatePresence,motion} from "framer-motion"
import{useLocation} from "react-router-dom"
const PageTransition = ({children}) => {
    const location = useLocation()
    // console.log(pathName.pathname)
  return (
    <AnimatePresence>
        <div key={location.pathname} >
            <motion.div
            key={location ? location.pathname : "empty"}
            initial={{opacity:1}}
            animate={{
                opacity:0,
                transition:{delay:0.4,duration:0.4, ease:"easeInOut"}
            }}
            className='h-screen w-screen fixed z-50 top-0 bg-gray-950 pointer-events-none'
            />
            {children}
        </div>
    </AnimatePresence>
  )
}

export default PageTransition