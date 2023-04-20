import React from 'react'
import Netflix from "../projects/Netflix.png"
import Spotify from "../projects/Spotify.png"
import Notes from "../projects/Notes.png"
import Portfolio from "../projects/Portfolio.png"


export default function Work() {


    const showNote =(e)=>{
        e.preventDefault()
        alert("This app is not hosted yet.");

        // return false
        
    }
  return (
      <div name="projects" className='bg-white w-full h-fit pb-5'>
          <div className='max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full md:w-10/12 max-w-[1100px] '>
              <div className='pb-4'>
                  <p className='text-2xl sm:text-4xl font-bold text-blue-900 text-left underline my-5 pl-6 md:text-5xl'>Work</p>
                  <p className='my-2 pb-6 text-left pl-6'>These are some of my recent projects: </p>

              </div>

              <div className=' flex flex-col items-center my-2 lg:grid grid-cols-2 pl-5 max-w-[1000px] 2xl:grid-cols-3 gap-x-6  gap-y-8  '>
                  <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 group duration-200 content-div">
                      <img class="w-full opacity-100 group-hover:opacity-20" src={Netflix} alt="Sunset in the mountains" />

                      <div className='mx-auto pt-3 flex flex-row justify-center item-center'>
                              <a className='px-3' href="/">
                              <button class="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200 group-hover:bg-blue-500 group-hover:text-white">
                                  <span><a href="https://www.netflix.com/browse">Demo</a> </span>
                                  
                              </button>
                              </a>

                              <a href="/">
                              <button class="  bg-transparent group-hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200 group-hover:text-white">
                                  <span><a href="https://www.google.com/">Code</a></span>
                                  
                              </button>
                              </a>
                        </div>

                      <div class="px-6 py-4 opacity-100 group-hover:opacity-20">
                          <div class="font-bold text-xl mb-2">Netflix Clone</div>
                          <p className="text-gray-700 text-sm md:text-base">
                              This Netflix clone has been made by using React JS,HTML ,JavaScript.
                          </p>
                      </div>
                  </div>


                  <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 group duration-200 content-div">
                      <img class="w-full opacity-100 group-hover:opacity-20" src={Spotify} alt="Sunset in the mountains" />

                      <div className='mx-auto pt-3'>
                              <a className='px-3' href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200 group-hover:bg-blue-500 group-hover:text-white">
                              <span><a href="https://open.spotify.com/">Demo</a> </span>
                              </button>
                              </a>

                              <a href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200 group-hover:bg-blue-500 group-hover:text-white">
                              <span><a href="https://www.google.com/">Code</a></span>
                              </button>
                              </a>
                        </div>

                      <div class="px-6 py-4 opacity-100 group-hover:opacity-20">
                          <div class="font-bold text-xl mb-2">Spotify</div>
                          <p class="text-gray-700 text-sm md:text-base">
                              This Spotify has been made with React, Javascript and API's.
                          </p>
                      </div>
                  </div>

                  <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 group duration-200 content-div">
                      <img class="w-full opacity-100 group-hover:opacity-20" src={Notes} alt="Sunset in the mountains" />

                      <div className='mx-auto pt-3'>
                              <a className='px-3' href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200 group-hover:bg-blue-500 group-hover:text-white">
                              <span><a href="https://www.rapidtables.com/tools/notepad.html">Demo</a> </span>
                              </button>
                              </a>

                              <a href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200 group-hover:bg-blue-500 group-hover:text-white">
                              <span><a href="https://www.google.com/">Code</a></span>
                              </button>
                              </a>
                        </div>

                      <div class="px-6 py-4 opacity-100 group-hover:opacity-20">
                          <div class="font-bold text-xl mb-2">Notes App</div>
                          <p class="text-gray-700 text-sm md:text-base">
                              This Notes App has been made by react.js, HTML, Javascript.
                          </p>
                      </div>
                  </div>

                  
                  <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 group duration-200 content-div">
                      <img class="w-full opacity-100 group-hover:opacity-20" src={Portfolio} alt="Sunset in the mountains" />

                      <div className='mx-auto pt-3'>
                              <a className='px-3' href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200 group-hover:bg-blue-500 group-hover:text-white">
                              <span><a href="/" >Demo</a> </span>
                              </button>
                              </a>

                              <a href="/">
                              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded px-3 group-hover:scale-110 duration-200 group-hover:bg-blue-500 group-hover:text-white">
                              <span><a href="https://github.com/HARIHARAN-M-044">Code</a></span>
                              </button>
                              </a>
                        </div>
                      <div class="px-6 py-4 opacity-100 group-hover:opacity-20">
                          <div class="font-bold text-xl mb-2">Portfolio</div>
                          <p class="text-gray-700 text-sm md:text-base">
                              This Portfolio has been made by using React JS.
                          </p>
                      </div>
                  </div>
              </div>

          </div>

      </div>
  )
}
