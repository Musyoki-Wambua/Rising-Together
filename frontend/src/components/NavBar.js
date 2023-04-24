import React from 'react'
import logo from "./Images/logo.png"

function NavBar() {
  return (
    
    <div className="mx-auto  bg-green-900">
        
        <nav className="border-gray-200">
        <div class="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
            <a href="#" class="flex items-center text-white">  
        
                <img src={logo}
                 alt="Logo" class="h-14 w-14     mr-5  " />
                <span class="text-lg font-semibold whitespace-nowrap">Rising Together</span>
            </a>
            <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <li>
                 <a href="#" class="text-white font-bold px-3 py-2 rounded-md hover:bg-gray-700   hover:bg-firebrick transition-colors duration-300">Home</a>
                </li>
            
                <li>
                <a href="#" className="text-white hover:bg-gray-700 hover:text-white font-medium px-3 py-2 rounded-md transition-colors duration-300">Who We Are</a>
                </li>

                <li>
                <a href="#" className="text-white hover:bg-gray-700 hover:text-white font-medium px-3 py-2 rounded-md transition-colors duration-300">Get Involved</a>
                </li>

                <li>
                <a href="#" className="text-white hover:bg-gray-700 hover:text-white font-medium px-3 py-2 rounded-md transition-colors duration-300">Our Campaigns</a>
                </li>
                

                <li>
                <a href="#" className="text-white hover:bg-gray-700 hover:text-white font-medium px-3 py-2 rounded-md transition-colors duration-300">Pages  </a>
                </li>


                <li>
                    <button className='bg-green-300 hover:bg-magenta-300 text-white py-2 block px-4 rounded-lg'>Donate Now</button>
                </li>


            </ul>
            </div>
        </div>
        </nav>

        
    </div>


  )
}

export default NavBar