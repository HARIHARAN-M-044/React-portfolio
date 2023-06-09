import React from 'react'

export default function About() {
  return (
    <div name="about" className='w-full h-screen bg-white text-blue-900'>
        <div className="flex justify-center items-center h-full">
          <div className='flex justify-between justify-center items-center w-9/12 max-w-[1000px] flex-col md:flex-row'>
            <div className='flex flex-col pr-6 '>
                <div className='text-left md:text-right'>
                <p className=' text-2xl sm:text-4xl font-bold text-blue-900 pb-2 md:text-5xl'>About</p>
                </div>
                <div className='text-left md:text-right'>
                <div className='text-2xl'><p>Hi,I'm Hariharan.Nice to have you here.Take a look around.</p> </div>
                </div>
            </div>
            <div className='text-left'>
              <div className='pt-11'>
              <p>I'm an upcoming developer ,currently pursuing my second year at SKCET ,
                I've completed my coding languages training and i'm eligible to develop an and web pages.
              </p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}
