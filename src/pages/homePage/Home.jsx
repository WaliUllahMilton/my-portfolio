import { FiDownloadCloud,  } from "react-icons/fi";
import { FaGithub,FaLinkedinIn,FaInstagram,FaFacebook, } from "react-icons/fa6";
// import Logo from "./../../assets/fotor-20240624224249.png"
import {Link} from "react-router-dom"
import Photo from "../../components/photo/Photo";


const Home = () => {
  
  
  return (
    <div className="max-w-screen-lg font-jet py-[20vh] mx-auto flex justify-between items-center text-white">
       <div className="w-[60vw]">
        <p className="text-lg font-bold">Frontend Web Developer</p>
        <h1 className="text-[60px] font-bold leading-[12vh]">
          Hello I'm
          <span className="block text-[#01FE99]">Wali Ullah Milton</span>
        </h1>
        <p className="w-auto sm:w-[45vw] my-4">
        I've been Developing Websites for the Last one Years & I've gotten pretty professional skills at it.I'm expert in Figma Design to Responsive Websites.I can Reassure you The Best Ever Output & 100 % Quality Work Based Out on My Professional Skills.
        </p>
        <div className="flex ">
          <button className="px-8 py-2 border-[#01FE99] border-[1px] rounded-[20px] text-[#01FE99] font-bold text-base flex justify-between gap-3 items-center
          hover:text-gray-950 hover:bg-[#01FE99] hover:font-bold transition-all duration-500
          ease-in-out
          ">Download cv 
            <span className="text-lg font-extrabold">
              <FiDownloadCloud/>
            </span>
          </button>
          <div className="flex items-center gap-4 justify-between ml-5">
            <Link className="text-[#01FE99] font-bold text-[2.5vh] border-[1px] border-[#01FE99] rounded-[50%] p-[8px] hover:text-gray-950 hover:bg-[#01FE99] hover:font-bold transition-all duration-500
          ease-in-out">
              <FaGithub/>
            </Link>
            <Link className="text-[#01FE99] font-bold text-[2.5vh] border-[1px] border-[#01FE99] rounded-[50%] p-[8px] hover:text-gray-950 hover:bg-[#01FE99] hover:font-bold transition-all duration-500
          ease-in-out">
              <FaLinkedinIn/>
            </Link>
            <Link className="text-[#01FE99] font-bold text-[2.5vh] border-[1px] border-[#01FE99] rounded-[50%] p-[8px] hover:text-gray-950 hover:bg-[#01FE99] hover:font-bold transition-all duration-500
          ease-in-out">
              <FaInstagram/>
            </Link>
            <Link className="text-[#01FE99] font-bold text-[2.5vh] border-[1px] border-[#01FE99] rounded-[50%] p-[8px] hover:text-gray-950 hover:bg-[#01FE99] hover:font-bold transition-all duration-500
          ease-in-out">
              <FaFacebook/>
            </Link>
            
              
          </div>
        </div>
       </div>
       <div> 
        <div>
          <Photo/>
        </div>
       </div>
    </div>  
  )
}

export default Home