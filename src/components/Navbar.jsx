import React from 'react'
import logo from '../assets/necleoicon.jpeg'


export default function Navbar() {
  return (
    <>
      

      <nav className="bg-white border-gray-200 darkshdksbg-gray-900 fixed w-full top-0 z-50">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="self-center text-2xl font-semibold whitespace-nowrap darkshdkstext-white">
       <img className='ml-6' src={logo} alt="" /></span>
  
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  
  <div className='flex font-semibold flex-col mr-[7px]'>
    <p className='flex'>Free Trial&nbsp;&nbsp; | &nbsp;&nbsp;<p className='text-xs pt-1'>2daysleft</p>&nbsp;</p>
  <p className='text-xs text-orange-500'>Extend free trail</p>
  </div>
      <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 darkshdksfocus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
      
        <span class="sr-only">Open user menu</span>
        

        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
      &nbsp; <span class="material-symbols-outlined">
arrow_drop_down
</span>
      
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow darkshdksbg-gray-700 darkshdksdivide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 darkshdkstext-white">Bonnie Green</span>
          <span class="block text-sm  text-gray-500 truncate darkshdkstext-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 darkshdkshover:bg-gray-600 darkshdkstext-gray-200 darkshdkshover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 darkshdkshover:bg-gray-600 darkshdkstext-gray-200 darkshdkshover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 darkshdkshover:bg-gray-600 darkshdkstext-gray-200 darkshdkshover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 darkshdkshover:bg-gray-600 darkshdkstext-gray-200 darkshdkshover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 darkshdkstext-gray-400 darkshdkshover:bg-gray-700 darkshdksfocus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
   
  </div>
  </div>
</nav>

    </>
  )
}
