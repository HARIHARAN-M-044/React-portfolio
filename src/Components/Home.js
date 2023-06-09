import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll/modules'

// import 

export default function Home() {
  return (
    <div name="home" className='w-full h-screen bg-white'>
        <div className="  max-w-[1200px] mx-auto px-20 flex flex-col justify-center items-start h-full" >
            <p className=' text-blue-900'>Hi, my name is</p>
            <h1 className=' text-2xl sm:text-3xl font-bold text-blue-900 text-left md:text-4xl lg:text-5xl'>HARIHARAN.M</h1>
            <h2  className=' text-2xl sm:text-3xl font-bold text-blue-900 text-left md:text-4xl lg:text-5xl'>I'm a Web developer</h2>
            <p className=' text-black-500 py-4 max-w-full text-left'>I am a developer specializing in building digital experiences. I am currently
                focused on building websites..
            </p>
            <div>
            <Link to="projects" spy={true} smooth={true} duration={500}>
                <button className='text-white-500 border-2 border-black px-6 py-3 flex items-center hover:bg-slate-500 group hover:scale-95 duration-200 '>View Work
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight/></span>
                </button>
                </Link>
            </div>
        </div>
        
      
    </div>
  )
}
