import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import shikha from "../images/shikha.png"

import { Link } from 'react-scroll';
import { motion } from "motion/react"

const container=(delay)=>({
hidden : {x:-100, opacity:0},
visible:{
  x:0,
  opacity:1,
  transition:{duration: 0.5,delay: delay}
}
});



const Home = () => {
  return (
    <div name="home" className="h-screen border-neutral-900  items-center justify-center mx-auto max-w-screen-md ">



     <div className="max-w-screen-lg  gap-10 mx-auto  flex items-center flex-col px-4  justify-center h-full md:flex-row">

      <div className="flex flex-col mt-16 justify-center h-full">
       
        <motion.h2 
        variants={container(0)}
        initial="hidden"
        animate="visible"
         className="text-6xl sm:text-6xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  tracking-tight text-transparent font-bold"
         >
          I'm a FrontEnd Developer
         </motion.h2>

        <motion.p 
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className=" font-medium text-gray-400 py-4 max-w-md">
            Self-motivated graduate with a strong foundation 
            in front-end development technologies, including 
            React,Redux, Tailwind CSS,JavaScript, HTML, Firebase , Bootstrap, 
            Git, and GitHub, I am eager to contribute my skills and passion for 
            creating interactive and responsive web applications.
            
        </motion.p>
  
      <div className="">
       <motion.Link 
       variants={container(1)}
       initial="hidden"
       animate="visible"
       to="portfolio" smooth duration={500}
       className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-semibold">
        Portfolio
        <span className=" group-hover:rotate-90 duration-300">
            <MdKeyboardArrowRight sixe={25} className="ml-1"/>
        </span>
       </motion.Link>
       </div>

      </div>

      <div className="">
        <motion.img 
        initial={{x:100, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:0.5, delay:1.2}}
        className=" w-[50%] md:w-full mx-auto rounded-2xl shadow-lg shadow-gray-700"src={shikha} alt="image"/>
      </div>

     </div>


    </div>
  )
}

export default Home;
{/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}