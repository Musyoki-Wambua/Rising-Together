import React from 'react'

function Footer() {
  return (
    //  component 
    <div class="container bg-grey-lighter p-8">
        <div class="sm:flex mb-4">
     
             
      
    
    
      
        <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
            <div class="text-red-light mb-2">Newsletter</div>
            <p class="text-grey-darker leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur. </p>
            <div class="mt-4 flex">
                <button class="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
                <input type="text" class="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address" />
            </div>
        </div>
    
    </div>
    </div>
  )
}

export default Footer