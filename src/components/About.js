import React from 'react'
import { motion } from "motion/react"




const About = () => {
  return (
    <div
      name="about"

      className=" "
    
    >
     <div className="max-w-screen-md p-4 mx-auto flex flex-col justify-center w-full h-full">

        <motion.div 
               whileInView={{opacity:1, y:0}}
               initial={{opacity:0, y:-100}}
               transition={{duration:0.5}}
        className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </motion.div>

             <motion.p 
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:-200}}
             transition={{duration:0.5}}

             className="text-lg font-semibold text-gray-300  mt-20">
             I am a front-end developer with expertise in React, Tailwind CSS, JavaScript, HTML, 
             and Firebase. Passionate about creating interactive and responsive web applications,
              I have completed notable projects such as Crypto Tracker and Go Bhukkad. Crypto Tracker is a sophisticated cryptocurrency monitoring application 
              developed using React, MUI, Chart.js, and Framer Motion, featuring optimized user experience, data management, dynamic charts, and comparison functionalities. Go Bhukkad, 
              built with React,Tailwind CSS, and Redux, includes features like cart functionality and efficient user filtering through a search function.
             </motion.p>
             <br/>

             <motion.p 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-200}}
              transition={{duration:1}}
             className="text-lg font-semibold text-gray-300">

             I hold a Bachelor of Science degree from Vikramajit Singh Sanatan Dharma College and completed my intermediate studies at Shri Sanatan Dharam Education Center in Kanpur, India. My technical skill set includes proficiency in JavaScript, HTML, CSS, React, Tailwind, Git, GitHub, and various development tools like VSCode, IntelliJ, and Netbeans on Windows.
             </motion.p>
             <br/> 

              <motion.p 
               whileInView={{opacity:1, x:0}}
               initial={{opacity:0, x:-200}}
               transition={{duration:1.5}}
              className="text-lg font-semibold text-gray-300">
               Beyond my technical abilities, I have a keen interest in programming, listening to music, reading books, and playing badminton. I am fluent in English and a native speaker of Hindi. Additionally, I have participated in scientific challenges, demonstrating strong analytical and problem-solving skills.
               </motion.p>
        </div>
    </div>
  )
}

export default About