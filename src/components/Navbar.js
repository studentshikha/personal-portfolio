import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll';

const Navbar = () => {
const[nav, setNav] = useState(false)
    const links=[
 {
    id:1,
    link:"home"
 },
 {
    id:2,
    link:"about"
 },
 {
    id:3,
    link:"portfolio"
 },
 
 {
    id:4,
    link:"contact"
 },
    ]
    
  return (
    <div className="flex justify-between items-center z-10  w-full h-20 text-white fixed  px-6" >
      <div>
        <h1 className="text-5xl font-signature ml-2">Shikha</h1>
      </div>

      <ul className="hidden md:flex">
       {
        links.map((item,index)=><li key={index}
        className="px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-105 duration-200"
        >
        <Link to={item.link} smooth duration={500}>
        {item.link}
        </Link> 
        </li>
        ) }

      </ul>

    <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden">
               { nav ?<FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
     {
                nav &&   
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
        {
        links.map((item,index)=><li key={index}
        className="px-4 cursor-pointer capitalize py-6"
        ><Link onClick={()=>setNav(!nav)} to={item.link} smooth duration={500}>
        {item.link}
        </Link> </li>)
       } 
        </ul>
    }
    </div>
  )
}

export default Navbar