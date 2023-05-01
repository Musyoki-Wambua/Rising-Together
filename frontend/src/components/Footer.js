import React from 'react'
require('@tailwindcss/forms')

function Footer() {
  return (
  
  // This component uses @tailwindcss/forms

  // yarn add @tailwindcss/forms
  // npm install @tailwindcss/forms

  // plugins: [require('@tailwindcss/forms')]

<footer aria-label="Site Footer" class="bg-green-900">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="lg:flex lg:items-start lg:gap-8">
    

      <div
        class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
      >
        <div class="col-span-2">
          <div>
            <h2 class="text-2xl font-bold text-black-900">
              Rising Together
            </h2>

            <p class="mt-4 text-white">
              We connect nonprofits, donors and companies in nearly every country in the world.
              We help fellow nonprofits access the funding, tools, training and support they need to serve their communities.
            </p>
          </div>
        </div>

        <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
          <form class="w-full">
            <h2 class="text-2l font-bold text-white-800">
              Sign Up For Our Newsletter*
            </h2>
            <label for="UserEmail" class="sr-only"> Email </label>

            <div
              class="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
            >
              <input type="email" id="UserEmail" placeholder="Enter your email*" class="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"/>

              <button class="mt-1 w-full bg-yellow-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white rounded-full transition-all sm:mt-0 sm:w-auto sm:flex-shrink-0">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-black-900">Services</p>

          <nav aria-label="Footer Navigation - Services" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li>
              <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Fundraising and Donations
                </a>
              </li>

              <li>
              <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Volunteer Recruitment and Management
                </a>
              </li>

              <li>
              <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Grant and Schorlarship Management
                </a>
              </li>

              <li>
              <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Corporate Social Responsibility(CSR)
                </a>
              </li>

              <li>
              <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Community Outreach and Advocacy
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-black-900">Company</p>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li>
                <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  About
                </a>
              </li>

              <li>
                <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Who We Are
                </a>
              </li>

              <li>
                <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                Meet the Team
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-black-900">Helpful Links</p>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li>
                <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  FAQs
                </a>
              </li>

             
            </ul>
          </nav>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-black-900">Legal</p>

          <nav aria-label="Footer Navigation - Legal" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li>
                <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Contract Drafting
                </a>
              </li>

              <li>
                <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Corporate Law
                </a>
              </li>

              <li>
                <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Tax and Accounting Policy
                </a>
              </li>

              <li>
                <a href="#" class="text-white-500 transition hover:text-purple-600 hover:underline">
                  Legal Representation
                </a>
              </li>
            </ul>
          </nav>
        </div>

       

        
      </div>
    </div>

    <div class="mt-8 border-t border-gray-100 pt-8 flex flex-col items-center">
      <nav aria-label="Footer Navigation - Support" class="mb-4">
        <ul class="flex flex-wrap justify-center gap-4 text-xs">
          <li>
            <a href="#" class="text-gray-500 transition hover:opacity-75">
              Terms & Conditions
            </a>
          </li>

          <li>
            <a href="#" class="text-gray-500 transition hover:opacity-75">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="#" class="text-gray-500 transition hover:opacity-75">
              Cookies
            </a>
          </li>
        </ul>
      </nav>

      <p class="text-xs text-gray-500">
        &copy; 2023. Rising Together. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer