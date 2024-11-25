import React from 'react';
import crypto from"../images/crypto.png";
import bhukkad from "../images/bhukkad.png";
import finflow from "../images/finflow.png";
import { motion } from "motion/react"

const Portfolio = () => {
  return (
    <div name="portfolio" className="   lg:p-10  text-white">
        <motion.div
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:0.5}} 
          className=" ml-52 pb-12">
        <motion.p 
       
        className="text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</motion.p>
        <p className="py-6 font-semibold text-gray-300 ">Check out some of my work right here</p>
        </motion.div>

   <div className="flex flex-row   mt-16  justify-center  shadow-lg shadow-gray-900   p-5 gap-16 w-[85%] m-auto  rounded-xl mx-w-full     items-center bg-gray-800 opacity-70 ">
  
    <div className=" ">
     <motion.img
     whileInView={{opacity:1, x:0}}
     initial={{opacity:0, x:-100}}
     transition={{duration:1}}
     
     width="800px" 
     className=" rounded-xl"
      src={crypto} 
      alt="image"
      />
    </div>

    <div className="flex   w-full justify-center flex-col gap-5" >

     <motion.h1
     whileInView={{opacity:1, x:0}}
     initial={{opacity:0, x:100}}
     transition={{duration:1}}
     className="text-2xl font-bold text-center">Crypto tracker</motion.h1>
        <hr/>
     <div>
    <motion.ul 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x:100}}
    transition={{duration:1}}
    className="list-disc list-inside">
    <li className=" capitalize font-semibold text-gray-300">eveloped with cutting-edge technologies including React, Material UI (MUI), Chart.js, and Framer Motion, Crypto Tracker stands as a
         sophisticated project tailored for seamless cryptocurrency monitoring.</li>
        <li className=" capitalize font-semibold text-gray-300">
              Implemented navigation
           features enabling users to efficiently sift through vast amounts
         of data while customizing their viewing experience with currency
            filters, sorting options,data handling mechanisms.</li>
        <li className="capitalize font-semibold text-gray-300">Leveraged real-time data to provide users with up-to-date insights into cryptocurrency trends
through dynamic charting capabilities, ensuring accurate and
timely analysis</li>
    </motion.ul>
      </div>

<motion.div 
whileInView={{opacity:1, x:0}}
initial={{opacity:0, x:100}}
transition={{duration:1.5}}
className="flex gap-3 flex-wrap">
    <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">React.js</div>
    <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">Html</div>
    <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">Material Ui</div>
    <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">Framer-Motion</div>
    <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">React-router</div>
    <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">Css</div>

</motion.div>
<motion.div 
whileInView={{opacity:1, x:0}}
initial={{opacity:0, x:100}}
transition={{duration:2}}
className="flex gap-4">
 <a className="  font-bold group text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" href="https://crypto-tracker-kappa-nine.vercel.app/">Live Link</a>
 <a className="  font-bold group text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" href="https://github.com/studentshikha/crypto-tracker">Github Link</a>
</motion.div>
    </div>

   </div>








   <div className="flex mt-16 justify-center shadow-lg shadow-gray-900    p-5 gap-16 w-[85%] m-auto  rounded-xl flex-row  items-center bg-gray-800 opacity-70">
  
  <div className="  ">
   <motion.img 
   whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x:-100}}
   transition={{duration:1}}

   width="800px" 
   className=" rounded-xl" 
   src={bhukkad} 
   alt="image"
   />
  </div>

  <div className="flex   w-full justify-center flex-col gap-5" >

   <motion.h1
   whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x:100}}
   transition={{duration:1}}
   className="text-2xl font-bold text-center">Go Bhukkad</motion.h1>
      <hr/>
   <div>
  <motion.ul
  whileInView={{opacity:1, x:0}}
  initial={{opacity:0, x:100}}
  transition={{duration:1}}
  className="list-disc list-inside">
  <li className=" capitalize font-semibold text-gray-300">Ensures an optimal viewing experience across various devices
  and screen sizes with Tailwind CSS.</li>
      <li className=" capitalize font-semibold text-gray-300">Cart functionality is implemented for adding dishes to cart for
      order.
            </li>
      <li className="capitalize font-semibold text-gray-300">Utilizes ReduxJS is used for efficient state management
      </li>
      <li className="capitalize font-semibold text-gray-300"> implemented serach function for user to filter menu
      </li>
     
  </motion.ul>
    </div>

<motion.div 
whileInView={{opacity:1, x:0}}
initial={{opacity:0, x:100}}
transition={{duration:1.5}}
className="flex gap-3 flex-wrap">
  <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">React.js</div>
  <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">Tailwind css</div>
  <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">Javascript</div>
  <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">Redux</div>

</motion.div>
<motion.div
whileInView={{opacity:1, x:0}}
initial={{opacity:0, x:100}}
transition={{duration:2}}
className="flex gap-4">
<a className=" font-bold group text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"href="https://food-project-orpin.vercel.app/">Live Link</a>
<a className=" font-bold group text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" href="https://github.com/studentshikha/food--project">Github Link</a>
</motion.div>
  </div>

 </div>

 <div className="flex mt-16 justify-center  shadow-lg shadow-gray-900 p-5 gap-16 w-[85%] m-auto  rounded-xl flex-row items-center bg-gray-800  opacity-70">
  
  <div className=" ">
   <motion.img 
   whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x:-100}}
   transition={{duration:1}}
   width="800px" className="rounded-xl " src={finflow} alt="image"/>
  </div>

  <div className="flex   w-full justify-center flex-col gap-5 " >

   <motion.h1
   whileInView={{opacity:1, x:0}}
   initial={{opacity:0, x:100}}
   transition={{duration:1}}
   className="text-2xl font-bold text-center">FinFlow</motion.h1>
      <hr/>
   <div>
  <motion.ul 
  whileInView={{opacity:1, x:0}}
  initial={{opacity:0, x:100}}
  transition={{duration:1}}
  className="list-disc list-inside">
  <li className=" capitalize font-semibold text-gray-300"> Ensures an optimal viewing experience across various devices
and screen sizes with Tailwind CSS.
</li>
      <li className=" capitalize font-semibold text-gray-300">
      Allow users to keep track of income and expenses which divide
      in sections with pie chart and line chart.</li>
      <li className="capitalize font-semibold text-gray-300"> Implemented google firebase for user authentication</li>
      <li className="capitalize font-semibold text-gray-300">  Dark and light theme mode for user compatibility.</li>
  </motion.ul>
    </div>

<motion.div
whileInView={{opacity:1, x:0}}
initial={{opacity:0, x:100}}
transition={{duration:1.5}}
className="flex gap-3 flex-wrap">
  <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">React.js</div>
  <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">Tailwind css</div>
  <div className="p-2 border-2 border-purple-500 text-purple-300 rounded-2xl">Javascript</div>
  <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">Firebase</div>
  <div className="p-2 border-2 border-purple-500 text-purple-400 rounded-2xl">Ant-design</div>
  

</motion.div>
<motion.div
whileInView={{opacity:1, x:0}}
initial={{opacity:0, x:100}}
transition={{duration:2}}
className="flex gap-4">
<a className=" font-bold group text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" href="https://finflow-mocha.vercel.app/">Live Link</a>
<a className="  font-bold group text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" href="https://github.com/studentshikha/food--project">Github Link</a>
</motion.div>
  </div>

 </div>








   
  
   
   </div>
  )
}

export default Portfolio;
