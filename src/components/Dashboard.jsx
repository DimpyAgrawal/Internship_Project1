import React from 'react'
import Card from './Card'

export default function Dashboard() {

    return (
        <>



            <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 darkshdkstext-gray-400 darkshdkshover:bg-gray-700 darkshdksfocus:ring-gray-600">
                <span class=" sr-only">Open sidebar</span>
                <svg class=" w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="separator-sidebar" class=" fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 overflow-y-scroll overflow-x-hidden">
                    <ul class="font-medium">
                        <li>
                            <a href="#" class=" flex items-center p-2 text-gray-900 rounded-lg darkshdkstext-white hover:bg-gray-100 darkshdkshover:bg-gray-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 darkshdkstext-gray-400 group-hover:text-gray-900 darkshdksgroup-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ms-3">Dashboard</span>
                            </a>
                        </li>


                        <li>
                            <hr class="w-[54] h-1 mx-auto bg-gray-100 border-0 rounded md:my-4 darkshdksbg-gray-700" />

                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg darkshdkstext-white hover:bg-gray-100 darkshdkshover:bg-gray-700 group">
                                <span class="material-symbols-outlined">
                                    database
                                </span>
                                <span class="flex-1 ms-3 whitespace-nowrap">My Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg darkshdkstext-white hover:bg-gray-100 darkshdkshover:bg-gray-700 group">
                                <span class="material-symbols-outlined">
                                    grid_view
                                </span>
                                <span class="flex-1 ms-3 whitespace-nowrap ">Sample Projects</span>
                            </a>
                        </li>

                        {/* <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 darkshdksborder-gray-700"> */}
                        <hr class="w-[54] h-1 mx-auto bg-gray-100 border-0 rounded md:my-4 darkshdksbg-gray-700" />

                        <a href="#" class="flex items-center p-2  text-gray-900 rounded-lg darkshdkstext-white hover:bg-gray-100 darkshdkshover:bg-gray-700 group">
                            <span class="material-symbols-outlined mt-6">
                                widgets
                            </span>
                            <span class="flex-1 ms-3 whitespace-nowrap mt-6">Apps</span>
                        </a>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg darkshdkstext-white hover:bg-gray-100 darkshdkshover:bg-gray-700 group">
                                <span class="material-symbols-outlined">
                                    play_circle
                                </span>
                                <span class="flex-1 ms-3 whitespace-nowrap">Intro to Necleo</span>
                            </a>
                        </li>
                        {/* </ul> */}


                        <li className='pt-[100%] '>
                            <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 darkshdkshover:bg-gray-700 darkshdkstext-white group">
                                <span class="material-symbols-outlined">
                                    help
                                </span>
                                <span class="ms-3">Help & Support</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 darkshdkshover:bg-gray-700 darkshdkstext-white group">
                                <span class="material-symbols-outlined">
                                    feedback
                                </span>
                                <span class="ms-3">Feedback</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 darkshdkshover:bg-gray-700 darkshdkstext-white group">
                                <span class="material-symbols-outlined">
                                    right_panel_open
                                </span>
                                <span class="ms-3 ">Collapse</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <Card />
        </>
    )
}
