import Image from "../../assets/milton.png";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
        className='h-auto w-auto md:w-[298px] md:h-[298px] 2xl:w-[498px] 2xl:h-[498px] mix-blend-lighten rounded-full overflow-hidden'
      >
        <motion.img 
          src={Image} 
          alt="milton image" 
          className='w-full h-full object-cover'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
        />
        <motion.svg 
          className="absolute top-0 left-0 h-auto w-auto md:w-[300px] md:h-[300px] 2xl:w-[506px] 2xl:h-[506px]"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253" 
            r="250" 
            stroke="#00ff99" 
            strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{
                strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
                rotate:[120,360],
                
            }}
            transition={{
                duration:20,
                repeat:Infinity,
                repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
